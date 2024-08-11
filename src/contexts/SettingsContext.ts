import React from "react";

export interface SettingsContextType {
  settings: {
    theme?: "dark" | "light",
    blur?: boolean,
    showDock?: boolean,
  },
  setSettings: (settings: {
    theme: "dark" | "light",
    blur: boolean,
    showDock: boolean,
  }) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateSetting: (key: keyof SettingsContextType["settings"], value: any) => void,
};

const SettingsContext = React.createContext<SettingsContextType>({
  settings: {
    theme: "dark",
    blur: true,
    showDock: true,
  },
  setSettings: () => {},
  updateSetting: () => {},
});



export const useSettings = () => React.useContext(SettingsContext);

export default SettingsContext;