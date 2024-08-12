import Settings from "@/systemapps/settings";
import Store from "@/systemapps/store";
import { App } from "@/types";
import { LucideSettings, LucideStore } from "lucide-react";

const defaultApps: App[] = [
  {
    name: "Settings",
    id: "system.settings",
    permissions: ["system.setting.read", "system.setting.write"],
    icons: {
      scalable: <LucideSettings style={{ width: "100%", height: "100%" }} />,
    },
    component: <Settings />,
  },
  {
    name: "Store",
    id: "system.store",
    permissions: [
      "apps.read",
      "apps.write",
      "apps.update",
      "apps.install",
      "apps.uninstall",
      "system.store.read",
      "system.store.write",
    ],
    icons: {
      scalable: <LucideStore style={{ width: "100%", height: "100%" }} />,
    },
    component: <Store />,
  },
];

export default defaultApps;
