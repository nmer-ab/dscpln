import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docSlugs, getDoc, isDocSlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return docSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  if (!isDocSlug(slug)) return {};
  const { title, description } = getDoc(slug);
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, url: `/${slug}`, images: "/og.png" },
  };
}

export default async function DocPage(props: PageProps<"/[slug]">) {
  const { slug } = await props.params;
  if (!isDocSlug(slug)) notFound();
  const { html } = getDoc(slug);

  return (
    <article
      className="legal mx-auto w-full max-w-[760px] px-6 pt-16 pb-24"
      // Our own markdown from content/, rendered at build time.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
