"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { copyText } from "./story-image";

/* Save: bookmarks the page in localStorage under one key, newest first. */

const SAVED_KEY = "dscpln:saved";
type SavedPage = { path: string; title: string; savedAt: string };

function readSaved(): SavedPage[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(SAVED_KEY) ?? "[]");
    return Array.isArray(value) ? (value as SavedPage[]) : [];
  } catch {
    return [];
  }
}

const savedListeners = new Set<() => void>();

function subscribeSaved(listener: () => void) {
  savedListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    savedListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

/** Save and Share buttons for the article meta row. */
export function ArticleActions({ path, title }: { path: string; title: string }) {
  const saved = useSyncExternalStore(
    subscribeSaved,
    () => readSaved().some((p) => p.path === path),
    () => false,
  );
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function flash(message: string) {
    setStatus(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2400);
  }

  function toggleSave() {
    const others = readSaved().filter((p) => p.path !== path);
    const next = saved ? others : [{ path, title, savedAt: new Date().toISOString() }, ...others];
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
    } catch {
      flash("Couldn't save in this browser");
      return;
    }
    savedListeners.forEach((l) => l());
    flash(saved ? "Removed from saved" : "Saved on this device");
  }

  async function share() {
    const url = `${window.location.origin}${path}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Closing the share sheet rejects; nothing to do.
      }
      return;
    }
    try {
      await copyText(url);
      flash("Link copied");
    } catch {
      flash("Couldn't copy the link");
    }
  }

  return (
    <>
      <span className="ar-meta-sp" />
      <button type="button" className="ar-btn ghost" aria-pressed={saved} onClick={toggleSave}>
        {saved ? "Saved" : "Save"}
      </button>
      <button type="button" className="ar-btn ink" onClick={share}>
        {status === "Link copied" ? "Link copied" : "Share"}
      </button>
      <span className="ar-status" role="status">{status}</span>
    </>
  );
}

export type TocItem = { id: string; label: string };

/** "On this page": sticky on wide screens, a button that opens the list on phones. Highlights the section being read. */
export function ArticleToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => el !== null);
    let frame = 0;

    const update = () => {
      frame = 0;
      // The current section is the last one whose top has passed a line near the top of the window.
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top > 140) break;
        current = section.id;
      }
      // At the end of the page, the last section counts as read even when it's too short to reach the line.
      const end = sections.at(-1);
      if (end && end.getBoundingClientRect().bottom <= window.innerHeight) current = end.id;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);

  return (
    <nav className={`ar-toc${open ? " open" : ""}`} aria-label="On this page">
      <p className="ar-toc-title">On this page</p>
      <button type="button" className="ar-toc-btn" aria-expanded={open} aria-controls="ar-toc-list" onClick={() => setOpen((o) => !o)}>
        On this page
      </button>
      <ol id="ar-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={item.id === active ? "location" : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
