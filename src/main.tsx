import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <Analytics />
      <Toaster position="top-right" richColors theme="dark" />
    </LanguageProvider>
  </StrictMode>
);
