export default function HomePage() {
  return (
    <main id="content">
      <section className="intro" aria-labelledby="intro-heading">
        <h1 id="intro-heading">
          Chad Lenseth writes books. This is where they will live.
        </h1>
        <p className="lede">
          He writes them and sells them himself. A book shows up here once it
          is ready to read.
        </p>
      </section>

      <section className="shelf" id="books" aria-labelledby="books-heading">
        <h2 id="books-heading">Books</h2>
        <p>The shelf is opening. Books will be listed here when they are ready.</p>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          <a href="mailto:cjames112@gmail.com">cjames112@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
