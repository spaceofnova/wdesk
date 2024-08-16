import installableApps from "@/store/installableApps";
import { StoreApp } from "@/types";
import { useState } from "react";
import AppPopup from "./AppPopup";
export default function Store() {
  const [app, setApp] = useState<StoreApp | undefined>();

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
      {app && <AppPopup app={app} setApp={setApp} />}
    </div>
  );
}
