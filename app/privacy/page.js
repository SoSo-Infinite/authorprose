import { site } from "../../lib/books";

export const metadata = {
  title: "Privacy",
  description: "Author Prose has no accounts, no forms and no tracking scripts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="content">
      <section className="intro" aria-labelledby="privacy-heading">
        <h1 id="privacy-heading">Privacy</h1>
        <p className="book-meta">Last updated October 9, 2026</p>
      </section>
      <section className="reading">
        <p>
          This site has no accounts, no forms, no ads and no analytics or
          tracking scripts, and it doesn&apos;t set cookies.
        </p>
        <p>
          It&apos;s hosted on Vercel, which handles standard request details
          such as IP address and browser type to serve the pages and keep them
          secure. See{" "}
          <a href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer">
            Vercel&apos;s privacy policy
          </a>
          .
        </p>
        <p>
          Links to Amazon take you to Amazon&apos;s site, where Amazon&apos;s
          own privacy notice applies.
        </p>
        <p>
          If you email, your message is used only to reply. Questions:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </main>
  );
}
