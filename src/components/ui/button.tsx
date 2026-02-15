import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
        "disabled:opacity-50 disabled:pointer-events-none",
        "p-2 cursor-pointer",
        className,
      )}
      {...props}
    />
  );
}
