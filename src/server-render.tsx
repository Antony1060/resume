import ReactDOMServer from "react-dom/server"
import { ServerStyleSheet } from "styled-components"
import App from "./components/App"

export function render() {
    const sheet = new ServerStyleSheet();

    const pageHtml = ReactDOMServer.renderToString(sheet.collectStyles(<App />));

    return {
        style: sheet.getStyleTags(),
        html: pageHtml
    }
}