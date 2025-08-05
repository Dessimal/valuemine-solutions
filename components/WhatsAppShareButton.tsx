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
      animate={{ scale: [1, 1.1, 1] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className={`bg-green-600 text-white p-4 rounded flex items-center justify-center gap-2 shadow-green-800 shadow-2xl ${className}`}>
      <FaWhatsapp size={24} />{" "}
      <span className="font-bold text-lg tracking-wide">{label}</span>
    </motion.button>
  );
}

// "use client";

// import { FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// type WhatsAppShareButtonProps = {
//   textToShare: string;
//   label?: string;
//   className?: string;
// };

// export default function WhatsAppShareButton({
//   textToShare,
//   label = "Chat with us on WhatsApp",
//   className = "",
// }: WhatsAppShareButtonProps) {
//   const phoneNumber = "2349020532639";

//   const handleShare = () => {
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToShare)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <motion.button
//       onClick={handleShare}
//       initial={{ scale: 1 }}
//       animate={{
//         scale: [1, 1.1, 1],
//         rotate: [0, 2, -2, 0],
//         boxShadow: [
//           "0 0 0px rgba(0,0,0,0)",
//           "0 0 15px rgba(37, 211, 102, 0.6)",
//           "0 0 0px rgba(0,0,0,0)",
//         ],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "easeInOut",
//       }}
//       className={`fixed bottom-5 right-5 z-50 bg-green-600 text-white px-5 py-4 rounded-full flex items-center justify-center gap-2 shadow-green-800 shadow-lg hover:scale-110 active:scale-95 ${className}`}>
//       <FaWhatsapp size={24} />
//       <span className="font-bold text-base tracking-wide">{label}</span>
//     </motion.button>
//   );
// }
