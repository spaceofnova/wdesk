import { useApps } from "@/contexts/AppsContext";
import { useWindows } from "@/contexts/WindowsContext";
import { useEffect, useState } from "react";

const AppIcon = ({ ApplicationID }: { ApplicationID: string }) => {
  const [isActive, setIsActive] = useState(false);
  const { apps } = useApps();
  const { windows } = useWindows();
  const app = apps.find((app) => app.id === ApplicationID);
  useEffect(() => {
    if (app && windows.length > 0) {
      // @ts-expect-error Type 'WindowType | undefined' is not assignable to type 'WindowType'. I have no fucking clue why this says it doesn't work cause it does.
      setIsActive(windows.find((window) => window.id === app.id));
    } else {
      setIsActive(false);
    }
  }, [app, windows]);
  return app && app.icons.scalable;
};

export default AppIcon;
