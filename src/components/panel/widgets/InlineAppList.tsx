import useAppsStore from "@/contexts/AppsContext";
import { useWindows } from "@/contexts/WindowsContext";

export const InlineAppList = ({
  fillWidth = false,
}: {
  fillWidth?: boolean;
}) => {
  const { apps } = useAppsStore();
  const { openWindow } = useWindows();
  const list = apps.filter((app) => !app.hidden);
  return (
    <div style={{ width: fillWidth ? "100%" : "auto" }}>
      <div className="flex gap-2">
        <div className="flex gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex w-full flex-col gap-2"></div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {list.map((app) => (
            <div
              key={app.id}
              className="flex gap-2 p-1 hover:bg-gray-100/20 w-fit"
              onClick={() => openWindow(app.id)}
            >
              <div className="w-5 h-5 m-auto">{app.icons.scalable}</div>
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
