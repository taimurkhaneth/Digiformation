'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, ArrowRight, Clock, ShieldCheck, Globe, Zap,
  Sparkles, Building2, FileText, Users, BarChart3, Landmark, Briefcase,
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
    name: "Essential", price: "199", emoji: "🌱",
    desc: "Perfect for entrepreneurs and solo founders starting in South Africa.",
    color: "#374151",
    features: [
      "PTY Ltd Registration (CIPC)",
      "CIPC Filing Fee Included",
      "Digital Certificate of Incorporation",
      "Memorandum of Incorporation (MOI)",
      "Share Certificate",
      "ID Verification",
      "Phone & WhatsApp Support",
      "5–7 Business Day Processing",
    ],
    popular: false, cta: "Select Essential",
  },
  {
    name: "Business", price: "299", emoji: "⭐",
    desc: "The complete package — most popular for growing businesses.",
    color: "#71717a",
    features: [
      "Everything in Essential",
      "SARS Tax Number Registration",
      "B-BBEE Affidavit Assistance",
      "Registered Office Address (1 yr)",
      "Company Seal",
      "Director Service Address Option",
      "Priority WhatsApp Support",
      "3–5 Business Day Processing",
    ],
    popular: true, cta: "Select Business",
  },
  {
    name: "Growth", price: "349", emoji: "🏆",
    desc: "Full compliance setup for established operations.",
    color: "#f59e0b",
    features: [
      "Everything in Business",
      "VAT Registration Assistance",
      "PAYE Registration",
      "Annual Return Reminder",
      "Dedicated Account Manager",
    ],
    popular: false, cta: "Select Growth",
  },
  {
    name: "Enterprise", price: "449", emoji: "💎",
    desc: "Hands-off premium compliance for large-scale operations.",
    color: "#8b5cf6",
    features: [
      "Everything in Growth",
      "Import/Export License Assistance",
      "Annual CIPC Compliance Filing",
      "UIF & SDL Registration",
      "Quarterly Compliance Review",
    ],
    popular: false, cta: "Select Enterprise",
  },
];

const FEATURES = [
  { icon: Clock,       label: "Fast Processing",     desc: "Company ready in 3–7 business days" },
  { icon: ShieldCheck, label: "CIPC Compliant",       desc: "100% South African regulatory compliance" },
  { icon: Globe,       label: "Remote-Friendly",      desc: "No SA residency required" },
  { icon: Zap,         label: "Expert Support",       desc: "Dedicated WhatsApp advisor included" },
];

const STEPS = [
  { num: "01", icon: FileText,   label: "Submit Details",        desc: "Fill out our simple online form with your company and director details." },
  { num: "02", icon: ShieldCheck, label: "ID Verification",     desc: "Complete fast digital identity verification for all directors." },
  { num: "03", icon: Building2,  label: "We File with CIPC",    desc: "Our team registers your company with the Companies and Intellectual Property Commission." },
  { num: "04", icon: Landmark,   label: "Certificate Issued",   desc: "Receive your incorporation documents and registration number digitally." },
];

const BENEFITS = [
  {
    icon: Globe,
    title: "Gateway to Africa",
    desc: "South Africa's strategic location and infrastructure makes it the ideal hub for accessing Sub-Saharan African markets.",
  },
  {
    icon: BarChart3,
    title: "Thriving Economy",
    desc: "As Africa's most industrialised economy, South Africa offers a stable environment with established financial markets.",
  },
  {
    icon: Briefcase,
    title: "Foreign Ownership",
    desc: "Non-residents can own 100% of a South African PTY Ltd — no local partner required in most sectors.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    desc: "Access a large English-speaking talent pool with globally recognised professionals and specialists.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Certainty",
    desc: "South Africa has a mature legal system based on Roman-Dutch and English law, providing strong business protections.",
  },
  {
    icon: Zap,
    title: "Double Tax Treaties",
    desc: "South Africa has tax treaties with over 70 countries, minimising double taxation for international businesses.",
  },
];

const FAQS = [
  {
    q: "What type of company can I register in South Africa?",
    a: "The most common structure for businesses is a Private Company (PTY Ltd), registered with the Companies and Intellectual Property Commission (CIPC). It limits liability and is recognised internationally.",
  },
  {
    q: "Do I need to be a South African resident to register a company?",
    a: "No. Non-residents can form and own a PTY Ltd in South Africa. However, at least one director must be a natural person (an individual, not a company).",
  },
  {
    q: "How long does the registration process take?",
    a: "CIPC typically processes company registrations within 3–7 business days. Our team handles all correspondence and filing, keeping you updated every step of the way.",
  },
  {
    q: "What documents do I need to register?",
    a: "You'll need valid identification (passport or SA ID), proof of address, and your chosen company name. Our team will guide you through all requirements for a smooth registration.",
  },
  {
    q: "Is VAT registration mandatory?",
    a: "VAT registration is compulsory once your annual turnover exceeds R1 million. We assist with voluntary and mandatory VAT registrations with SARS.",
  },
];

