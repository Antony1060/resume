import React, { ReactNode } from "react";
import ReactDOMClient from "react-dom/client";

import App from "./components/App";

const render = import.meta.hot
    ? (element: Element, reactNode: ReactNode) =>
          ReactDOMClient.createRoot(element).render(reactNode)
    : ReactDOMClient.hydrateRoot;

render(
    document.querySelector("#root") as HTMLElement,
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
