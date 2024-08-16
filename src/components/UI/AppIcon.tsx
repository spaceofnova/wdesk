import { useApps } from "@/contexts/AppsContext";
import { useWindows } from "@/contexts/WindowsContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AppIcon = ({ ApplicationID }: { ApplicationID: string }) => {
  const [isActive, setIsActive] = useState(false);
  const { apps } = useApps();
  const { openWindow, windows } = useWindows();
  const app = apps.find((app) => app.id === ApplicationID);
  useEffect(() => {
    if (app && windows.length > 0) {
      // @ts-expect-error Type 'WindowType | undefined' is not assignable to type 'WindowType'. I have no fucking clue why this says it doesn't work cause it does.
      setIsActive(windows.find((window) => window.id === app.id));
    } else {
      setIsActive(false);
    }
  }, [app, windows]);
  return (
    app && (
      <motion.div
        whileTap={{ scale: 0.85 }}
        onClick={() => openWindow(app.id)}
        className="flex h-12 w-12 items-center justify-center"
      >
        <div
          key={app.id}
          className="300ms relative flex h-10 w-10 items-center justify-center rounded-md px-2 transition-colors hover:bg-white/20"
        >
          {app.icons.scalable ?? app.icons.bitmap}
          <AnimatePresence>
            {isActive && (
              <motion.span // Switch this to LazyMotion m dumbass
                className="absolute bottom-0 left-1/2 h-[0.2rem] -translate-x-1/2 rounded-full bg-white"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "50%" }}
                exit={{ opacity: 0, width: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )
  );
};

export default AppIcon;
