import { Send } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface OpenModalButtonProps {
  setModalState: React.Dispatch<
    React.SetStateAction<"form" | "submitting" | "success" | "error">
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"; // Add other variants if needed
}
const OpenModalButton = ({
  setModalState,
  setIsOpen,
  variant,
  text,
}: OpenModalButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={() => {
        setModalState("form");
        setIsOpen(true);
      }}
      className={cn("relative z-50 w-full", variant ? "" : "gradient-bg")}>
      <span className="inline-flex gap-6 items-center">
        {variant ? "" : <Send size={32} />}{" "}
        <span className="text-lg tracking-wide font-bold">{text}</span>
      </span>
    </Button>
  );
};

export default OpenModalButton;
