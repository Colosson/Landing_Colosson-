import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

let workerPromise;

async function worker() {
  workerPromise ??= import(
    new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url)
      .href
  ).then((module) => module.default);
  return workerPromise;
}

async function render(pathname = "/") {
  const app = await worker();
  return app.fetch(
    new Request(`https://colosson.net${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function textContent(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function imageAudit(html) {
  return [...html.matchAll(/<img\b[^>]*>/g)].map(([tag]) => ({
    tag,
    alt: tag.match(/\salt="([^"]*)"/)?.[1] ?? null,
    src: tag.match(/\ssrc="([^"]*)"/)?.[1] ?? null,
  }));
}

function contentImages(html) {
  return imageAudit(html).filter(
    (image) =>
      image.src &&
      !image.src.endsWith("/colosson-symbol.png") &&
      !image.src.endsWith("/colosson-lockup-2026.png"),
  );
}

test("homepage has unique metadata, one H1, local schema and conversion controls", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Colosson \| AI Systems, NFC Products &amp; 3D Production<\/title>/);
  assert.match(html, /<meta name="description" content="Colosson creates AI systems/);
  assert.equal(count(html, /<h1(?:\s[^>]*)?>/g), 1);
  assert.match(textContent(html.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? ""), /We make\s*ideas real\./);
  assert.doesNotMatch(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "", /We make ideas real/i);
  assert.match(html, /"@type":"ProfessionalService"/);
  assert.match(html, /class="whatsapp-button"/);
  assert.match(html, /class="share-button/);
  assert.match(html, /href="\/ai-systems"/);
  assert.match(html, /href="\/connected-products"/);
  assert.match(html, /href="\/custom-products"/);

  const images = contentImages(html);
  assert.ok(images.length > 0);
  assert.equal(images.filter((image) => !image.alt?.trim()).length, 0);
});

const solutionRoutes = [
  {
    path: "/ai-systems",
    title: "AI Systems &amp; Automation for Real Operations | Colosson",
    h1: "AI systems built around real operations",
  },
  {
    path: "/connected-products",
    title: "NFC Products &amp; Smart Token Systems | Colosson",
    h1: "Connected products that bridge physical and digital",
  },
  {
    path: "/custom-products",
    title: "Custom Corporate Products &amp; 3D Production | Colosson",
    h1: "Custom products designed to be used",
  },
];

test("solution cluster has distinct metadata and complete search-intent structure", async () => {
  const titles = new Set();
  const descriptions = new Set();

  for (const route of solutionRoutes) {
    const response = await render(route.path);
    assert.equal(response.status, 200, route.path);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const description = html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "";
    const h1Match = html.match(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/);
    const h1 = textContent(h1Match?.[1] ?? "");

    assert.equal(title, route.title, `${route.path} title`);
    assert.equal(h1, route.h1, `${route.path} H1`);
    assert.notEqual(title.replaceAll("&amp;", "&"), h1, `${route.path} title differs from H1`);
    assert.equal(count(html, /<h1(?:\s[^>]*)?>/g), 1, `${route.path} one H1`);
    assert.ok(description.length >= 120 && description.length <= 170, `${route.path} description length`);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://colosson\\.net${route.path}"`));
    assert.match(html, /class="solution-intent"/);
    assert.match(html, /class="solution-primary-cta"/);
    assert.ok(html.indexOf('class="solution-primary-cta"') > html.indexOf('class="solution-intent"'));
    assert.match(html, /Key takeaways/);
    assert.ok(count(html, /<h2(?:\s[^>]*)?>/g) >= 5);
    assert.ok(count(html, /<h3(?:\s[^>]*)?>/g) >= 3);
    assert.match(html, /<table>/);
    assert.match(html, /<ol>/);
    assert.match(html, /<details>/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"@type":"Service"/);
    assert.match(html, /class="share-button/);
    assert.match(html, /class="whatsapp-button"/);

    const images = contentImages(html);
    assert.equal(images.filter((image) => !image.alt?.trim()).length, 0);
    assert.equal(count(html, /<details>/g), 4, `${route.path} visible FAQ count`);
    assert.equal(count(html, /"@type":"Question"/g), 4, `${route.path} FAQ schema count`);
    titles.add(title);
    descriptions.add(description);
  }

  assert.equal(titles.size, solutionRoutes.length);
  assert.equal(descriptions.size, solutionRoutes.length);
});

test("crawler controls, sitemap, llms file and legacy deindex route are present", async () => {
  const [robotsResponse, sitemapResponse, legacyResponse, llms] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
    render("/page/legacy-entry"),
    readFile(new URL("../public/llms.txt", import.meta.url), "utf8"),
  ]);

  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Sitemap: https:\/\/colosson\.net\/sitemap\.xml/);
  assert.match(robots, /Disallow: \/api\//);

  assert.equal(sitemapResponse.status, 200);
  const sitemap = await sitemapResponse.text();
  for (const route of ["/", ...solutionRoutes.map((item) => item.path)]) {
    assert.match(sitemap, new RegExp(`<loc>https://colosson\\.net${route === "/" ? "" : route}</loc>`));
  }

  assert.equal(legacyResponse.status, 410);
  assert.equal(legacyResponse.headers.get("x-robots-tag"), "noindex, nofollow, noarchive");
  assert.match(llms, /https:\/\/colosson\.net\/ai-systems/);
  assert.match(llms, /ventas@colosson\.co/);
});

test("GA4 and Search Console hooks are environment-driven", async () => {
  const [analytics, layout, envExample] = await Promise.all([
    readFile(new URL("../app/Analytics.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../.env.example", import.meta.url), "utf8"),
  ]);

  assert.match(analytics, /NEXT_PUBLIC_GA_MEASUREMENT_ID/);
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/);
  assert.match(layout, /NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION/);
  assert.match(layout, /verificationToken/);
  assert.match(envExample, /NEXT_PUBLIC_GA_MEASUREMENT_ID=/);
  assert.match(envExample, /NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=/);
});

test("strict SEO invariants cover clean URLs, mobile conversion and sitemap scope", async () => {
  const routePaths = solutionRoutes.map(({ path }) => path);
  assert.equal(new Set(routePaths).size, routePaths.length);
  for (const path of routePaths) {
    assert.match(path, /^\/[a-z]+(?:-[a-z]+)*$/);
    assert.doesNotMatch(path, /\d|-(?:and|or|of|for|the)-/);
  }

  const [homepage, css, shareSource, sitemapResponse] = await Promise.all([
    render("/").then((response) => response.text()),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/ShareButton.tsx", import.meta.url), "utf8"),
    render("/sitemap.xml"),
  ]);

  assert.match(css, /\.whatsapp-button\s*\{[\s\S]*?position:\s*fixed/);
  assert.match(css, /@media\s*\(max-width:\s*(?:640|680)px\)/);
  assert.match(shareSource, /navigator\.share/);
  assert.match(shareSource, /clipboard\.writeText/);
  assert.match(shareSource, /gtag\?\.\("event",\s*"share"/);
  assert.match(homepage, /"addressLocality":"Medellín"/);
  assert.match(homepage, /"addressCountry":"CO"/);

  const sitemap = await sitemapResponse.text();
  assert.doesNotMatch(sitemap, /\/page\//);
  assert.equal(count(sitemap, /<url>/g), 4);
});
