"use client";

/* eslint-disable @next/next/no-img-element -- static line-art SVG, sized by CSS */
import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { copyText, saveStory } from "@/components/guide/story-image";

export type DailyLine = { text: string; name: string; slug: string; pose: string };

const DAY = 86_400_000;
const today = () => Math.floor(Date.now() / DAY);
const noop = () => () => {};
const dateLabel = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

/**
 * One line a day, the same for everyone: the UTC day number picks it from `lines`.
 * The site is a static export, so the build renders the build day's line and the browser
 * switches to today's on hydration.
 */
export function QuoteOfTheDay({ lines, buildDay }: { lines: DailyLine[]; buildDay: number }) {
  const day = useSyncExternalStore(noop, today, () => buildDay);
  const line = lines[day % lines.length];
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
      if ((await saveStory(line.text, line.name, "ink")) === "downloaded") flash("Image saved");
    } catch {
      flash("Couldn't create the image");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="hub-qotd">
      <div>
        <small>
          {line.name.toUpperCase()} · {dateLabel.format(day * DAY).toUpperCase()}
        </small>
        <blockquote>
          <p>{line.text}</p>
        </blockquote>
        <div className="hub-btns">
          <button type="button" className="hub-b hub-b-white" onClick={() => copyText(line.text).then(() => flash("Copied"))}>
            Copy
          </button>
          <button type="button" className="hub-b hub-b-ghost" onClick={save} disabled={busy}>
            Save for Stories
          </button>
          <Link href={`/quotes/${line.slug}`} className="hub-b hub-b-ghost">
            More {line.name.toLowerCase()} quotes →
          </Link>
          <span className="hub-status" role="status">{status}</span>
        </div>
      </div>
      <img className="hub-qotd-milo" src={`/milo-v3/milo-${line.pose}.svg`} alt="" width={188} height={292} />
    </div>
  );
}
