import { useTheme } from "@/components/theme-provider";
import { useStorage } from "@/contexts/StorageContext";


import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

function Counter() {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
export default function Settings() {
  const { storage, updateStorage } = useStorage();
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1>Settings</h1>
      <label>
        <input
          type="checkbox"
          checked={storage.showDock}
          onChange={() => updateStorage("showDock", !storage.showDock)}
        />
        Show Dock
      </label>
      <label>
        <input
          type="checkbox"
          checked={storage.blur}
          onChange={() => updateStorage("blur", !storage.blur)}
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
      <div>
        <Counter />
      </div>
    </div>
  );
}
