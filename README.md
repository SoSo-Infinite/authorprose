# Author Prose

The public site for Chad Lenseth’s books.

- Live domain: [authorprose.com](https://authorprose.com)
- Contact: cjames112@gmail.com

Books live in `lib/books.js`. Only list a book that is really out, with facts copied from its store listing. This repo does not invent titles, covers, prices, reviews, or publication details.

- Listed: The Coherence Protocol (Kindle, Mar 11, 2026, ASIN B0GS69CWNK), checked against amazon.com Oct 9, 2026.
- Test: `npm run build && npx next start -p 3113` then `npm test -- http://localhost:3113`.
