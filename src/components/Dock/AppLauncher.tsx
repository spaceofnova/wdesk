import { useApps } from "@/contexts/AppsContext";
import { useSettings } from "@/contexts/SettingsContext";
import { useWindows } from "@/contexts/WindowsContext";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { LucideGrid2X2 } from "lucide-react";
import { useState } from "react";

const LauncherButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center px-2 hover:bg-white/20 w-10 h-10 cursor-pointer"
      >
        <LucideGrid2X2 />
      </button>

      <LauncherUI isOpen={isOpen} />
    </>
  );
};

export const LauncherUI = ({ isOpen }: { isOpen: boolean }) => {
  const { settings } = useSettings();
  const { apps } = useApps();
  const { openWindow } = useWindows();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ left: -300 }}
            animate={{ left: 0 }}
            exit={{ left: -300 }}
            className={
              "fixed bottom-10 left-0 w-48 h-96 text-[var(--foreground)]" +
              (settings.blur ? " yesblur" : " noblur")
            }
          >
            <div>
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center w-full h-10 hover:bg-white/20 cursor-pointer gap-2 px-2"
                  onClick={() => openWindow(app.id)}
                >
                  <div>{app.icons.scalable ?? app.icons.bitmap}</div>
                  <div>{app.name}</div>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default LauncherButton;
