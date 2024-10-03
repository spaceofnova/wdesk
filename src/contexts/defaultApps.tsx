import Settings from "@/systemapps/settings";
import Store from "@/systemapps/store";
import WallChangeApp from "@/systemapps/wallchange";
import { App } from "@/types";
import { LucideSettings, LucideStore, LucideWallpaper } from "lucide-react";

const defaultApps: App[] = [
  {
    name: "Settings",
    id: "system.settings",
    icons: {
      scalable: <LucideSettings style={{ width: "100%", height: "100%" }} />,
    },
    component: <Settings />,
  },
  {
    name: "Store",
    id: "system.store",
    icons: {
      scalable: <LucideStore style={{ width: "100%", height: "100%" }} />,
    },
    component: <Store />,
  },
  {
    name: "Change Wallpaper",
    id: "system.wallpaper",
    component: <WallChangeApp />,
    hidden: true,
    icons: {
      scalable: <LucideWallpaper style={{ width: "100%", height: "100%" }} />,
    },
  },
];

export default defaultApps;
