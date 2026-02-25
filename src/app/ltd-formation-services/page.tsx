'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Globe, Zap,
  Sparkles, Building2, FileText, Hash,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const PACKAGES = [
  {
    name: "Starter", price: "150", emoji: "🌱",
    desc: "Everything you need to legally start your UK business.",
    color: "#374151",
    features: [
      "UK LTD Registration",
      "Companies House Fee Included",
      "Digital Certificate of Incorporation",
      "Memorandum & Articles",
      "Digital Share Certificate",
      "ID Verification",
      "12/6 Phone & WhatsApp Support",
      "3–5 Business Day Processing",
    ],
    popular: false, cta: "Select Starter",
  },
  {
    name: "Silver", price: "200", emoji: "⭐",
    desc: "The complete package — most popular for global founders.",
    color: "#1d9cfe",
    features: [
      "Everything in Starter",
      "Digital + Printed Certificate",
      "Registered Office Address (1 yr)",
      "Company Authentication Code",
      "UTR Number",
      "Director Service Address Option",
      "Priority WhatsApp Support",
      "24–48h Processing",
    ],
    popular: true, cta: "Select Silver",
  },
  {
    name: "Gold", price: "220", emoji: "🏆",
    desc: "Full service with premium compliance add-ons.",
    color: "#f59e0b",
    features: [
      "Everything in Silver",
      "Director Service Address",
      "VAT Registration Assistance",
      "Annual Filing Reminder",
      "Dedicated Account Manager",
    ],
    popular: false, cta: "Select Gold",
  },
  {
    name: "Platinum", price: "250", emoji: "💎",
    desc: "Hands-off premium compliance for professionals.",
    color: "#8b5cf6",
    features: [
      "Everything in Gold",
      "London Registered Office (1 yr)",
      "Annual Compliance Management",
      "PAYE & HMRC Setup",
      "Quarterly Review Call",
    ],
    popular: false, cta: "Select Platinum",
  },
];

const FEATURES = [
  { icon: Clock,       label: "24h Turnaround",   desc: "Certificate ready within 24 hours" },
  { icon: ShieldCheck, label: "HMRC Compliant",   desc: "100% regulatory compliance" },
  { icon: Globe,       label: "Remote-Friendly",  desc: "No UK residency required" },
  { icon: Zap,         label: "Expert Support",   desc: "WhatsApp advisor included" },
];

const STEPS = [
  { num: "01", icon: FileText,  label: "Submit Details",      desc: "Fill out our simple online form with your company info." },
  { num: "02", icon: ShieldCheck, label: "ID Verification",  desc: "Complete fast digital identity verification." },
  { num: "03", icon: Building2, label: "We File",            desc: "Our team submits directly to Companies House." },
  { num: "04", icon: Hash,      label: "Certificate Issued", desc: "Receive your certificate and all documents digitally." },
];

