import SettingsContext from "@/contexts/SettingsContext";
import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";

const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useLocalStorage<{
    theme?: "dark" | "light";
    blur?: boolean;
    showDock?: boolean;
  }>("settings", {
    theme: "light",
    blur: false,
    showDock: true,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings((prevSettings) => ({ ...prevSettings, [key]: value }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
        updateSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
