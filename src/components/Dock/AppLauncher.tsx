import { easeOutExpo } from "@/constants";
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
        className="flex h-10 w-10 cursor-pointer items-center justify-center px-2 hover:bg-white/20"
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
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className={
              "fixed bottom-14 left-2 h-96 w-48 text-[var(--foreground)]" +
              (settings.blur ? " yesblur" : " noblur")
            }
          >
            <div>
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="flex h-10 w-full cursor-pointer items-center gap-2 px-2 hover:bg-white/20"
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
