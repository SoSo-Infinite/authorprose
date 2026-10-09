// Only books that really exist go here. Facts are copied from the live
// Amazon listing (checked Oct 9, 2026). No prices, ratings or review quotes:
// those change on Amazon and aren't ours to restate.
export const books = [
  {
    slug: "the-coherence-protocol",
    title: "The Coherence Protocol",
    author: "Chad Lenseth",
    format: "Kindle eBook",
    published: "2026-03-11",
    publishedLabel: "March 11, 2026",
    language: "English",
    asin: "B0GS69CWNK",
    amazonUrl: "https://www.amazon.com/dp/B0GS69CWNK",
    short:
      "A short guide to a six-step morning sequence and a three-breath practice for moving from stress and mental noise toward a clear, focused state.",
    long: [
      "Most mornings start with the mind already running: replaying problems, checking for threats, deciding who you need to be today. The Coherence Protocol is about interrupting that loop before it sets the tone for the day.",
      "The book lays out a six-step sequence and a three-breath “ignition” practice. It draws on neuroscience, HeartMath Institute research and Scripture, and it treats reaching a calm, focused state as a skill you can train.",
      "It's written to be read in one sitting and used the next morning.",
    ],
  },
];

export function getBook(slug) {
  return books.find((b) => b.slug === slug);
}

export const site = {
  url: "https://authorprose.com",
  name: "Author Prose",
  author: "Chad Lenseth",
  email: "cjames112@gmail.com",
};
