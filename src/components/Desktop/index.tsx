import { useApps } from "@/contexts/AppsContext";

export default function Desktop() {
  const { apps } = useApps();
  return (
    <div className="flex h-[calc(100vh-3rem)] w-full flex-col gap-2 p-4">
      {apps.map((app) => (
        <div
          key={app.id}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg p-4 text-[var(--foreground)] hover:bg-gray-100/20"
        >
          <div className="drop-shadow-lg">
            {app.icons.scalable ?? app.icons.bitmap}
          </div>
          <span>{app.name}</span>
        </div>
      ))}
      <div className="fixed bottom-12 right-2 text-right text-[var(--foreground)]">
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
