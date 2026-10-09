// node scripts/smoke.mjs [baseUrl] — run against `next start`
const base = process.argv[2] || "http://localhost:3000";
let fail = 0;
const ok = (c, l) => { if (!c) fail++; console.log(`${c ? "PASS" : "FAIL"} ${l}`); };
const get = async (p) => { const r = await fetch(base + p); return [r.status, r.headers.get("content-type")?.startsWith("image") ? "" : await r.text()]; };
let [s, h] = await get("/");
ok(s === 200 && /The Coherence Protocol/.test(h), "/ lists The Coherence Protocol");
ok(/https:\/\/www\.amazon\.com\/dp\/B0GS69CWNK/.test(h), "/ links the real Amazon listing");
ok(/"@type":"Book"/.test(h), "/ has Book JSON-LD");
ok(!/\$\d|★|stars|review/i.test(h.replace(/<script[\s\S]*?<\/script>/g, "")), "/ has no prices, ratings or review claims");
for (const [p, re] of [["/books/the-coherence-protocol", /isn&#x27;t medical|isn't medical/], ["/about", /About Chad/], ["/privacy", /tracking scripts/]]) {
  [s, h] = await get(p);
  ok(s === 200 && re.test(h), `${p} 200 + content`);
  ok(new RegExp(`rel="canonical" href="https://authorprose.com${p}"`).test(h), `${p} canonical`);
}
[s, h] = await get("/robots.txt"); ok(s === 200 && /sitemap\.xml/.test(h), "robots.txt");
[s, h] = await get("/sitemap.xml"); ok(s === 200 && /the-coherence-protocol/.test(h), "sitemap.xml");
[s] = await get("/favicon.ico"); ok(s === 200, "favicon.ico");
[s] = await get("/opengraph-image"); ok(s === 200, "opengraph-image");
[s] = await get("/nope"); ok(s === 404, "404 for unknown page");
console.log(fail ? `${fail} failed` : "all smoke checks passed");
process.exit(fail ? 1 : 0);
