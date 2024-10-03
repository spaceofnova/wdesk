export interface App {
  name: string; // name of the app
  license?: string; // license of the app (MIT, Apache, etc) (optional)
  permissions?: Permission[] | "all";
  hidden?: boolean; // if the app is hidden (Only system apps can be hidden)
  id: string; // com.example.app or com.example.app.dev
  icons: {
    scalable: JSX.Element | React.ReactNode;
    bitmap?: string | "png" | "jpg" | "jpeg" | "webp" | "tiff" | "bmp"; // If used use webp or avif for best performance
  };
  description?: string; // description of the app (optional)
  component: JSX.Element | React.ReactNode;
}

export interface AppsContextType {
  apps: App[];
  setApps: (apps: App[]) => void;
  installApp: (id: string, version: string) => void;
  uninstallApp: (id: string) => void;
  checkIfAppIsInstalled: (id: string) => boolean;
}

export interface StoreApp {
  permissions?: Permission[];
  name: string; // name of the app
  author: string; // author of the app
  license?: string; // license of the app (MIT, Apache, etc) (optional)
  id: string; // com.example.app or com.example.app.dev
  icons: {
    scalable: JSX.Element | React.ReactNode;
    bitmap?: string | "png" | "jpg" | "jpeg" | "webp" | "tiff" | "bmp"; // If used use webp or avif for best performance
  };
  description?: string; // description of the app (optional)
  tags?: {
    // used for variants of the app (Stable, Dev, etc) (optional)
    [key: string]: string;
  };
  versions: {
    // versions of the app and their metadata
    [key: string]: {
      component: JSX.Element | React.ReactNode;
    };
  };
}

export interface WindowType {
  id: string;
  title: string;
  zIndex?: number;
  component: JSX.Element | React.ReactNode;
}

type Permission =
  | "apps.read" // Read apps
  | "apps.write" // Write apps
  | "apps.update" // Update apps
  | "apps.install" // Install apps
  | "apps.uninstall" // Uninstall apps
  | "system.store.read" // Read system store
  | "system.store.write" // Write system store
  | "system.setting.read" // Read system settings
  | "system.setting.write"; // Write system settings
