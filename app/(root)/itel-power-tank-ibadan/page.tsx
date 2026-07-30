import type { Metadata } from "next";
import Image from "next/image";
import { ItelPowerTank } from "@/app/constants";
import { FaWhatsapp } from "react-icons/fa";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Cpu,
  Flame,
  HelpCircle,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  VolumeX,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Itel Power Tank Price in Ibadan (₦295,000) – Pay on Delivery",
  description:
    "Buy the official Itel Power Tank for just ₦295,000 — guaranteed lowest price in Nigeria! Enjoy Pay on Delivery for Ibadan residents. Order today!",
  keywords: [
    "Itel Power Tank price in Ibadan",
    "Itel Power Tank 295k promo",
    "Buy Itel Power Tank Nigeria",
    "Power tank pay on delivery Ibadan",
    "Cheapest Itel Power Tank in Nigeria",
  ],
  alternates: {
    canonical: "https://www.valueminesolutions.com.ng/itel-power-tank-ibadan",
  },
  openGraph: {
    title: "Itel Power Tank Price in Ibadan (₦295,000) – Pay on Delivery",
    description:
      "Official Itel Power Tank for ₦295,000. Pay on delivery available exclusively for Ibadan residents. Limited promo stock!",
    url: "https://www.valueminesolutions.com.ng/itel-power-tank-ibadan",
    siteName: "Valuemine Solar Solutions",
    type: "website",
  },
};

const WHATSAPP_NUMBER = "2348136812541";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I live in Ibadan and I want to order the Itel Power Tank for ₦295,000 via Pay on Delivery.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const CALL_URL = "tel:+2348136812541";

