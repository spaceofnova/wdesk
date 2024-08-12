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
    <div className="flex flex-col text-right justify-center hover:bg-white/20">
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
  );
};
