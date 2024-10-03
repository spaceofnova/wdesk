import useAppsStore from "@/contexts/AppsContext";
import Wallpaper from "./wallpaper";
import { AnimatePresence } from "framer-motion";
import { useWindows } from "@/contexts/WindowsContext";
import Win from "@/components/Window/Win";
import { Panel } from "@/components/panel";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../UI/context-menu";
import SymLink from "../OSLink";
import { Globals } from "@/constants";

const doFullReset = () => {
  let c = confirm("Are you sure you want to reset the app?");
  if (!c) return alert("Reset canceled");
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};

export default function Desktop() {
  const { apps } = useAppsStore();
  const { windows } = useWindows();
  return (
    <ContextMenu>
      <div className="relative flex h-screen w-screen flex-col">
        <Panel placement="bottom" width={"screen"} height={32} zIndex={10} />
        <div>
          <AnimatePresence>
            {windows.map((window) => (
              <Win key={window.id} window={window} />
            ))}
          </AnimatePresence>
        </div>
        <ContextMenuContent>
          <ContextMenuItem disabled>
            {Globals.name} v{Globals.ver}
          </ContextMenuItem>
          <SymLink to={"system.settings"} className="w-full">
            <ContextMenuItem>Change Wallpaper</ContextMenuItem>
          </SymLink>
          <ContextMenuSeparator />
          <ContextMenuLabel>Dev Tools</ContextMenuLabel>
          <ContextMenuItem onClick={() => window.location.reload()}>
            Reload WebOS
          </ContextMenuItem>
          <ContextMenuItem
            onClick={doFullReset}
            className="font-bold text-red-500"
          >
            Full Reset
          </ContextMenuItem>
        </ContextMenuContent>
        <ContextMenuTrigger>
          <div className="flex h-[calc(100vh-3rem)] w-full flex-col gap-2 p-4">
            {apps.filter((app) => !app.hidden).map((app) => (
              <div
                key={app.id}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-lg p-4 text-foreground hover:bg-gray-100/20"
              >
                <div className="drop-shadow-lg">
                  {app.icons.scalable ?? app.icons.bitmap}
                </div>
                <span>{app.name}</span>
              </div>
            ))}

            <Wallpaper />
          </div>
        </ContextMenuTrigger>
      </div>
    </ContextMenu>
  );
}