export default function SouthAfricaFormation() {
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
          background: "radial-gradient(circle, rgba(113,113,122,0.1) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -80, width: 400, height: 300,
          background: "radial-gradient(circle, rgba(113,113,122,0.06) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              🇿🇦 South Africa Company Formation
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)",
              fontWeight: 800, letterSpacing: "-0.045em",
              color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 760,
            }}>
              Register Your South African{" "}
              <span style={{
                background: "linear-gradient(135deg, #71717a, #a1a1aa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>PTY Ltd</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}>
              Fast, professional, and fully CIPC-compliant company formation. Launch your South African business from anywhere in the world with expert support every step of the way.
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
                  background: "rgba(113,113,122,0.1)",
                  border: "1px solid rgba(113,113,122,0.2)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <f.icon style={{ width: 20, height: 20, color: "#71717a" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, color: "#ffffff", marginBottom: 3 }}>{f.label}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SOUTH AFRICA ──────────────────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Why SA</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Why register in South Africa?</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              South Africa is Africa's most advanced economy — offering stability, opportunity, and global connectivity.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: 20,
            }}
          >
            {BENEFITS.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp} custom={i}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "32px 28px",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.35s ease",
                }}
                whileHover={{ borderColor: "rgba(113,113,122,0.3)", y: -4 }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #71717a, #a1a1aa, transparent)",
                }} />
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(113,113,122,0.1)",
                  border: "1px solid rgba(113,113,122,0.2)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18,
                }}>
                  <b.icon style={{ width: 22, height: 22, color: "#71717a" }} />
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 800, color: "#ffffff", marginBottom: 10 }}>{b.title}</div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: "#080808" }}>
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
                  background: "#161616",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "32px 24px",
                  position: "relative", overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #71717a, #a1a1aa, transparent)",
                }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 56, fontWeight: 800, lineHeight: 1,
                  color: "rgba(113,113,122,0.08)",
                  display: "block", marginBottom: 12,
                }}>{step.num}</span>
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(113,113,122,0.1)",
                  border: "1px solid rgba(113,113,122,0.2)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <step.icon style={{ width: 22, height: 22, color: "#71717a" }} />
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 800, color: "#ffffff", marginBottom: 10 }}>{step.label}</div>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section id="pricing" style={{ padding: "90px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Pricing</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Choose your formation package</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
              All packages include CIPC registration fee and full compliance setup. Prices in USD.
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
                    ? "2px solid rgba(113,113,122,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  padding: "36px 28px",
                  display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                  height: "100%",
                  boxShadow: pkg.popular
                    ? "0 0 0 1px rgba(113,113,122,0.1), 0 0 60px rgba(113,113,122,0.1), 0 30px 60px rgba(0,0,0,0.5)"
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
                      background: "rgba(113,113,122,0.15)",
                      border: "1px solid rgba(113,113,122,0.3)",
                      color: "#71717a", fontSize: 10, fontWeight: 700,
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
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 20, fontWeight: 800, color: "#ffffff", marginBottom: 8,
                  }}>{pkg.name}</div>
                  <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>{pkg.desc}</p>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 28 }}>
                    <span style={{ fontSize: 18, color: "#6b7280", fontWeight: 600, alignSelf: "flex-start", marginTop: 8 }}>$</span>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
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

                  {/* CTA */}
                  <Link href="/contact" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px 0",
                    background: pkg.popular
                      ? "linear-gradient(135deg, #71717a, #a1a1aa)"
                      : "rgba(255,255,255,0.06)",
                    color: pkg.popular ? "#ffffff" : "#d1d5db",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: 14,
                    borderRadius: 12,
                    border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.25s ease",
                    boxShadow: pkg.popular ? "0 4px 14px rgba(113,113,122,0.3)" : "none",
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

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "90px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>FAQ</span>
            <h2 className="section-heading">Common questions</h2>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16, padding: "28px 28px",
                  position: "relative", overflow: "hidden",
                }}
                whileHover={{ borderColor: "rgba(113,113,122,0.25)" }}
              >
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                  background: "linear-gradient(180deg, #71717a, transparent)",
                }} />
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: 800, color: "#ffffff", marginBottom: 10 }}>{faq.q}</div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
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
              border: "1px solid rgba(113,113,122,0.2)",
              boxShadow: "0 0 60px rgba(113,113,122,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
              width: 400, height: 200,
              background: "radial-gradient(circle, rgba(113,113,122,0.15) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: 48, display: "block", marginBottom: 20 }}>🇿🇦</span>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#ffffff",
                letterSpacing: "-0.03em", marginBottom: 14,
              }}>Ready to launch in South Africa?</h2>
              <p style={{ color: "#6b7280", marginBottom: 36, fontSize: 17 }}>
                Our South Africa specialists will guide you through every step — from registration to full compliance.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 32px" }}>
                  Book Free Consultation <ArrowRight style={{ width: 17, height: 17 }} />
                </Link>
                <Link href="#pricing" className="btn-secondary" style={{ fontSize: 16, padding: "15px 32px" }}>
                  View Packages
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
