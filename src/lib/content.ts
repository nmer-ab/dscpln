import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Each slug is content/<slug>.md and is served at /<slug>.
export const docSlugs = ["privacy", "terms", "support", "delete-account"] as const;
export type DocSlug = (typeof docSlugs)[number];

export function isDocSlug(slug: string): slug is DocSlug {
  return (docSlugs as readonly string[]).includes(slug);
}

// Same markup lucide-react renders for <ArrowRight size={20} />; markdown can't hold a component.
const arrowRightSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right" aria-hidden="true" style="display:inline-block;margin-left:8px;vertical-align:-0.2em"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';

export function getDoc(slug: DocSlug) {
  const file = fs.readFileSync(path.join(process.cwd(), "content", `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  return {
    title: String(data.title),
    description: String(data.description),
    // The icon's margin-left replaces the space before each "→" in menu paths.
    html: marked.parse(content.replace(/ ?→/g, arrowRightSvg), { async: false }),
  };
}
