"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Timer,
  BadgeDollarSign,
  Headphones,
  PackageSearch,
} from "lucide-react";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";

const features = [
  {
    icon: Globe2,
    title: "Global Buyer Access",
    desc: "Get discovered by qualified buyers in US, EU, and GCC with SEO + marketplaces integrations.",
    bullet: ["Verified leads", "Country-wise catalogs"],
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Compliant",
    desc: "Certifications, QC checklists, and documentary compliance showcased upfront.",
    bullet: ["ISO/CE ready", "Bankable docs"],
  },
  {
    icon: Timer,
    title: "Fast Turnarounds",
    desc: "Lightning-fast site and quote flows so buyers get specs, MOQs, and ETA instantly.",
    bullet: ["<2s page load", "Instant RFQ"],
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    desc: "Tiered pricing with Incoterms, live freight ranges, and duty notes for clarity.",
    bullet: ["FOB/CIF toggles", "No hidden fees"],
  },
  {
    icon: PackageSearch,
    title: "3D Product Previews",
    desc: "Interactive 3D (GLB/GLTF) viewers for apparel and hard goods to reduce back-and-forth.",
    bullet: ["Colorways & logos", "Real-scale view"],
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    desc: "WhatsApp, email, and live chat with SLAs so overseas buyers never wait.",
    bullet: ["Multi-timezone", "SLA backed"],
  },
];

function BrandBadge({ label }: { label: string }) {
  return (
    <div className="px-3 py-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur text-xs md:text-sm text-white/80 hover:text-white hover:bg-white/10 transition">
      {label}
    </div>
  );
}
// eslint-disable-next-line
function FeatureCard({ icon: Icon, title, desc, bullet }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 md:p-6 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] text-white"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/15">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base md:text-lg font-semibold tracking-tight">{title}</h3>
          <p className="text-sm md:text-[15px] leading-relaxed text-white/80">{desc}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {bullet.map((b: string) => (
          <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <CheckCircle2 className="h-3.5 w-3.5" /> {b}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhyChooseExportX() {
  const [dots, setDots] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    // Generate stable random positions on client only
    const positions = Array.from({ length: 22 }, () => ({
      top: `${Math.random() * 90 + 5}%`,
      left: `${Math.random() * 90 + 5}%`,
    }));
    setDots(positions);
  }, []);

  return (
    <section id="why" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]"
        />
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">
            <Sparkles className="h-4 w-4" /> Why choose ExportX
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Win global buyers with speed, trust, and clarity
          </h2>
          <p className="mt-3 md:mt-4 text-white/80 md:text-lg">
            A conversion-optimized export website that makes international clients say yes faster.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 md:p-8 text-white"
          >
            <div className="flex flex-wrap gap-2">
              <BrandBadge label="ISO 9001" />
              <BrandBadge label="WRAP" />
              <BrandBadge label="BSCI" />
              <BrandBadge label="Sedex" />
            </div>

            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Your buyers see what matters</h3>
              <p className="mt-2 text-white/80 md:text-[15px] leading-relaxed">
                Live MOQ, fabric/finish options, certifications, and freight hints—all above the fold. No endless emails.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="aspect-[16/10] w-full rounded-xl relative overflow-hidden">
                <div className="absolute inset-0">
                  {dots.map((pos, i) => (
                    <div
                      key={i}
                      className="absolute h-1.5 w-1.5 rounded-full bg-white/70"
                      style={pos}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur p-3 flex items-center justify-between text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-4 w-4" /> 34 countries reached
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="h-4 w-4" /> Avg. RFQ reply 2h
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> 98% on-time
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-white/60 text-xs">Trusted by suppliers in</span>
              <div className="flex gap-2">
                <div className="h-7 w-20 rounded-md bg-white/10 border border-white/15" />
                <div className="h-7 w-20 rounded-md bg-white/10 border border-white/15" />
                <div className="h-7 w-20 rounded-md bg-white/10 border border-white/15" />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 md:px-5 md:py-3 text-sm md:text-base font-semibold bg-white text-black hover:bg-white/90 transition shadow"
              >
                Get your ExportX site
              </a>
              <a
                href="#demos"
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 md:px-5 md:py-3 text-sm md:text-base font-semibold border border-white/20 text-white hover:bg-white/10 transition"
              >
                View live demos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
