"use client";

import React from "react";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

const ShareButton = ({ textToShare }: { textToShare: string }) => {
  const handleShare = () => {
    const phoneNumber = "2349020532639";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textToShare
    )}`;
    window.open(url, "_blank");
  };
  return (
    <Button
      onClick={handleShare}
      className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-md font-semibold">
      <Share2 className="w-4 h-4" />
      Share with us to get a Discount
    </Button>
  );
};

export default ShareButton;
