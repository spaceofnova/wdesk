import { StoreApp } from "@/types";

// com.example.app - spaceofnova
import ExampleApp from "./com.example.app";


// Array Start:
const installableApps: StoreApp[] = [
  {
    name: "Example App",
    id: "com.example.app",
    author: "spaceofnova",
    icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/example-4464084-3702307.png?f=webp&w=256",
    description: "Example app description",
    versions: {
      "2.0.0": {
        component: <ExampleApp />,
      },
      "1.0.0": {
        component: <div>Example 1.0.0</div>,
      },
    },
  },
];
















export default installableApps;