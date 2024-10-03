import { ThemeProvider } from "@/components/theme-provider";
import Desktop from "@/components/Desktop";
import { useEffect } from "react";
import useAppsStore from "./contexts/AppsContext";
import WindowsProvider from "./providers/WindowsProvider";

const App = () => {
  const { installApp } = useAppsStore();
  // Use useEffect to install apps stored in localStorage on component mount
  useEffect(() => {
    const storedLocalInstalls = localStorage.getItem('localInstalls');
    if (storedLocalInstalls) {
      const installedApps = JSON.parse(storedLocalInstalls).map((installString: string) => {
        const [id, version] = installString.split('@');
        return { id, version };
      });

      installedApps.forEach((install: { id: string, version: string }) => {
        installApp(install.id, install.version);
      });
    }
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wdesk-ui-theme">
      <WindowsProvider>
        <Desktop />
      </WindowsProvider>
    </ThemeProvider>
  );
};

export default App;
