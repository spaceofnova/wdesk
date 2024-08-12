import { useWindows } from "@/contexts/WindowsContext";
import BlurDiv from "../UI/BlurDiv";
import { useApps } from "@/contexts/AppsContext";
import { DateTime } from "./DateTime";
import LauncherButton from "./AppLauncher";

const Dock = () => {
  const { openWindow } = useWindows();
  const { apps } = useApps();

  return (
    <BlurDiv className="w-full h-10 bg-[var(--background)] fixed bottom-0 text-[var(--foreground)] flex items-center justify-between px-1 z-[2147483647]">
      <div className="flex items-center justify-center">
        <LauncherButton />
        {apps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-center px-2 hover:bg-white/20 w-10 h-10 cursor-pointer"
            onClick={() => openWindow(app.id)}
          >
            {app.icons.scalable ?? app.icons.bitmap}
          </div>
        ))}
      </div>
      <DateTime />
    </BlurDiv>
  );
};

export default Dock;
