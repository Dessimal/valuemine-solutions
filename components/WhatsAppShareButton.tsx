"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

type WhatsAppShareButtonProps = {
  textToShare: string;
  label?: string;
  className?: string;
};

export default function WhatsAppShareButton({
  textToShare,
  label = "Share your package with us on WhatsApp",
  className = "",
}: WhatsAppShareButtonProps) {
  const phoneNumber = "2349020532639";

  const handleShare = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textToShare
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleShare}
      whileHover={{ scale: 1.1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className={`bg-green-600 text-white p-4 rounded flex items-center justify-center gap-2 shadow-green-950 shadow-2xl ${className}`}>
      <FaWhatsapp size={24} />{" "}
      <span className="font-bold text-lg tracking-wide">{label}</span>
    </motion.button>
  );
}
