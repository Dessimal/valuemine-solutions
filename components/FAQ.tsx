// "use client";

// import { faqs } from "@/app/constants";
// import { cn } from "@/lib/utils";
// import { SquarePlus } from "lucide-react";
// import React, { useState } from "react";
// import { Card } from "./ui/card";

// export const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState<null>(null);

//   const handleClick = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="py-20 space-y-6">
//       <h2 className="text-3xl tracking-tighter font-extra-bold mb-2">
//         Frequetly Asked Questions(FAQs):
//       </h2>
//       {faqs.map(({ question, answer }, index) => (
//         <Card
//           key={index}
//           className="bg-card border border-border p-6 flex flex-col justify-center">
//           <div className="py-6 flex items-center justify-between">
//             <h3>{question}</h3>
//             <button onClick={() => handleClick(index)}>
//               <SquarePlus
//                 className={cn(
//                   openIndex === index
//                     ? "rotate-[225deg] transition-all duration-300 ease-out"
//                     : ""
//                 )}
//               />
//             </button>
//           </div>
//           <div
//             className={cn(
//               "border-t-[1px] border-border overflow-hidden transition-all ease-out duration-300 overflow-y-auto faq",
//               openIndex === index
//                 ? "max-h-40 opacity-100 py-6"
//                 : "max-h-0 opacity-0 py-0"
//             )}>
//             <p>{answer}</p>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

"use client";

import { faqs } from "@/app/constants";
import { cn } from "@/lib/utils";
import { SquarePlus } from "lucide-react";
import React, { useState } from "react";
import { Card } from "./ui/card";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 space-y-6">
      <h2 className="text-3xl tracking-tighter font-extra-bold mb-2">
        Frequently Asked Questions (FAQs):
      </h2>
      {faqs.map(({ question, answer }, index) => (
        <Card
          key={index}
          onClick={() => handleClick(index)}
          className="bg-card border border-border p-6 pb-0 flex flex-col justify-center cursor-pointer hover:bg-muted/30 transition-colors">
          <div className="  flex items-center justify-between">
            <p className="">{question}</p>
            <SquarePlus
              className={cn(
                "transition-all duration-300 ease-out  m-0",
                openIndex === index ? "rotate-[225deg]" : ""
              )}
            />
          </div>
          <div
            className={cn(
              "border-t-[1px] border-border overflow-hidden transition-all ease-out duration-300 overflow-y-auto faq",
              openIndex === index
                ? "max-h-40 opacity-100 py-6"
                : "max-h-0 opacity-0 py-0"
            )}>
            <p>{answer}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
