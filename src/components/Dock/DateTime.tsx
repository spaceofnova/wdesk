import { LucideBell } from "lucide-react";
import React from "react";

export const DateTime = () => {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 px-2 hover:bg-white/20">
      <div className="flex flex-col justify-center text-right">
        <div className="text-sm">
          {date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </div>
        <div className="text-sm">
          {date.toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </div>
      </div>
      <div>
        <LucideBell className="h-5 w-5" />
      </div>
    </div>
  );
};
