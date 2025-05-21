import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Make the logo available throughout the app
import "./assets/bravezm_logo.png";

createRoot(document.getElementById("root")!).render(<App />);
