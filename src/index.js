import React from "react";
import ReactDOM from "react-dom/client";  // React 18+
import App from "./App";
import "./index.css";
import { IntlProvider } from "react-intl";
import messages from "./i18n/messages"; // file me përkthime

const locale = "en"; // ose "sq" sipas gjuhës që do

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>
);
