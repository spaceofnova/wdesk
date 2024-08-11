import { createRoot } from "react-dom/client";
import "./index.css";
import SettingsProvider from "./providers/SettingsProvider";
import AppsProvider from "./providers/AppsProvider";
import WindowsProvider from "./providers/WindowsProvider";
import App from "./app";

createRoot(document.getElementById("root")!).render(
  <AppsProvider>
    <SettingsProvider>
      <WindowsProvider>
        <App />
      </WindowsProvider>
    </SettingsProvider>
  </AppsProvider>
);
