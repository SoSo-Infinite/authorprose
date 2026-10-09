import { site } from "../../lib/books";

export const metadata = {
  title: "About Chad Lenseth",
  description: "Chad Lenseth writes and self-publishes books. This is his home for them.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="content">
      <section className="intro" aria-labelledby="about-heading">
        <h1 id="about-heading">About Chad</h1>
      </section>
      <section className="reading">
        <p>
          Chad Lenseth writes and self-publishes books. His first, <a href="/books/the-coherence-protocol">The Coherence Protocol</a>,
          came out on Kindle in March 2026.
        </p>
        <p>
          He also builds software, including AI tools for local businesses
          through Albany AI Guy.
        </p>
        <p>
          Author Prose is where each book gets a page once it&apos;s out. To say hello or ask about a book, email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </main>
  );
}
