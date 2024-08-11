import Settings from "@/systemapps/settings";
import Store from "@/systemapps/store";
import { App } from "@/types";

const defaultApps: App[] = [
  {
    name: "Settings",
    id: "system.settings",
    icon: "https://example.com/icon.webp",
    component: <Settings />,
  },
  {
    name: "Store",
    id: "system.store",
    icon: "https://example.com/icon.webp",
    component: <Store />,
  }
];

export default defaultApps;
