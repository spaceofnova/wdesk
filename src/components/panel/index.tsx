type PanelProps = {
  zIndex?: number;
  children?: React.ReactNode;
  customColor?: string;
  placement: "top" | "bottom" | "left" | "right";
  positionOffset?: {
    x: number;
    y: number;
  };
  width: "screen" | "content" | number;
  height?: number;
  widgetIDS?: string[];
  className?: string;
  style?: React.CSSProperties;
};

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/UI/context-menu";
import { Edit2Icon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../UI/button";
import { Widgets } from "./widgets/list";
const WidgetPopup = ({
  open,
  updateWidgets,
}: {
  open: boolean;
  updateWidgets: any;
}) => {

  const addWidget = () => {
    updateWidgets((prev: any) => [
      ...prev,
      { name: "New Widget", id: "new", component: <>New Widget</> },
    ]);
  };
  return (
    open && (
      <div className="fixed bottom-10 left-1 w-36 bg-background">
        Widgets:
        {Widgets.map((widget) => (
          <div
            className="flex items-center gap-2"
            key={widget.id}
            onClick={() =>
              updateWidgets((prev: any) => [...prev, { ...widget }])
            }
          >
            {widget.icon}
            <span>{widget.name}</span>
          </div>
        ))}
        <Button onClick={addWidget}>Add Widget</Button>
      </div>
    )
  );
};

const Panel = ({
  children,
  placement = "bottom",
  width = "screen",
  height = 6,
  widgetIDS,
  customColor,
  className = "",
  style = {},
  zIndex = 200,
}: PanelProps) => { 
  const [editMode, setEditMode] = useState(false);
  const [widgets, setWidgets] = useState<any>(Widgets);

  const panelStyle = {
    ...style,
    width: width === "screen" ? "100vw" : width === "content" ? "100%" : width,
    height: height,
    left:
      placement === "left"
        ? 0
        : placement === "right"
          ? `calc(100% - ${width}px)`
          : undefined,
    right:
      placement === "right" ? 0 : placement === "left" ? "100%" : undefined,
    top:
      placement === "top"
        ? 0
        : placement === "bottom"
          ? `calc(100% - ${height}px)`
          : undefined,
    bottom:
      placement === "bottom" ? 0 : placement === "top" ? "100%" : undefined,
    zIndex: zIndex,
    backgroundColor: customColor
      ? customColor
      : "hsla(var(--background) / 0.8)",
  };
  return (
    <ContextMenu>
      <ContextMenuContent>
        <ContextMenuItem
          className="flex items-center gap-2"
          onClick={() => setEditMode(!editMode)}
        >
          <Edit2Icon className="size-4" />
          Edit
        </ContextMenuItem>
      </ContextMenuContent>
      <ContextMenuTrigger>
        <div
          className={`${className} fixed flex items-center`}
          style={panelStyle}
        >
          {widgets?.map((widget: any) => (
            <div className="flex items-center gap-2 w-full" key={widget.id}>
              {widget.component}
            </div>
          ))}
          {editMode && <PlusIcon />}
          {editMode && (
            <WidgetPopup open={editMode} updateWidgets={setWidgets ?? (() => { })} />
          )}
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
  );
};

export { Panel };
