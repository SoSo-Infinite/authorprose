import { books, site } from "../lib/books";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#author`,
      name: site.author,
      url: `${site.url}/about`,
    },
    ...books.map((b) => ({
      "@type": "Book",
      name: b.title,
      author: { "@id": `${site.url}/#author` },
      bookFormat: "https://schema.org/EBook",
      datePublished: b.published,
      inLanguage: "en",
      url: `${site.url}/books/${b.slug}`,
      sameAs: b.amazonUrl,
    })),
  ],
};

export default function HomePage() {
  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="intro" aria-labelledby="intro-heading">
        <h1 id="intro-heading">Books by Chad Lenseth.</h1>
        <p className="lede">
          He writes them and publishes them himself. Each one gets a page here
          once it&apos;s out.
        </p>
      </section>

      <section className="shelf" id="books" aria-labelledby="books-heading">
        <h2 id="books-heading">Books</h2>
        <ul className="book-list">
          {books.map((b) => (
            <li key={b.slug} className="book">
              <div className="book-spine" aria-hidden="true">
                <span>{b.title}</span>
              </div>
              <div className="book-body">
                <h3>
                  <a href={`/books/${b.slug}`}>{b.title}</a>
                </h3>
                <p className="book-meta">
                  {b.format} · {b.publishedLabel}
                </p>
                <p>{b.short}</p>
                <p className="book-actions">
                  <a className="button" href={b.amazonUrl} rel="noopener">
                    Get it on Amazon
                  </a>
                  <a href={`/books/${b.slug}`}>More about the book</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>
    </main>
  );
}
