// Pre-render the app into static HTML.

// pain, blood, sweat and tears
// who cursed me to javascript at 2 in the morning

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { render } from "./dist/server/server-render.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const toAbsolute = (p) => resolve(__dirname, p);

const template = readFileSync(toAbsolute("dist/static/index.html"), "utf8");

// doing the SSG part
const { style, html } = render();

const appHtml = template.replace("<!--app-html-->", html).replace("<!--app-css-->", style);

const filePath = "dist/static/index.html";

writeFileSync(toAbsolute(filePath), appHtml);
console.log("pre-rendered:", filePath);
