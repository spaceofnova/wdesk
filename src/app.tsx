import { AnimatePresence } from "framer-motion";
import Dock from "./components/Dock";
import Win from "./components/Window/Win";
import { useWindows } from "./contexts/WindowsContext";

const App = () => {
  const { windows } = useWindows();
  return (
    <>
      <AnimatePresence>
        {windows.map((window) => (
          <Win key={window.id} window={window} />
        ))}
      </AnimatePresence>
      <Dock />
    </>
  );
};

export default App;
