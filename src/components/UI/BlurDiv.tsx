import { useSettings } from "@/contexts/SettingsContext";
import { CSSProperties } from "react";

const BlurDiv = ({
  children,
  style,
  blurAmount,
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
      className={className}
      style={{
        ...style,
        backdropFilter: settings.blur
          ? `blur(${blurAmount ?? 24}px)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default BlurDiv;
