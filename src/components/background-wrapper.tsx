import { cn } from "@/lib/utils";

interface BackgroundWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const BackgroundWrapper = ({ className, children }: BackgroundWrapperProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-emerald-100 to-sky-200 h-screen w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
