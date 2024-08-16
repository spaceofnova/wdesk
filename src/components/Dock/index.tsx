import BlurDiv from "../UI/BlurDiv";
import { useApps } from "@/contexts/AppsContext";
import { DateTime } from "./DateTime";
import LauncherButton from "./AppLauncher";
import AppIcon from "../UI/AppIcon";

const Dock = () => {
  const { apps } = useApps();

  return (
    <BlurDiv className="bg-background fixed bottom-0 z-[2147483647] flex h-12 w-full items-center justify-between border-t border-gray-500/30 px-1">
      <div className="flex items-center justify-center">
        <LauncherButton />
        {apps.map((app) => (
          <AppIcon ApplicationID={app.id} key={app.id} />
        ))}
      </div>
      <DateTime />
    </BlurDiv>
  );
};

export default Dock;
