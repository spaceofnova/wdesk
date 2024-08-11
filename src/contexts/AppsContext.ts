/* eslint-disable @typescript-eslint/no-unused-vars */
import { App, AppsContextType } from "@/types";
import React from "react";
import defaultApps from "./defaultApps";

const AppsContext = React.createContext<AppsContextType>({
  apps: defaultApps,
  setApps: (_apps: App[]) => {},
  installApp: (_id: string, _version: string) => {},
  uninstallApp: (_id: string) => {},
  checkIfAppIsInstalled: (_id: string) => false,
});
export default AppsContext;

export const useApps = () => React.useContext(AppsContext);
