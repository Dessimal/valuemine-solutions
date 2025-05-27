import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Optional: Radial gradient for faded look */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
