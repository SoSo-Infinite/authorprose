import { books, site } from "../lib/books";

export default function sitemap() {
  const lastModified = new Date("2026-10-09");
  return [
    { url: `${site.url}/`, lastModified, priority: 1 },
    ...books.map((b) => ({ url: `${site.url}/books/${b.slug}`, lastModified, priority: 0.9 })),
    { url: `${site.url}/about`, lastModified, priority: 0.6 },
    { url: `${site.url}/privacy`, lastModified, priority: 0.2 },
  ];
}
