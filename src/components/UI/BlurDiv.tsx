import { useSettings } from "@/contexts/SettingsContext";
import { CSSProperties } from "react";

const BlurDiv = ({
  children,
  style,
  className,
}: {
  children?: React.ReactElement | React.ReactElement[] | string;
  style?: CSSProperties;
  blurAmount?: number;
  className?: string;
}) => {
  const { settings } = useSettings();
  return (
    <div
      className={className + (settings.blur ? " yesblur" : " noblur")}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default BlurDiv;
