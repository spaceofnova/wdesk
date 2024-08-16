import { StoreApp } from "@/types";
import { InfoIcon } from "lucide-react";
import ExampleApp2_0_0 from "./2.0.0";

const Config: StoreApp = {
  name: "Example App",
  id: "com.example.app",
  author: "spaceofnova",
  icons: {
    scalable: <InfoIcon />,
  },
  description: "Example app description",
  versions: {
    "2.0.0": {
      component: <ExampleApp2_0_0 />,
    },
    "1.0.0": {
      component: <div>Example 1.0.0</div>,
    },
  },
};

export default Config;
