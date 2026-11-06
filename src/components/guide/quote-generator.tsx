"use client";

import { useRef, useState } from "react";
import { disciplineLines, lineCategories, type LineCategory } from "@/data/discipline-lines";

type Filter = "All" | LineCategory;
type Theme = "lime" | "ink";

const filters: Filter[] = ["All", ...lineCategories];
const lines = lineCategories.flatMap((category) => disciplineLines[category].map((text) => ({ text, category })));
const ids = lines.map((_, i) => i);
const randomItem = <T,>(items: T[]) => items[Math.floor(Math.random() * items.length)];

const colors = {
  lime: { bg: "#c8e26a", text: "#1f1f1d", accent: "#3d4a12" },
  ink: { bg: "#1f1f1d", text: "#fbfaf7", accent: "#c8e26a" },
};

/** Draws the card as a 1080×1920 Stories image, in the page's own fonts. */
async function renderStory(text: string, category: string, theme: Theme): Promise<Blob> {
  const root = getComputedStyle(document.documentElement);
  const serif = `${root.getPropertyValue("--font-serif").trim() || "Georgia"}, Georgia, serif`;
  const sans = `${root.getPropertyValue("--font-inter").trim() || "Arial"}, Arial, sans-serif`;
  await Promise.all([document.fonts.load(`600 100px ${serif}`, text), document.fonts.load(`600 32px ${sans}`, "dscpln.app")]);

  const W = 1080;
  const H = 1920;
  const pad = 110;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  const c = colors[theme];
  const spacing = (px: number) => {
    if ("letterSpacing" in ctx) ctx.letterSpacing = `${px}px`;
  };

  ctx.fillStyle = c.bg;
  ctx.fillRect(0, 0, W, H);

  // Fit the line: largest size that wraps to at most 7 rows.
  const words = text.split(" ");
  let size = 104;
  let rows: string[] = [];
  for (; size >= 56; size -= 4) {
    ctx.font = `600 ${size}px ${serif}`;
    spacing(-size * 0.012);
    rows = [];
    let row = "";
    for (const word of words) {
      const next = row ? `${row} ${word}` : word;
      if (row && ctx.measureText(next).width > W - pad * 2) {
        rows.push(row);
        row = word;
      } else {
        row = next;
      }
    }
    rows.push(row);
    if (rows.length <= 7) break;
  }

  const lineHeight = size * 1.14;
  const eyebrowGap = 64;
  const blockHeight = eyebrowGap + rows.length * lineHeight;
  let y = (H - blockHeight) / 2;

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = c.accent;
  ctx.font = `600 30px ${sans}`;
  spacing(4);
  ctx.fillText(category.toUpperCase(), pad, y);
  y += eyebrowGap;

  ctx.fillStyle = c.text;
  ctx.font = `600 ${size}px ${serif}`;
  spacing(-size * 0.012);
  rows.forEach((row, i) => ctx.fillText(row, pad, y + size * 0.82 + i * lineHeight));

  // Small mark, kept clear of the Stories reply bar.
  ctx.font = `600 32px ${sans}`;
  spacing(1);
  ctx.textAlign = "center";
  ctx.globalAlpha = 0.72;
  ctx.fillText("dscpln.app", W / 2, H - 230);
  ctx.globalAlpha = 1;

  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Export failed"))), "image/png"));
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

export function QuoteGenerator() {
  const [filter, setFilter] = useState<Filter>("All");
  const [theme, setTheme] = useState<Theme>("lime");
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
      const blob = await renderStory(line.text, line.category, theme);
      const file = new File([blob], "dscpln-line.png", { type: "image/png" });
      // On phones, the share sheet's "Save Image" puts it straight into Photos.
      if (matchMedia("(pointer: coarse)").matches && navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file] });
          return;
        } catch (err) {
          if (err instanceof DOMException && err.name === "AbortError") return;
        }
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      flash("Image saved");
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
          {(["lime", "ink"] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={`qg-swatch ${t}`}
              aria-pressed={theme === t}
              aria-label={t === "lime" ? "Lime card" : "Ink card"}
              title={t === "lime" ? "Lime" : "Ink"}
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
