import { useTheme } from "@/components/theme-provider";
import { useSettings } from "@/contexts/SettingsContext";

export default function Settings() {
  const { settings, updateSetting } = useSettings();
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1>Settings</h1>
      <label>
        <input
          type="checkbox"
          checked={settings.showDock}
          onChange={() => updateSetting("showDock", !settings.showDock)}
        />
        Show Dock
      </label>
      <label>
        <input
          type="checkbox"
          checked={settings.blur}
          onChange={() => updateSetting("blur", !settings.blur)}
        />
        Blur
      </label>
      <div>
        <h1>Theme</h1>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            defaultChecked={theme === "light"}
            onChange={() => setTheme("light")}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            defaultChecked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
          Dark
        </label>
      </div>
    </div>
  );
}
