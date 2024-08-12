import { useApps } from "@/contexts/AppsContext";

export default function Desktop() {
  const { apps } = useApps();
  return (
    <div className="w-full h-[calc(100vh-2.5rem)] flex flex-col gap-2 p-4">
      {apps.map((app) => (
        <div
          key={app.id}
          className="p-4 w-16 h-16 flex flex-col items-center justify-center hover:bg-gray-100/20 rounded-lg text-[var(--foreground)]"
        >
          <div className="drop-shadow-lg">
            {app.icons.scalable ?? app.icons.bitmap}
          </div>
          <span>{app.name}</span>
        </div>
      ))}
      <div className="text-right fixed bottom-10 right-2 text-[var(--foreground)]">
        <p className="drop-shadow-lg">WDESK Early Beta</p>
        <p className="drop-shadow-lg">
          <a
            className="underline"
            href="https://github.com/spaceofnova/wdek"
            target="_blank"
          >
            Github Page
          </a>{" "}
          - Version: 0.2.1
        </p>
      </div>
    </div>
  );
}
