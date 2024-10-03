import WindowsContext from "@/contexts/WindowsContext";
import { useState } from "react";
import { WindowType } from "@/types";
import useAppsStore from "@/contexts/AppsContext";

const WindowsProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(0);
  const { apps } = useAppsStore();

  const closeWindow = (applicationId: string) => {
    const newWindows = windows.filter((window) => window.id !== applicationId);
    setWindows(newWindows);
  };

  const bringWindowToFront = (applicationId: string) => {
    const newWindows = windows.map((window) => {
      if (window.id === applicationId) {
        return { ...window, zIndex: maxZIndex + 1 };
      }
      return window;
    });
    setWindows(newWindows);
    setMaxZIndex(maxZIndex + 1);
  };

  const openWindow = (applicationId: string) => {
    const app = apps.find((app) => app.id === applicationId);
    if (windows.find((window) => window.id === applicationId)) {
      bringWindowToFront(applicationId);
    } else if (app) {
      if (app) {
        const newWindows: WindowType[] = [
          ...windows,
          {
            id: app.id,
            title: app.name,
            component: app.component,
            zIndex: maxZIndex + 1,
          },
        ];
        setWindows(newWindows);
      }
    }
  };

  return (
    <WindowsContext.Provider
      value={{
        windows,
        setWindows,
        openWindow,
        bringWindowToFront,
        closeWindow,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
};
export default WindowsProvider;
