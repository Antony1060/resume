// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

const fs = require('fs')
const path = require('path')

const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = require('./dist/server/server-render.js')

; (async () => {
    const { style, html } = await render();

    const appHtml = template.replace(`<!--app-html-->`, html).replace(`<!--app-css-->`, style);

    const filePath = `dist/static/index.html`
    fs.writeFileSync(toAbsolute(filePath), appHtml)
    console.log('pre-rendered:', filePath)
})()