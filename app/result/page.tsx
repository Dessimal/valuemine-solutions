// // app/results/page.tsx
// "use client";

// import { useSearchParams } from "next/navigation";

// export default function ResultsPage() {
//   const searchParams = useSearchParams();
//   const data = searchParams.get("data");

//   if (!data) return <p>No data available.</p>;

//   const result = JSON.parse(data);

//   return (
//     <div className="p-4">
//       <h2>Here’s the cost breakdown for the {result.package} package:</h2>
//       <p>
//         Gadgets & Materials: ₦{result.selectedPackage.price.toLocaleString()}
//       </p>
//       <p>
//         Workmanship: ₦{result.workmanship.cost.toLocaleString()} (
//         {result.building})
//       </p>
//       <p>Transportation: ₦{result.transport.cost.toLocaleString()}</p>
//       <p>Total: ₦{result.total.toLocaleString()}</p>
//       <p>Down Payment: ₦{result.downPayment.toLocaleString()}</p>
//       <p>Chargeable Amount: ₦{result.chargeable.toLocaleString()}</p>

//       <h3>Flexible Installment Options:</h3>
//       {Object.entries(result.repayment).map(([key, value]) => (
//         <div key={key}>
//           <p>
//             {key} Monthly: ₦{value.monthly.toFixed(2)}
//           </p>
//           <p>
//             {key} Weekly: ₦{value.weekly.toFixed(2)}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
