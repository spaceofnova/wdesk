import AppsContext from "@/contexts/AppsContext";
import defaultApps from "@/contexts/defaultApps";
import installableApps from "@/store/installableApps";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const AppsProvider = ({ children }: { children: React.ReactNode }) => {
  const [apps, setApps] = useState(defaultApps);
  const [localInstalls, setLocalInstalls] = useLocalStorage<
    { id: string; version: string }[]
  >("localInstalls", []);

  useEffect(() => {
    localInstalls.forEach((localInstall) => {
      installApp(localInstall.id, localInstall.version);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const installApp = (id: string, version: string) => {
    if (apps.find((app) => app.id === id)) {
      return "App already installed";
    } else {
      const appData = installableApps.find((app) => app.id === id);
      if (appData) {
        const newApps = [
          ...apps,
          {
            ...appData,
            component: appData.versions[version].component,
          },
        ];
        setApps(newApps);
        setLocalInstalls([...localInstalls, { id, version }]);
        return "App installed";
      }
    }
  };

  const uninstallApp = (id: string) => {
    if (apps.find((app) => app.id === id)) {
      const newApps = apps.filter((app) => app.id !== id);
      setApps(newApps);
      setLocalInstalls(
        localInstalls.filter((localInstall) => localInstall.id !== id)
      );
    }
  };

  const checkIfAppIsInstalled = (id: string) => {
    return apps.find((app) => app.id === id) !== undefined;
  };
  return (
    <AppsContext.Provider
      value={{ apps, setApps, installApp, uninstallApp, checkIfAppIsInstalled }}
    >
      {children}
    </AppsContext.Provider>
  );
};

export default AppsProvider;