export default function LTDFormation() {
  return (
    <div style={{ background: "#0a0a0a", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        paddingTop: 130, paddingBottom: 80, position: "relative", overflow: "hidden",
        background: "#0a0a0a",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -100, right: -100, width: 600, height: 400,
          background: "radial-gradient(circle, rgba(29,156,254,0.1) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>


          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              UK Company Formation
            </span>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)",
              fontWeight: 800, letterSpacing: "-0.045em",
              color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 720,
            }}>
              Register Your UK Limited{" "}
              <span style={{
                background: "linear-gradient(135deg, #1d9cfe, #94a3b8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Company</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
              Fast, professional, and fully compliant. Your certificate of incorporation arrives in as little as 24 hours.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Get Started Today <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
              <Link href="#pricing" className="btn-secondary" style={{ fontSize: 16, padding: "14px 28px" }}>
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES STRIP ───────────────────────────────────────────────── */}
      <section style={{
        padding: "0 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "#080808",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
          }}>
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "28px 24px",
                  borderRight: i < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  background: "rgba(29,156,254,0.1)",
                  border: "1px solid rgba(29,156,254,0.2)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <f.icon style={{ width: 20, height: 20, color: "#1d9cfe" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#ffffff", marginBottom: 3 }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Process</span>
            <h2 className="section-heading">How it works</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20, position: "relative",
            }}
          >
            {STEPS.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} custom={i}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "32px 24px",
                  position: "relative", overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, #1d9cfe, #94a3b8, transparent)`,
                }} />
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 56, fontWeight: 800, lineHeight: 1,
                  color: "rgba(29,156,254,0.08)",
                  display: "block", marginBottom: 12,
                }}>{step.num}</span>
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(29,156,254,0.1)",
                  border: "1px solid rgba(29,156,254,0.2)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <step.icon style={{ width: 22, height: 22, color: "#1d9cfe" }} />
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 800, color: "#ffffff", marginBottom: 10 }}>{step.label}</div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: "90px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Pricing</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Choose your formation package</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
              All packages include Companies House filing fee and full compliance setup.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20, alignItems: "stretch",
            }}
          >
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} variants={fadeUp} custom={i}>
                <div style={{
                  background: pkg.popular
                    ? "linear-gradient(160deg, #05131e 0%, #040e15 100%)"
                    : "#111111",
                  borderRadius: 20,
                  border: pkg.popular
                    ? "2px solid rgba(29,156,254,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  padding: "36px 28px",
                  display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                  height: "100%",
                  boxShadow: pkg.popular
                    ? "0 0 0 1px rgba(29,156,254,0.1), 0 0 60px rgba(29,156,254,0.1), 0 30px 60px rgba(0,0,0,0.5)"
                    : "0 4px 20px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease",
                }}>
                  {/* Top color stripe */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${pkg.color}, transparent)`,
                    borderRadius: "20px 20px 0 0",
                  }} />

                  {/* Popular badge */}
                  {pkg.popular && (
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: "rgba(29,156,254,0.15)",
                      border: "1px solid rgba(29,156,254,0.3)",
                      color: "#1d9cfe", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 99,
                      display: "flex", alignItems: "center", gap: 5,
                    }}>
                      <Sparkles style={{ width: 10, height: 10 }} />
                      Most Popular
                    </div>
                  )}

                  {/* Package emoji + name */}
                  <div style={{ marginBottom: 20 }}>
                    <span style={{ fontSize: 32 }}>{pkg.emoji}</span>
                  </div>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20, fontWeight: 800, color: "#ffffff", marginBottom: 8,
                  }}>{pkg.name}</div>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>{pkg.desc}</p>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 28 }}>
                    <span style={{ fontSize: 18, color: "#6b7280", fontWeight: 600, alignSelf: "flex-start", marginTop: 8 }}>£</span>
                    <span style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 60, fontWeight: 800, color: "#ffffff",
                      letterSpacing: "-0.05em", lineHeight: 1,
                    }}>{pkg.price}</span>
                    <span style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>/ one-time</span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

                  {/* Features */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11, flexGrow: 1, marginBottom: 28 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{
                          width: 18, height: 18, flexShrink: 0, marginTop: 1,
                          background: "rgba(29,156,254,0.15)",
                          border: "1px solid rgba(29,156,254,0.3)",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <CheckCircle2 style={{ width: 11, height: 11, color: "#1d9cfe" }} />
                        </div>
                        <span style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px 0",
                    background: pkg.popular
                      ? "linear-gradient(135deg, #1d9cfe, #94a3b8)"
                      : "rgba(255,255,255,0.06)",
                    color: pkg.popular ? "#ffffff" : "#d1d5db",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: 14,
                    borderRadius: 12,
                    border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.25s ease",
                    boxShadow: pkg.popular ? "0 4px 14px rgba(29,156,254,0.3)" : "none",
                  }}
                    onMouseEnter={(e) => {
                      if (!pkg.popular) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!pkg.popular) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      }
                    }}
                  >
                    {pkg.cta} <ArrowRight style={{ width: 15, height: 15 }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 90px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(160deg, #05131e 0%, #030d14 100%)",
              borderRadius: 24, padding: "60px 40px", textAlign: "center",
              border: "1px solid rgba(29,156,254,0.2)",
              boxShadow: "0 0 60px rgba(29,156,254,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
              width: 400, height: 200,
              background: "radial-gradient(circle, rgba(29,156,254,0.15) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#ffffff",
                letterSpacing: "-0.03em", marginBottom: 14,
              }}>Ready to form your company?</h2>
              <p style={{ color: "#6b7280", marginBottom: 36, fontSize: 17 }}>
                Our advisors will guide you through every step of the process.
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
