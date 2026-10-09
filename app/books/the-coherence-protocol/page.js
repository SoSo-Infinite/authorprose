import { getBook, site } from "../../../lib/books";

const book = getBook("the-coherence-protocol");

export const metadata = {
  title: book.title,
  description: book.short,
  alternates: { canonical: `/books/${book.slug}` },
  openGraph: {
    type: "book",
    title: `${book.title} by ${book.author}`,
    description: book.short,
    url: `/books/${book.slug}`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: book.title,
  author: { "@type": "Person", name: book.author, url: `${site.url}/about` },
  bookFormat: "https://schema.org/EBook",
  datePublished: book.published,
  inLanguage: "en",
  description: book.short,
  url: `${site.url}/books/${book.slug}`,
  sameAs: book.amazonUrl,
};

export default function BookPage() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="crumb">
        <a href="/#books">Books</a>
      </p>
      <section className="intro" aria-labelledby="book-heading">
        <h1 id="book-heading">{book.title}</h1>
        <p className="book-meta">
          By {book.author} · {book.format} · {book.publishedLabel}
        </p>
      </section>
      <section className="reading" aria-label="About the book">
        {book.long.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
        <p className="book-actions">
          <a className="button" href={book.amazonUrl} rel="noopener">
            Get it on Amazon
          </a>
        </p>
        <p className="fineprint">
          Sold and delivered by Amazon. Price and availability are shown on
          Amazon. This book shares a practice and the author&apos;s view of it;
          it isn&apos;t medical or mental-health advice.
        </p>
      </section>
    </main>
  );
}
