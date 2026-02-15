import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { TextareaProps } from "@/types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full rounded-md px-3 py-2 text-sm",
          "bg-zinc-900 text-zinc-100",
          "placeholder:text-zinc-500",
          "outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "overflow-hidden resize-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
