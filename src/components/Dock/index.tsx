import { useWindows } from "@/contexts/WindowsContext";
import BlurDiv from "../UI/BlurDiv";
import { useApps } from "@/contexts/AppsContext";

const Dock = () => {
  const { openWindow } = useWindows();
  const { apps } = useApps();

  return (
    <BlurDiv className="w-full h-10 bg-black/40 fixed bottom-0 text-white flex items-center">
      {apps.map((app) => (
        <div
          key={app.id}
          className="flex items-center justify-center px-2 hover:bg-white/50 w-24 h-full"
          onClick={() => openWindow(app.id)}
        >
          {app.name}
        </div>
      ))}
    </BlurDiv>
  );
};

export default Dock;
