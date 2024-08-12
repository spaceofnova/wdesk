import { AnimatePresence } from "framer-motion";
import Dock from "./components/Dock";
import Win from "./components/Window/Win";
import { useWindows } from "./contexts/WindowsContext";
import { ThemeProvider } from "@/components/theme-provider";
import Desktop from "./components/Desktop";

const App = () => {
  const { windows } = useWindows();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AnimatePresence>
        {windows.map((window) => (
          <Win key={window.id} window={window} />
        ))}
      </AnimatePresence>
      <Desktop />
      <Dock />
    </ThemeProvider>
  );
};

export default App;
