import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function CalculateMonthlyPayment(
//   packageCost: number,
//   location: string,
//   workmanship: number,
//   buildingType: string,
//   interestRate: number,
//   years: number
// ): number {
//   const monthlyInterestRate = 5.5 / 100 ; // Monthly interest rate (5.5% monthly rate)
//   const numberOfPayments = 12;

//   const monthlyPayment =
//     (principal * monthlyInterestRate) /
//     (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//   return monthlyPayment;
// }