export default function ItelPowerTankPromoPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Itel Power Tank",
    description:
      "Portable high-capacity power backup generator alternative for home and business equipment.",
    brand: {
      "@type": "Brand",
      name: "Itel",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.valueminesolutions.com.ng/itel-power-tank-ibadan",
      priceCurrency: "NGN",
      price: "295000",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Valuemine Solar Solutions",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Pay on Delivery work in Ibadan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply place your order via our website or WhatsApp. Our local delivery team in Ibadan will bring the Itel Power Tank straight to your doorstep. You inspect the package, confirm everything is intact, and make payment via cash or bank transfer directly to the rider.",
        },
      },
      {
        "@type": "Question",
        name: "Is this the original Itel Power Tank?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. We source directly from official channels, ensuring you receive a brand-new, authentic unit backed by warranty.",
        },
      },
      {
        "@type": "Question",
        name: "Why is your price (₦295,000) lower than other market stores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We buy in bulk and run direct promotional deals to pass maximum savings straight to our customers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver outside Ibadan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we deliver nationwide across Nigeria. However, Pay on Delivery is currently exclusive to residents within Ibadan. Deliveries outside Ibadan require payment confirmation before dispatch.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,7,60,0.18),_transparent_25%),linear-gradient(135deg,_#ffffff_0%,_#fff7f9_55%,_#ffeef2_100%)] text-slate-800 pb-24 md:pb-0">
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6 lg:px-8">
          <header className="mb-8 mt-1 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-[#ffd3de] bg-white/85 px-4 py-3 shadow-[0_10px_40px_rgba(255,7,60,0.12)] backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-[#FF073C] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
              <Truck className="h-4 w-4" />
              <span>Promo for Ibadan Residents</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <ShieldCheck className="h-4 w-4 text-[#FF073C]" />
              Pay on delivery in Ibadan
            </div>
          </header>

          <section className="grid items-center gap-8 rounded-[2rem] border border-[#ffd3de] bg-white/90 p-6 shadow-[0_30px_80px_rgba(255,7,60,0.12)] backdrop-blur-xl md:grid-cols-[1.1fr_0.9fr] md:p-10 lg:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd3de] bg-[#FFF1F4] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF073C]">
                <Sparkles className="h-3.5 w-3.5" />
                Limited stock promo
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter leading-[22px] text-slate-950 sm:text-5xl lg:text-6xl">
                  Itel Power Tank - Special Ibadan Promo Price
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  Get the ultimate portable power backup for your home and
                  business at the absolute lowest price in Nigeria. 0% Risk:
                  Residents of Ibadan inspect and Pay on Delivery.
                </p>
              </div>

              <div className="rounded-2xl border border-[#ffd3de] bg-gradient-to-br from-[#FF073C] to-[#80031E] p-5 text-white shadow-xl">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-4xl font-black text-white">
                    ₦295,000
                  </span>
                  <span className="text-lg text-slate-200 line-through">
                    ₦350,000
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white">
                    Save ₦55,000
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    100% genuine product
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <Clock3 className="h-4 w-4 text-white" />
                    24–48 hour delivery in Ibadan
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#FF073C] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#FF073C]/25 transition hover:-translate-y-0.5 hover:bg-[#ff2e5c]">
                  <FaWhatsapp className="h-5 w-5" />
                  Order on WhatsApp
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={CALL_URL}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#ffd3de] bg-white px-6 py-3.5 text-base font-semibold text-[#FF073C] transition hover:-translate-y-0.5 hover:border-[#FF073C]">
                  <PhoneCall className="h-5 w-5 text-[#FF073C]" />
                  Call us directly
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#FF073C]/20 via-[#FF073C]/10 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl">
                <Image
                  src={ItelPowerTank}
                  alt="Itel Power Tank promo product"
                  priority
                  className="h-[360px] w-full object-cover sm:h-[440px]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <div className="rounded-full border border-white/20 bg-white/15 px-3 py-2 text-sm font-medium text-white backdrop-blur">
                    <span className="mr-2 inline-flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#ffd3de] text-[#ffd3de]" />
                      4.9/5 trust rating
                    </span>
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/15 px-3 py-2 text-sm font-medium text-white backdrop-blur">
                    <span className="mr-2 inline-flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4 text-[#ffd3de]" />
                      0% risk inspection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Official Itel Product",
                copy: "100% genuine hardware backed by manufacturer warranty.",
                icon: BadgeCheck,
              },
              {
                title: "Pay on Delivery",
                copy: "Inspect your unit in Ibadan before making payment.",
                icon: PackageCheck,
              },
              {
                title: "Fast Local Dispatch",
                copy: "Quick delivery from local stock with friendly support.",
                icon: Zap,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1F4] text-[#FF073C]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </section>

          <section className="mt-10 rounded-[2rem] border border-[#ffd3de] bg-white/90 p-6 shadow-[0_25px_65px_rgba(255,7,60,0.08)] backdrop-blur xl:p-8">
            <div className="mb-8 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-[#ffd3de] bg-[#FFF1F4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF073C]">
                <Sparkles className="h-3.5 w-3.5" />
                Why the Itel Power Tank is the Perfect Power Solution
              </div>
              <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                Tired of unexpected blackout interruptions?
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                The Itel Power Tank provides clean, quiet, and reliable power
                backup for your essential home appliances, electronics, laptops,
                and business equipment. Compact, heavy-duty, and easy to
                operate, it eliminates the high fuel costs and noise of
                traditional generators.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "High power capacity",
                  copy: "Supports TVs, fans, routers, decoders, lights, and more at once.",
                  icon: Zap,
                },
                {
                  title: "Quiet and clean",
                  copy: "Enjoy silent operation without smoke, fuel smell, or loud vibration.",
                  icon: VolumeX,
                },
                {
                  title: "Flexible output ports",
                  copy: "Multiple sockets and fast USB charging keep your essentials powered.",
                  icon: Cpu,
                },
                {
                  title: "Fast recharging",
                  copy: "Recharge quickly from grid power or compatible solar panels.",
                  icon: BatteryCharging,
                },
                {
                  title: "Smart protection",
                  copy: "Built-in safeguards defend against overheating and power overloads.",
                  icon: ShieldCheck,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-[#ffd3de] bg-[#fff8fa] p-5 transition hover:-translate-y-1 hover:border-[#FF073C]/40 hover:shadow-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FF073C] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#FF073C] via-[#BF052D] to-[#590214] p-8 text-white shadow-[0_30px_80px_rgba(255,7,60,0.18)] sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  <Flame className="h-3.5 w-3.5" />
                  The Best Itel Power Tank Deal in Nigeria.
                </div>
                <h2 className="text-3xl font-black sm:text-4xl">
                  Secure your Itel Power Tank at the lowest promo price today
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                  We combine competitive pricing, local support, and a risk-free
                  inspection process to give you confidence from the first
                  message to the final delivery.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="space-y-3">
                  {[
                    "Exclusive Ibadan pay-on-delivery option",
                    "Fast response via WhatsApp and phone",
                    "Delivered across key Ibadan areas and nearby communities",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-[#a6082d]/80 p-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                      <span className="text-sm leading-7 text-slate-100">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-0 py-10 sm:px-2">
            <div className="mb-8 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ffd3de] bg-[#FFF1F4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#FF073C]">
                <HelpCircle className="h-3.5 w-3.5" />
                Questions answered
              </div>
              <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How does pay on delivery work in Ibadan?",
                  answer:
                    "Place your order through WhatsApp or phone, and our team will bring the unit to your doorstep. You inspect it, confirm everything is intact, and then pay directly to the courier.",
                },
                {
                  question: "Is this the original Itel Power Tank?",
                  answer:
                    "Yes. We provide genuine units sourced through trusted channels and deliver them with warranty-backed confidence.",
                },
                {
                  question: "Why is your price lower than other stores?",
                  answer:
                    "We run direct promotions and maintain efficient local operations so you get more value without sacrificing quality.",
                },
                {
                  question: "Do you ship outside Ibadan?",
                  answer:
                    "Yes, we deliver nationwide, though pay-on-delivery remains available for Ibadan residents only.",
                },
              ].map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1.25rem] border border-[#ffd3de] bg-white p-5 shadow-sm transition hover:border-[#FF073C]/40 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                    <span>{item.question}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF1F4] text-[#FF073C] transition group-open:rotate-180 group-open:bg-[#FF073C] group-open:text-white">
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </summary>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff073c] via-[#e00030] to-[#b30024] px-6 py-12 text-white shadow-[0_30px_80px_rgba(255,7,60,0.24)] sm:px-10">
            <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-12 right-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
                <Flame className="h-4 w-4 text-[#ffd3de]" />
                Limited promotional stock remaining
              </div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Don&apos;t miss out — lock in your unit at ₦295,000 today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90">
                Reserve your Itel Power Tank now and enjoy pay-on-delivery
                confidence in Ibadan.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-[#FF073C] transition hover:-translate-y-0.5">
                  <FaWhatsapp className="h-5 w-5 text-white" />
                  Order via WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-slate-950/30 px-6 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5">
                  <PhoneCall className="h-5 w-5 text-white" />
                  Call us directly
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-white/20 bg-[#FF073C]/95 px-4 py-3 text-white md:hidden backdrop-blur">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Itel Power Tank
            </p>
            <p className="text-lg font-bold text-white">₦295,000</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#FF073C]">
            <FaWhatsapp className="h-4 w-4" />
            Order now
          </a>
        </div>
      </div>
    </>
  );
}
