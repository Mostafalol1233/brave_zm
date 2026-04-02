
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
// Make the logo available throughout the app
import "./assets/zenith_logo.svg";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics />
  </>
);
