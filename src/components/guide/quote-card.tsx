"use client";

import { useRef, useState } from "react";
import { copyText, saveStory } from "./story-image";

/** One line on a /quotes category page, with Copy and Save for Stories. */
export function QuoteCard({ id, n, text, category }: { id: string; n: number; text: string; category: string }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function flash(message: string) {
    setStatus(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2400);
  }

  async function save() {
    setBusy(true);
    try {
      if ((await saveStory(text, category, "lime")) === "downloaded") flash("Image saved");
    } catch {
      flash("Couldn't create the image");
    } finally {
      setBusy(false);
    }
  }

  return (
    <li id={id} className="qc">
      <span className="qc-n" aria-hidden="true">{String(n).padStart(2, "0")}</span>
      <blockquote className="qc-line">
        <p id={`${id}-text`}>{text}</p>
      </blockquote>
      <div className="qc-actions">
        <button type="button" className="qc-btn" aria-describedby={`${id}-text`} onClick={() => copyText(text).then(() => flash("Copied"))}>
          Copy
        </button>
        <button type="button" className="qc-btn" aria-describedby={`${id}-text`} onClick={save} disabled={busy}>
          Save for Stories
        </button>
        <span className="qc-status" role="status">{status}</span>
      </div>
    </li>
  );
}
