'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, ShieldCheck, Building2,
  Sparkles, FileText, Hash, CreditCard,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const PACKAGES = [
  {
    name: "Starter", price: "150", emoji: "🌱", badge: "Entry Level",
    desc: "US LLC formation for new market entrants.",
    color: "#374151",
    features: [
      "U.S. LLC Registration",
      "Shared Business Address",
      "Articles of Organization",
      "Employer ID Number (EIN)",
      "Digital Company Documents (PDF)",
      "Certificate of Formation",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    name: "Silver", price: "200", emoji: "⭐", badge: "Most Popular",
    desc: "Complete package with a dedicated US address.",
    color: "#71717a",
    features: [
      "Everything in Starter",
      "Unique Business Address",
      "Portal Access & Mailing Support",
      "Priority Processing",
      "Document Storage",
    ],
    popular: true,
  },
  {
    name: "Gold", price: "400", emoji: "🏆", badge: "Best Value",
    desc: "Full US infrastructure including ITIN for non-residents.",
    color: "#f59e0b",
    features: [
      "Everything in Silver",
      "ITIN Application Included",
      "State Tax Registration",
      "Business Policy Review",
      "Dedicated Compliance Lead",
    ],
    popular: false,
  },
];

const STATES = [
  {
    name: "Wyoming", emoji: "🏔️",
    icon: ShieldCheck,
    highlights: [
      "No state income tax",
      "Highest privacy standards",
      "Strong asset protection",
      "Ideal for digital businesses",
    ],
  },
  {
    name: "Delaware", emoji: "⚖️",
    icon: Building2,
    highlights: [
      "Preferred by VCs & investors",
      "Established business courts",
      "Best for raising capital",
      "Global recognition",
    ],
  },
];

const SERVICES = [
  { icon: Hash, label: "EIN Number", desc: "IRS Employer ID for US banking" },
  { icon: FileText, label: "ITIN Number", desc: "For non-US resident members" },
  { icon: CreditCard, label: "Annual Tax Filing", desc: "Federal & state compliance" },
  { icon: ShieldCheck, label: "BOI Report", desc: "Beneficial Ownership Info" },
];

export default function LLCFormation() {
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


          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              US Company Formation
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)", fontWeight: 800,
              letterSpacing: "-0.045em", color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 720,
            }}>
              Form your US LLC from{" "}
              <span style={{
                background: "linear-gradient(135deg, #71717a, #a1a1aa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>anywhere</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
              Wyoming & Delaware LLCs for non-US residents. Full EIN, ITIN, compliance, and banking support included.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Get Started <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
              <Link href="#pricing" className="btn-secondary" style={{ fontSize: 16, padding: "14px 28px" }}>
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES STRIP */}
      <section style={{
        padding: "0 24px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "#080808",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 }}>
            {SERVICES.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "26px 22px",
                  borderRight: i < SERVICES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div style={{
                  width: 42, height: 42,
                  background: "rgba(113,113,122,0.1)",
                  border: "1px solid rgba(113,113,122,0.2)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <s.icon style={{ width: 19, height: 19, color: "#71717a" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: "#ffffff", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATE COMPARISON */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 52, textAlign: "center" }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>State Selection</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Which state is right for you?</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
              Both states offer excellent protections for non-US residents — choose based on your goals.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}
          >
            {STATES.map((s, i) => (
              <motion.div key={s.name} variants={fadeUp} custom={i} whileHover={{ y: -5 }}>
                <div style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(113,113,122,0.2)",
                  padding: "36px 30px", height: "100%",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 40px rgba(113,113,122,0.05)",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: "linear-gradient(90deg, #71717a, #a1a1aa, transparent)",
                  }} />

                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                    <span style={{ fontSize: 40 }}>{s.emoji}</span>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 800, color: "#ffffff" }}>{s.name}</div>
                      <div style={{ fontSize: 11, color: "#71717a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>US State</div>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {s.highlights.map((h) => (
                      <li key={h} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <div style={{
                          width: 20, height: 20, flexShrink: 0, marginTop: 1,
                          background: "rgba(113,113,122,0.15)",
                          border: "1px solid rgba(113,113,122,0.3)",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <CheckCircle2 style={{ width: 12, height: 12, color: "#71717a" }} />
                        </div>
                        <span style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.55 }}>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING */}
      <section id="pricing" style={{ padding: "80px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Pricing</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Transparent, all-in pricing</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 420, margin: "0 auto" }}>
              All packages include EIN registration, digital documents, and compliance setup.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, alignItems: "stretch" }}
          >
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} variants={fadeUp} custom={i}>
                <div style={{
                  background: pkg.popular
                    ? "linear-gradient(160deg, #05131e 0%, #040e15 100%)"
                    : "#111111",
                  borderRadius: 20,
                  border: pkg.popular
                    ? "2px solid rgba(113,113,122,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  padding: "36px 28px", display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden", height: "100%",
                  boxShadow: pkg.popular
                    ? "0 0 60px rgba(113,113,122,0.1), 0 30px 60px rgba(0,0,0,0.5)"
                    : "0 4px 20px rgba(0,0,0,0.3)",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: `linear-gradient(90deg, ${pkg.color}, transparent)`,
                    borderRadius: "20px 20px 0 0",
                  }} />

                  {pkg.popular && (
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: "rgba(113,113,122,0.15)",
                      border: "1px solid rgba(113,113,122,0.3)",
                      color: "#71717a", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 99,
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <Sparkles style={{ width: 10, height: 10 }} />
                      Most Popular
                    </div>
                  )}

                  <div style={{ marginBottom: 18 }}>
                    <span style={{ fontSize: 32 }}>{pkg.emoji}</span>
                  </div>

                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 800, color: "#ffffff", marginBottom: 8 }}>{pkg.name}</div>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>{pkg.desc}</p>

                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 28 }}>
                    <span style={{ fontSize: 18, color: "#6b7280", fontWeight: 600, alignSelf: "flex-start", marginTop: 8 }}>£</span>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 60, fontWeight: 800, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 1 }}>{pkg.price}</span>
                    <span style={{ fontSize: 13, color: "#6b7280", marginBottom: 8 }}>/ one-time</span>
                  </div>

                  <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11, flexGrow: 1, marginBottom: 28 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{
                          width: 18, height: 18, flexShrink: 0, marginTop: 1,
                          background: "rgba(113,113,122,0.15)",
                          border: "1px solid rgba(113,113,122,0.3)",
                          borderRadius: "50%",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <CheckCircle2 style={{ width: 11, height: 11, color: "#71717a" }} />
                        </div>
                        <span style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px 0",
                    background: pkg.popular ? "linear-gradient(135deg, #71717a, #a1a1aa)" : "rgba(255,255,255,0.06)",
                    color: pkg.popular ? "#ffffff" : "#d1d5db",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: 14, borderRadius: 12,
                    border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: pkg.popular ? "0 4px 14px rgba(113,113,122,0.3)" : "none",
                    transition: "all 0.25s ease",
                  }}
                    onMouseEnter={(e) => { if (!pkg.popular) { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; } }}
                    onMouseLeave={(e) => { if (!pkg.popular) { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; } }}
                  >
                    Get Started <ArrowRight style={{ width: 15, height: 15 }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA */}
      <section style={{ padding: "0 24px 90px", background: "#0a0a0a" }}>
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
              }}>Ready to enter the US market?</h2>
              <p style={{ color: "#6b7280", marginBottom: 36, fontSize: 17 }}>
                Our experts handle everything from registration to banking.
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
