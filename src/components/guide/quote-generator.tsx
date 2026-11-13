"use client";

import { useRef, useState } from "react";
import { disciplineLines, lineCategories, type LineCategory } from "@/data/discipline-lines";
import { copyText, saveStory, type StoryTheme } from "./story-image";

type Filter = "All" | LineCategory;
type Theme = StoryTheme;

const filters: Filter[] = ["All", ...lineCategories];
const lines = lineCategories.flatMap((category) => disciplineLines[category].map((text) => ({ text, category })));
const ids = lines.map((_, i) => i);
const randomItem = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

export function QuoteGenerator() {
  const [filter, setFilter] = useState<Filter>("All");
  const [theme, setTheme] = useState<Theme>("light");
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  // Lines already shown, so nothing repeats until a category has been seen in full.
  const shown = useRef(new Set([0]));
  const statusTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const line = lines[current];

  function flash(message: string) {
    setStatus(message);
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(""), 2400);
  }

  function pick(from: Filter) {
    const pool = ids.filter((i) => from === "All" || lines[i].category === from);
    const seen = shown.current;
    let candidates = pool.filter((i) => !seen.has(i));
    if (candidates.length === 0) {
      pool.forEach((i) => seen.delete(i));
      if (pool.includes(current)) seen.add(current);
      candidates = pool.filter((i) => i !== current);
    }
    const id = randomItem(candidates);
    seen.add(id);
    setCurrent(id);
  }

  function choose(next: Filter) {
    setFilter(next);
    if (next !== "All" && line.category !== next) pick(next);
  }

  async function download() {
    setBusy(true);
    try {
      if ((await saveStory(line.text, line.category, theme)) === "downloaded") flash("Image saved");
    } catch {
      flash("Couldn't create the image. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="qg">
      <div className="qg-bar">
        <div className="qg-chips" role="group" aria-label="Category">
          {filters.map((f) => (
            <button key={f} type="button" className="qg-chip" aria-pressed={filter === f} onClick={() => choose(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="qg-swatches" role="group" aria-label="Card color">
          {(["light", "ink"] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={`qg-swatch ${t}`}
              aria-pressed={theme === t}
              aria-label={t === "light" ? "Light card" : "Ink card"}
              title={t === "light" ? "Light" : "Ink"}
              onClick={() => setTheme(t)}
            />
          ))}
        </div>
      </div>

      <figure className={`qg-card ${theme}`}>
        <span className="qg-cat">{line.category}</span>
        <blockquote className="qg-line" aria-live="polite">
          <p>{line.text}</p>
        </blockquote>
        <figcaption className="qg-mark">dscpln.app</figcaption>
      </figure>

      <div className="qg-actions">
        <button type="button" className="g-print-btn" onClick={() => pick(filter)}>New line</button>
        <button type="button" className="qg-btn" onClick={() => copyText(line.text).then(() => flash("Copied"))}>Copy</button>
        <button type="button" className="qg-btn" onClick={download} disabled={busy}>Download for Stories</button>
        <span className="qg-status" role="status">{status}</span>
      </div>
    </div>
  );
}
