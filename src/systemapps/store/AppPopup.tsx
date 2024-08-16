import { Button } from "@/components/UI/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import { useApps } from "@/contexts/AppsContext";
import { StoreApp } from "@/types";
import { useState } from "react";

const AppPopup = ({
  app,
  setApp,
}: {
  app: StoreApp;
  setApp: React.Dispatch<React.SetStateAction<StoreApp | undefined>>;
}) => {
  const [selectedVersion, setSelectedVersion] = useState<string>(
    Object.keys(app.versions)[0],
  );
  const { installApp, checkIfAppIsInstalled, uninstallApp } = useApps();

  return (
    <div className="absolute left-0 top-0 h-full w-full bg-background">
      <button onClick={() => setApp(undefined)}>Close</button>
      <h1>
        {app.name} by {app.author}
      </h1>
      <div className="flex gap-2">
        {checkIfAppIsInstalled(app.id) ? (
          <Button
            onClick={() => uninstallApp(app.id)}
            disabled={!checkIfAppIsInstalled(app.id)}
          >
            Uninstall
          </Button>
        ) : (
          <>
            <Button
              onClick={() => installApp(app.id, selectedVersion)}
              disabled={!selectedVersion}
            >
              Install
            </Button>
            <Select
              name="version"
              value={selectedVersion}
              onValueChange={(value) => setSelectedVersion(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Version" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(app.versions).map((version) => (
                  <SelectItem value={version} key={version}>
                    {version}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </>
        )}
      </div>
    </div>
  );
};

export default AppPopup;
