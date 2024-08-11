export interface App {
  name: string; // name of the app
  license?: string; // license of the app (MIT, Apache, etc) (optional)
  id: string; // com.example.app or com.example.app.dev
  icon: string; // You should use a webp or avif (For better performance)
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
  name: string; // name of the app
  author: string; // author of the app
  license?: string; // license of the app (MIT, Apache, etc) (optional)
  id: string; // com.example.app or com.example.app.dev
  icon: string; // You should use a webp or avif (For better performance)
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
