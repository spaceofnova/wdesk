import { useWindows } from "@/contexts/WindowsContext";

const SymLink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { openWindow } = useWindows();
  const open = () => {
    openWindow(to);
  };
  return <button className={className} onClick={open}>{children}</button>;
};

export default SymLink;
