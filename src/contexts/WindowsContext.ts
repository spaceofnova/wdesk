import { WindowType } from "@/types";
import React from "react";

export interface WindowsContextType {
  windows: WindowType[] | [];
  setWindows: (windows: WindowType[]) => void;
  openWindow: (applicationId: string) => void;
  bringWindowToFront: (applicationId: string) => void;
  closeWindow: (applicationId: string) => void;
}

const WindowsContext = React.createContext<WindowsContextType>({
  windows: [],
  setWindows: () => {},
  openWindow: () => {},
  bringWindowToFront: () => {},
  closeWindow: () => {},
});

export const useWindows = () => React.useContext(WindowsContext);

export default WindowsContext;
