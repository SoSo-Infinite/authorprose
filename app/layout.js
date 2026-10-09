import "./globals.css";
import { site } from "../lib/books";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Author Prose — books by Chad Lenseth",
    template: "%s — Author Prose",
  },
  description:
    "Books by Chad Lenseth, starting with The Coherence Protocol on Kindle.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: site.name,
    type: "website",
    url: site.url,
    title: "Author Prose — books by Chad Lenseth",
    description:
      "Books by Chad Lenseth, starting with The Coherence Protocol on Kindle.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <header className="site-header">
          <a className="brand" href="/">
            Author Prose
          </a>
          <nav className="nav" aria-label="Site">
            <a href="/#books">Books</a>
            <a href="/about">About</a>
            <a href="/#contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>Author Prose · Chad Lenseth</span>
          <nav aria-label="Footer" className="footer-nav">
            <a href="/about">About</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
