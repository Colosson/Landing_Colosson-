import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const { default: app } = await import("../dist/server/index.js");

const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

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
  const tabs = [...html.matchAll(/<button\b[^>]*role="tab"[^>]*>/g)].map(([tag]) => tag);
  const panels = [...html.matchAll(/<div\b[^>]*role="tabpanel"[^>]*>/g)].map(([tag]) => tag);
  assert.equal(tabs.length, 4);
  assert.equal(panels.length, 4);
  assert.equal(tabs.filter((tag) => /aria-selected="true"/.test(tag)).length, 1);
  assert.equal(panels.filter((tag) => /\shidden(?:=|\s|>)/.test(tag)).length, 3);
  for (const tab of tabs) {
    const [, tabId] = tab.match(/\bid="([^"]+)"/) ?? [];
    const [, panelId] = tab.match(/aria-controls="([^"]+)"/) ?? [];
    assert.ok(tabId && panelId, "every software tab identifies its associated panel");
    const panel = panels.find((tag) => tag.includes(`id="${panelId}"`));
    assert.ok(panel, `tab ${tabId} has a rendered panel`);
    assert.match(panel, new RegExp(`aria-labelledby="${escapePattern(tabId)}"`));
  }

  const publishedProjects = [
    { section: "impresion-3d", title: "Colosson3D para empresas", href: "https://empresa.colosson3d.com/", asset: "colosson-empresas" },
    { section: "automatizacion-software", title: "El inventario empieza en una conversación.", href: "https://agente.colosson.net/", asset: "agente-inventario" },
    { section: "automatizacion-software", title: "Primero el orden. Luego la automatización.", href: "https://inventario.colosson.net/", asset: "preparacion-inventarios" },
    { section: "experiencias-interactivas", title: "MD Capital", href: "https://mdcapital.com.co/", asset: "md-capital" },
    { section: "experiencias-interactivas", title: "Sofía: Un Verdadero Cuento Ecológico", href: "https://sofiacuentoecologico.com/", asset: "sofia-ecologico" },
    { section: "experiencias-interactivas", title: "PCL® — Prevención y Control Legal", href: "https://www.pcl.legal/", asset: "pcl-legal" },
  ];
  for (const { section, title, href, asset } of publishedProjects) {
    const [, sectionHtml] = html.match(new RegExp(`<section\\b[^>]*id="${section}"[^>]*>([\\s\\S]*?)</section>`)) ?? [];
    assert.ok(sectionHtml, `${title} has a portfolio category`);
    assert.match(sectionHtml, new RegExp(`<h3\\b[^>]*>${escapePattern(title)}</h3>`), `${title} is rendered in its category`);
    assert.match(sectionHtml, new RegExp(`<a\\b[^>]*href="${escapePattern(href)}"`), `${title} links to its published site`);
    assert.match(sectionHtml, new RegExp(`<img\\b[^>]*src="/portfolio/${asset}\\.webp"`), `${title} renders its own project image`);
    await access(new URL(`../public/portfolio/sources/${asset}.jpg`, import.meta.url));
  }
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
