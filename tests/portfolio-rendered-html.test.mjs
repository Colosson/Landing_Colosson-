import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const { default: app } = await import("../dist/server/index.js");

test("portfolio is a separate Spanish route with its own sharing metadata", async () => {
  const response = await app.fetch(
    new Request("https://colosson.net/portfolio", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<main[^>]*lang="es"/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /<title>Portafolio \|/);
  assert.match(html, /rel="canonical" href="https:\/\/colosson.net\/portfolio"/);
  assert.match(html, /name="twitter:title" content="Ideas que ya son realidad/);
  for (const id of ["impresion-3d", "automatizacion-software", "experiencias-interactivas"]) {
    assert.match(html, new RegExp(`<section[^>]*id="${id}"`));
    assert.match(html, new RegExp(`href="#${id}"`));
  }
  assert.equal([...html.matchAll(/role="tab"/g)].length, 3);
  assert.match(html, /role="tabpanel"/);
  assert.match(html, /href="\/mockups\/expectra\/index.html"/);
  assert.match(html, /Concepto de interfaz/);

  const images = [...html.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)];
  assert.ok(images.length >= 9);
  for (const [tag, src] of images) {
    assert.match(tag, /alt="[^"]+"/);
    assert.ok(src.startsWith("/") && !src.startsWith("//"), `local asset: ${src}`);
    await access(new URL(`../public${src}`, import.meta.url));
  }
});
