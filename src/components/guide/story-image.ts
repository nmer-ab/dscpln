// Browser-only helpers shared by the quote generator and the /quotes line cards:
// copy a line, and save it as a 1080×1920 Stories image.

export type StoryTheme = "light" | "ink";

const colors = {
  light: { bg: "#f4f4f2", text: "#1f1f1d", accent: "rgba(31, 31, 29, 0.55)" },
  ink: { bg: "#1f1f1d", text: "#ffffff", accent: "rgba(255, 255, 255, 0.55)" },
};

/** Draws the card as a 1080×1920 Stories image, in the page's own fonts. */
export async function renderStory(text: string, category: string, theme: StoryTheme): Promise<Blob> {
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

/**
 * Renders the Stories image and hands it to the user: the share sheet on phones (its "Save Image"
 * puts it straight into Photos), a file download elsewhere. Resolves to what happened.
 */
export async function saveStory(text: string, category: string, theme: StoryTheme): Promise<"shared" | "cancelled" | "downloaded"> {
  const blob = await renderStory(text, category, theme);
  const file = new File([blob], "dscpln-line.png", { type: "image/png" });
  if (matchMedia("(pointer: coarse)").matches && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file] });
      return "shared";
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return "cancelled";
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
  return "downloaded";
}

export async function copyText(text: string) {
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
