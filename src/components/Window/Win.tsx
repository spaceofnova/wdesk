import { easeOutExpo } from "@/constants";
import { useApps } from "@/contexts/AppsContext";
import { useWindows } from "@/contexts/WindowsContext";
import { WindowType } from "@/types";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { Rnd } from "react-rnd";

const Win = ({ window }: { window: WindowType }) => {
  const { apps } = useApps();
  const { bringWindowToFront, closeWindow } = useWindows();
  const app = apps.find((app) => app.id === window.id);

  useEffect(() => {
    if (!app) {
      closeWindow(window.id);
    }
  }, [app]);
  return (
    <LazyMotion features={domAnimation}>
      <Rnd
        dragHandleClassName="drag"
        minHeight={100}
        minWidth={100}
        default={{
          x: 300,
          y: 300,
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
            ease: easeOutExpo,
          }}
          className={
            "bg-background flex h-full w-full flex-col overflow-hidden rounded-md shadow-2xl"
          }
          id="container"
        >
          <div className="drag flex h-8 items-center justify-between border-b border-white/20 px-2">
            <div className="flex items-center gap-2">
              {" "}
              <div className="m-auto flex h-5 w-5 items-center justify-center">
                {app?.icons.scalable}
              </div>
              <div>{app?.name}</div>
            </div>
            <div
              onClick={() => closeWindow(window.id)}
              className="cursor-pointer"
            >
              <XIcon />
            </div>
          </div>
          <div className="relative h-[calc(100%-2rem)] w-full">
            {app?.component}
          </div>
        </m.div>
      </Rnd>
    </LazyMotion>
  );
};

export default Win;
