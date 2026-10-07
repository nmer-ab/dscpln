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

export function getDoc(slug: DocSlug) {
  const file = fs.readFileSync(path.join(process.cwd(), "content", `${slug}.md`), "utf8");
  const { data, content } = matter(file);
  return {
    title: String(data.title),
    description: String(data.description),
    html: marked.parse(content, { async: false }),
  };
}
