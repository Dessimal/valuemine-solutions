import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ItelPowerTank } from "@/app/constants";
import {ChevronDown, HelpCircle, PhoneCall, Flame, Truck, ShieldCheck, Sparkles,BadgeCheck, PackageCheck, Zap,MessageCircle, ArrowRight  } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Itel Power Tank Price in Ibadan (₦295,000) – Pay on Delivery',
  description:
    'Buy the official Itel Power Tank for just ₦295,000 — guaranteed lowest price in Nigeria! Enjoy Pay on Delivery for Ibadan residents. Order today!',
  keywords: [
    'Itel Power Tank price in Ibadan',
    'Itel Power Tank 295k promo',
    'Buy Itel Power Tank Nigeria',
    'Power tank pay on delivery Ibadan',
    'Cheapest Itel Power Tank in Nigeria',
  ],
  alternates: {
    canonical: 'https://www.valueminesolutions.com.ng/itel-power-tank-ibadan',
  },
  openGraph: {
    title: 'Itel Power Tank Price in Ibadan (₦295,000) – Pay on Delivery',
    description:
      'Official Itel Power Tank for ₦295,000. Pay on delivery available exclusively for Ibadan residents. Limited promo stock!',
    url: 'https://www.valueminesolutions.com.ng/itel-power-tank-ibadan',
    siteName: 'Valuemine Solar Solutions',
    type: 'website',
  },
};

const WHATSAPP_NUMBER = '2348136812541';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hi, I live in Ibadan and I want to order the Itel Power Tank for ₦295,000 via Pay on Delivery.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const CALL_URL = 'tel:+2348136812541';

