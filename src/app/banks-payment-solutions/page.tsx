'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const BANKS = [
  {
    name: "Tide", type: "Best for UK SMEs",
    logo: "/logos/Tide_idxybKEmUX_0.svg", badge: "UK Focused",
    features: ["Free business account", "Instant card issuance", "Instant transfers", "Expense categorisation"],
  },
  {
    name: "Wise Business", type: "Best for Multi-Currency",
    logo: "/logos/wise-1.svg", badge: "52 Currencies",
    features: ["52 currencies", "Low FX rates", "Mass payouts", "API access"],
  },
  {
    name: "Airwallex", type: "Best for Global Ops",
    logo: "/logos/Airwallex_Logo_0.svg", badge: "Global",
    features: ["Multi-currency wallets", "Global payments", "Corporate cards", "Full automation"],
  },
  {
    name: "Sunrate", type: "Best for Asia-Pacific",
    logo: "/logos/sunrate.svg", badge: "APAC",
    features: ["APAC specialised", "Competitive FX", "Fast onboarding", "Compliance support"],
  },
];

const GATEWAYS = [
  { name: "Stripe",     setup: "2–4 business days", best: "SaaS, E-Commerce, Subscriptions",    logo: "/logos/Stripe wordmark - White.svg" },
  { name: "PayPal",     setup: "Immediate",          best: "Freelancers, Global marketplace",    logo: "/logos/PayPal_Logo_0.svg" },
  { name: "Payoneer",   setup: "3–5 business days",  best: "Freelancers, Amazon, eBay sellers",  logo: "/logos/payoneer-dark-logo.svg" },
  { name: "WorldFirst", setup: "3–5 business days",  best: "International transfers, FX",        logo: "/logos/worldfirst.svg" },
  { name: "Wise",       setup: "2–3 business days",  best: "International transfers, low FX",    logo: "/logos/wise-1.svg" },
  { name: "Mollie",     setup: "3–5 business days",  best: "European businesses",                logo: "/logos/Mollie-Logo-White-2023.svg" },
];

export default function Banking() {
  return (
    <div style={{ background: "#0a0a0a", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ── HERO */}
      <section style={{
        paddingTop: 130, paddingBottom: 80, position: "relative", overflow: "hidden",
        background: "#0a0a0a",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -80, right: -80, width: 600, height: 500,
          background: "radial-gradient(circle, rgba(113,113,122,0.1) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>


          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              Financial Infrastructure
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)", fontWeight: 800,
              letterSpacing: "-0.045em", color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 760,
            }}>
              Open your business account &{" "}
              <span style={{
                background: "linear-gradient(135deg, #71717a, #a1a1aa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>accept payments</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
              We help you open business bank accounts and configure payment gateways — even as a non-resident, from anywhere in the world.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Get Started <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BANKING OPTIONS */}
      <section style={{ padding: "80px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Business Banking</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Find the right business bank</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 460 }}>
              We handle account opening for all major UK and international business banks.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}
          >
            {BANKS.map((b, i) => (
              <motion.div key={b.name} variants={fadeUp} custom={i} whileHover={{ y: -5 }}>
                <div style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "30px 26px", height: "100%",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: "linear-gradient(90deg, #71717a, #a1a1aa, transparent)",
                  }} />

                  {/* Logo + badge row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                    <img
                      src={b.logo}
                      alt={b.name}
                      style={{
                        height: 40, width: "auto", maxWidth: 130,
                        objectFit: "contain",
                        filter: "brightness(0) invert(1) opacity(0.9)",
                      }}
                    />
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                      color: "#71717a",
                      background: "rgba(113,113,122,0.1)",
                      border: "1px solid rgba(113,113,122,0.2)",
                      padding: "3px 9px", borderRadius: 99,
                    }}>{b.badge}</span>
                  </div>

                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 19, color: "#ffffff", marginBottom: 5 }}>{b.name}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#71717a", marginBottom: 20 }}>{b.type}</div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {b.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 18, height: 18, flexShrink: 0,
                          background: "rgba(113,113,122,0.15)",
                          border: "1px solid rgba(113,113,122,0.3)",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <CheckCircle2 style={{ width: 11, height: 11, color: "#71717a" }} />
                        </div>
                        <span style={{ fontSize: 13, color: "#9ca3af" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <Link href="/contact"
                      style={{
                        display: "flex", alignItems: "center", gap: 5,
                        fontSize: 13, fontWeight: 700, color: "#71717a",
                        transition: "gap 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = "5px")}
                    >
                      Open account <ArrowRight style={{ width: 14, height: 14 }} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PAYMENT GATEWAYS */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Payment Gateways</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Accept payments worldwide</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 460 }}>
              Get verified merchant accounts with the world&apos;s leading payment processors.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}
          >
            {GATEWAYS.map((g, i) => (
              <motion.div key={g.name} variants={fadeUp} custom={i} whileHover={{ y: -4 }}>
                <div style={{
                  background: "#111111", borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "26px 22px",
                  display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: "linear-gradient(90deg, rgba(113,113,122,0.5), transparent)",
                  }} />

                  <div style={{ marginBottom: 18 }}>
                    <img
                      src={g.logo}
                      alt={g.name}
                      style={{
                        height: 34, width: "auto", maxWidth: 140,
                        objectFit: "contain",
                        filter: "brightness(0) invert(1) opacity(0.85)",
                      }}
                    />
                  </div>

                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 16, flexGrow: 1 }}>{g.best}</p>

                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "rgba(113,113,122,0.08)",
                    border: "1px solid rgba(113,113,122,0.15)",
                    borderRadius: 8, padding: "7px 12px",
                  }}>
                    <Clock style={{ width: 13, height: 13, color: "#71717a", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#71717a" }}>Setup: {g.setup}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA */}
      <section style={{ padding: "0 24px 90px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: "linear-gradient(160deg, #05131e 0%, #030d14 100%)",
              borderRadius: 24, padding: "60px 40px", textAlign: "center",
              border: "1px solid rgba(113,113,122,0.2)",
              boxShadow: "0 0 60px rgba(113,113,122,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: -50, left: "50%", transform: "translateX(-50%)",
              width: 400, height: 200,
              background: "radial-gradient(circle, rgba(113,113,122,0.15) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#ffffff",
                letterSpacing: "-0.03em", marginBottom: 14,
              }}>Ready to open your account?</h2>
              <p style={{ color: "#6b7280", marginBottom: 36, fontSize: 17 }}>
                We&apos;ll match you with the right partner and handle onboarding end-to-end.
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>
                Book Free Consultation <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
