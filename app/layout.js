import "./globals.css";

export const metadata = {
  title: "Author Prose",
  description: "Chad Lenseth writes books. This is where they will live.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <header className="site-header">
          <a className="brand" href="#content">
            Author Prose
          </a>
          <nav className="nav" aria-label="Page">
            <a href="#books">Books</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">Author Prose</footer>
      </body>
    </html>
  );
}
