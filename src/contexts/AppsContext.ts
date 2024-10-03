import { create } from 'zustand';
import defaultApps from './defaultApps';
import { App } from '@/types';
import installableApps from '@/store/installableApps';


interface LocalInstall {
  id: string;
  version: string;
}

interface AppsStore {
  apps: App[];
  localInstalls: LocalInstall[];
  installApp: (id: string, version: string) => void;
  uninstallApp: (id: string) => void;
  checkIfAppIsInstalled: (id: string) => boolean;
}

const useAppsStore = create<AppsStore>((set, get) => ({
  apps: defaultApps,
  localInstalls: [],

  // Actions
  installApp: (id: string, version: string) => {
    if (get().apps.find((app) => app.id === id)) {
      return; // No change if already installed
    }

    const appData = installableApps.find((app) => app.id === id);
    if (!appData) {
      return; // No change if app not found
    }

    const newApps: App[] = [
      ...get().apps,
      {
        ...appData,
        component: appData.versions[version].component,
      },
    ];

    const newLocalInstalls: LocalInstall[] = [
      ...get().localInstalls,
      { id, version },
    ];

    set({ apps: newApps, localInstalls: newLocalInstalls });

    // Store the localInstalls array in localStorage
    localStorage.setItem(
      'localInstalls',
      JSON.stringify(newLocalInstalls.map((install) => `${install.id}@${install.version}`))
    );
  },

  uninstallApp: (id: string) => {
    if (!get().apps.find((app) => app.id === id)) {
      return; // No change if not installed
    }

    const newApps: App[] = get().apps.filter((app) => app.id !== id);
    const newLocalInstalls: LocalInstall[] = get().localInstalls.filter(
      (localInstall) => localInstall.id !== id
    );

    set({ apps: newApps, localInstalls: newLocalInstalls });

    // Update localStorage with the updated localInstalls array
    localStorage.setItem(
      'localInstalls',
      JSON.stringify(newLocalInstalls.map((install) => `${install.id}@${install.version}`))
    );
  },

  checkIfAppIsInstalled: (id: string) => {
    return get().apps.find((app) => app.id === id) !== undefined;
  },
}));

export default useAppsStore;