import { useApps } from "@/contexts/AppsContext";
import { useSettings } from "@/contexts/SettingsContext";
import { useWindows } from "@/contexts/WindowsContext";
import { WindowType } from "@/types";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { Rnd } from "react-rnd";

const Win = ({ window }: { window: WindowType }) => {
  const { apps } = useApps();
  const { settings } = useSettings();
  const { bringWindowToFront, closeWindow } = useWindows();
  const app = apps.find((app) => app.id === window.id);
  return (
    <LazyMotion features={domAnimation}>
      <Rnd
        dragHandleClassName="drag"
        minHeight={100}
        minWidth={100}
        default={{
          x: 0,
          y: 0,
          width: 300,
          height: 300,
        }}
        style={{ zIndex: window.zIndex || 0 }}
        onMouseDown={() => bringWindowToFront(window.id)}
      >
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full h-full flex flex-col bg-black/70 text-white overflow-hidden"
          style={{
            backdropFilter: settings.blur ? `blur(24px)` : undefined,
          }}
          id="container"
        >
          <div className="drag h-8 flex items-center justify-between px-2">
            <div>{app?.name}</div>
            <div onClick={() => closeWindow(window.id)}>Close</div>
          </div>
          <div className="w-full h-[calc(100%-2rem)] relative">
            {app?.component}
          </div>
        </m.div>
      </Rnd>
    </LazyMotion>
  );
};

export default Win;