export default function ItelPowerTankPromoPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Itel Power Tank',
    description:
      'Portable high-capacity power backup generator alternative for home and business equipment.',
    brand: {
      '@type': 'Brand',
      name: 'Itel',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.valueminesolutions.com.ng/itel-power-tank-ibadan',
      priceCurrency: 'NGN',
      price: '295000',
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Valuemine Solar Solutions',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Pay on Delivery work in Ibadan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Simply place your order via our website or WhatsApp. Our local delivery team in Ibadan will bring the Itel Power Tank straight to your doorstep. You inspect the package, confirm everything is intact, and make payment via cash or bank transfer directly to the rider.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this the original Itel Power Tank?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%. We source directly from official channels, ensuring you receive a brand-new, authentic unit backed by warranty.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is your price (₦295,000) lower than other market stores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We buy in bulk and run direct promotional deals to pass maximum savings straight to our customers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you deliver outside Ibadan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we deliver nationwide across Nigeria. However, Pay on Delivery is currently exclusive to residents within Ibadan. Deliveries outside Ibadan require payment confirmation before dispatch.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 md:pb-0">
        {/* SECTION 1: TOP ANNOUNCEMENT BAR */}
        {/* Delivery Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/10 px-2.5 py-0.5 backdrop-blur-sm transition-all hover:bg-slate-950/20">
            <Truck className="h-4 w-4 shrink-0 text-slate-950 animate-bounce-horizontal" />
            <span className="font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              Ibadan Promo
            </span>
          </div>

        {/* SECTION 2: HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="inline-block bg-[#FF073C] text-[FF073C] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Limited Stock Promo
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Itel Power Tank — Special Ibadan Promo Price
            </h1>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FF073C]">
                ₦295,000
              </span>
              <span className="text-xl text-slate-400 line-through font-medium">
                ₦350,000
              </span>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                Save ₦55,000
              </span>
            </div>
            <p className="text-base sm:text-lg text-slate-600">
              Get the ultimate portable power backup for your home and business
              at the absolute lowest price in Nigeria.{' '}
              <strong className="text-slate-800">0% Risk:</strong> Residents of
              Ibadan inspect and Pay on Delivery.
            </p>

             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
      {/* Primary WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 px-7 py-4 text-white font-bold tracking-wide shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-600/35 active:scale-[0.98]"
      >
        {/* Glow overlay effect on hover */}
        <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* WhatsApp Icon with subtle pulse animation */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
        </div>

        {/* Text Content */}
        <span className="text-base sm:text-lg">
          Order via WhatsApp
        </span>

        {/* Dynamic Arrow */}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>

      {/* Trust Badge Sub-text */}
      <div className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-100 px-3.5 py-2 text-xs font-semibold text-emerald-800">
        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>Pay on Delivery</span>
      </div>
    </div>
          </div>

          <div className="relative w-full h-[320px] sm:h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={ItelPowerTank}
              alt="Itel Power Tank Promo Ibadan"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* SECTION 3: TRUST BADGES */}
         <section className="relative overflow-hidden bg-white/80 backdrop-blur-md border-y border-slate-200/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Item 1: Official Product */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-50 hover:shadow-md hover:shadow-amber-500/5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <BadgeCheck className="h-6 w-6 stroke-[2.25]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 tracking-tight">
                Official Itel Product
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                100% Genuine with Manufacturer Warranty.
              </p>
            </div>
          </div>

          {/* Item 2: Pay on Delivery */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-50 hover:shadow-md hover:shadow-amber-500/5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <PackageCheck className="h-6 w-6 stroke-[2.25]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 tracking-tight">
                Pay on Delivery
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Inspect product in Ibadan before paying.
              </p>
            </div>
          </div>

          {/* Item 3: Fast Local Dispatch */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-50 hover:shadow-md hover:shadow-amber-500/5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
              <Zap className="h-6 w-6 stroke-[2.25]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 tracking-tight">
                Fast Local Dispatch
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Delivered within 24–48 hours across Ibadan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* SECTION 4: PRODUCT OVERVIEW & KEY FEATURES */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Why the Itel Power Tank is the Perfect Power Solution
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Tired of unexpected blackout interruptions? The Itel Power Tank provides clean, quiet, and reliable power backup for your essential home appliances, electronics, laptops, and business equipment. Compact, heavy-duty, and easy to operate, it eliminates the high fuel costs and noise of traditional generators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">High Power Capacity</h3>
              <p className="text-sm text-slate-600">
                Easily powers TVs, fans, laptops, internet routers, decoders, lighting systems, and smartphones simultaneously.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-2">🔇</div>
              <h3 className="font-bold text-slate-900 mb-2">Silent & Clean Operation</h3>
              <p className="text-sm text-slate-600">
                Zero noise, zero fumes, zero dangerous emissions—completely safe for indoor setups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-2">🔌</div>
              <h3 className="font-bold text-slate-900 mb-2">Multiple Output Ports</h3>
              <p className="text-sm text-slate-600">
                Equipped with standard AC wall sockets, high-speed USB ports, and DC outputs for maximum versatility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-2">🔋</div>
              <h3 className="font-bold text-slate-900 mb-2">Fast Charging Technology</h3>
              <p className="text-sm text-slate-600">
                Rapid recharging capability from normal grid power or compatible solar panels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-bold text-slate-900 mb-2">Built-in Circuit Protection</h3>
              <p className="text-sm text-slate-600">
                Features advanced battery management protection against short-circuiting, overcharging, and overheating.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: VALUE COMPARISON BLOCK */}
        <section className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              The Best Itel Power Tank Deal in Nigeria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-[#FF073C] font-bold text-lg mb-2">Unbeatable Price</h3>
                <p className="text-slate-300 text-sm">
                  At ₦295,000, this is by far the cheapest price for the Itel Power Tank nationwide.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-[#FF073C] font-bold text-lg mb-2">Zero Online Scam Risk</h3>
                <p className="text-slate-300 text-sm">
                  We understand online trust concerns. That is why we offer Pay on Delivery exclusively for Ibadan residents.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-[#FF073C] font-bold text-lg mb-2">Local Customer Support</h3>
                <p className="text-slate-300 text-sm">
                  Quick doorstep delivery across Bodija, Ring Road, Oluyole, Challenge, Samonda, UI, Akobo, Iwo Road, and all surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header with Subtle Badge */}
      <div className="text-center space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-700">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Got Questions? We've Got Answers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {/* Item 1 */}
        <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 select-none">
            <span className="text-base sm:text-lg">How does Pay on Delivery work in Ibadan?</span>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-500 group-open:text-slate-950">
              <ChevronDown className="h-5 w-5 stroke-[2.5]" />
            </div>
          </summary>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
            Simply place your order via our website or WhatsApp. Our local delivery team in Ibadan will bring the Itel Power Tank straight to your doorstep. You inspect the package, confirm everything is intact, and make payment via cash or bank transfer directly to the rider.
          </p>
        </details>

        {/* Item 2 */}
        <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 select-none">
            <span className="text-base sm:text-lg">Is this the original Itel Power Tank?</span>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-500 group-open:text-slate-950">
              <ChevronDown className="h-5 w-5 stroke-[2.5]" />
            </div>
          </summary>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
            Yes, 100%. We source directly from official channels, ensuring you receive a brand-new, authentic unit backed by warranty.
          </p>
        </details>

        {/* Item 3 */}
        <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 select-none">
            <span className="text-base sm:text-lg">Why is your price (₦295,000) lower than other market stores?</span>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-500 group-open:text-slate-950">
              <ChevronDown className="h-5 w-5 stroke-[2.5]" />
            </div>
          </summary>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
            We buy in bulk and run direct promotional deals to pass maximum savings straight to our customers.
          </p>
        </details>

        {/* Item 4 */}
        <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-slate-900 select-none">
            <span className="text-base sm:text-lg">Do you deliver outside Ibadan?</span>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-open:rotate-180 group-open:bg-amber-500 group-open:text-slate-950">
              <ChevronDown className="h-5 w-5 stroke-[2.5]" />
            </div>
          </summary>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5">
            Yes, we deliver nationwide across Nigeria. However, Pay on Delivery is currently exclusive to residents within Ibadan. Deliveries outside Ibadan require payment confirmation before dispatch.
          </p>
        </details>
      </div>
    </section>

        {/* SECTION 7: FINAL CALL TO ACTION BANNER */}
        <section 
      id="checkout-form" 
      className="relative overflow-hidden bg-gradient-to-br from-[#FF073C] via-[#E00030] to-[#B30024] text-white py-14 px-4 sm:px-6 shadow-2xl"
    >
      {/* Decorative background glow elements */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-sm">
          <Flame className="h-4 w-4 text-amber-300 animate-pulse fill-amber-300" />
          <span>Limited Promotional Stock Remaining</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          Don't Miss Out — Secure Your Itel Power Tank at{' '}
          <span className="underline decoration-amber-300 decoration-wavy underline-offset-4">
            ₦295,000
          </span>{' '}
          Today!
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
          Promo stock is limited at this price. Order now to lock in the ₦295,000 promotional rate with <span className="font-bold text-amber-200">Pay on Delivery</span> across Ibadan.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
          
          {/* Primary WhatsApp Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-emerald-900 font-extrabold text-base sm:text-lg shadow-xl shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-50 hover:shadow-2xl active:scale-[0.98]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="h-4 w-4 fill-white" />
            </div>
            <span>Order on WhatsApp</span>
            <ArrowRight className="h-5 w-5 text-emerald-700 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Direct Call Button */}
          <a
            href={CALL_URL}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 backdrop-blur-md border border-white/20 px-7 py-4 text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="h-5 w-5 text-amber-300" />
            <span>Call Us Directly</span>
          </a>

        </div>

        {/* Trust Note */}
        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/80 pt-2">
          <ShieldCheck className="h-4 w-4 text-amber-300" />
          <span>Pay safely after inspection in Ibadan</span>
        </div>

      </div>
    </section>

        {/* SECTION 8: MOBILE STICKY FOOTER */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 text-white border-t border-slate-800 p-3 flex items-center justify-between z-50 shadow-2xl">
          <div>
            <p className="text-xs text-slate-400">Itel Power Tank</p>
            <p className="text-lg font-extrabold text-emerald-400">₦295,000</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg shadow"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
