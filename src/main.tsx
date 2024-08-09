import { createRoot } from "react-dom/client";
import "./index.css";
import { Rnd } from "react-rnd";

createRoot(document.getElementById("root")!).render(
  <div>
    <Rnd
      dragHandleClassName="drag"
      minHeight={100}
      minWidth={100}
      default={{
        x: 0,
        y: 0,
        width: 300,
        height: 300,
      }}
      className="bg-black text-white"
    >
      <div className="drag h-8 flex items-center justify-between px-2">
        <div>Title</div>
        <div>Controls</div>
      </div>
      <div className="bg-white text-black w-full h-[calc(100%-2rem)]">body</div>
    </Rnd>
  </div>
);
