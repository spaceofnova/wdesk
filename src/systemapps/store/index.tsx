import { useApps } from "@/contexts/AppsContext";
import installableApps from "@/store/installableApps";
import { StoreApp } from "@/types";
import { useState } from "react";
export default function Store() {
  const { installApp, checkIfAppIsInstalled, uninstallApp } = useApps();
  const [app, setApp] = useState<StoreApp | undefined>();
  const [selectedVersion, setSelectedVersion] = useState<string>("");
  return (
    <div>
      <h1 className="text-2xl font-bold">Store</h1>
      <div>
        {installableApps.map((app) => (
          <div key={app.id} onClick={() => setApp(app)}>
            {app.name}
          </div>
        ))}
      </div>
      {app && (
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <button onClick={() => setApp(undefined)}>Close</button>
          {app.name} - {app.author}
          {checkIfAppIsInstalled(app.id) ? (
            <button
              onClick={() => uninstallApp(app.id)}
              disabled={!checkIfAppIsInstalled(app.id)}
            >
              Uninstall
            </button>
          ) : (
            <button
              onClick={() => installApp(app.id, selectedVersion)}
              disabled={!selectedVersion}
            >
              Install
            </button>
          )}
          {selectedVersion ?? "Select Version"}
          <select
            name="version"
            onChange={(e) => setSelectedVersion(e.target.value)}
          >
            {Object.keys(app.versions).map((version) => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
