'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Building2, Globe2, Layers, CreditCard,
  Zap, CheckCircle2,
  Star, TrendingUp, HeadphonesIcon, Award, Lock,
} from "lucide-react";

/* ── Animated Counter ─────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: "easeOut" });
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ── Framer variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── Data ────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Building2, label: "UK LTD Formation",
    desc: "Register your UK Limited Company with Companies House. Certificate ready in 24 hours with UTR, ID verification, and full compliance.",
    href: "/ltd-formation-services",
    badge: "Most Popular",
    stat: "500+ formed",
  },
  {
    icon: Globe2, label: "US LLC Formation",
    desc: "Start a compliant Wyoming or Delaware LLC. EIN, ITIN, registered agent, BOI report — fully handled for non-US residents.",
    href: "/llc-formation-services",
    badge: "50+ countries",
    stat: "24h turnaround",
  },
  {
    icon: Layers, label: "UK Shelf Companies",
    desc: "Acquire a ready-made aged UK company for immediate operations. Clean history, fully transferable, instant ownership.",
    href: "/uk-shelf-companies",
    badge: "100+ available",
    stat: "Instant setup",
  },
  {
    icon: CreditCard, label: "Banking & Payments",
    desc: "Multi-currency accounts and verified payment gateways — Stripe, PayPal, Wise, Payoneer, Tide, and more.",
    href: "/banks-payment-solutions",
    badge: "10+ providers",
    stat: "Verified accounts",
  },
];

const STATS = [
  { to: 500, suffix: "+", label: "Companies Formed", icon: Building2 },
  { to: 100, suffix: "+", label: "Shelf Companies", icon: Layers },
  { to: 50,  suffix: "+", label: "Countries Served", icon: Globe2 },
  { to: 98,  suffix: "%", label: "Client Satisfaction", icon: Star },
];

const WHY = [
  { icon: Zap,             title: "Fast Turnaround",      desc: "Most companies registered within 24 hours of submission.", big: true },
  { icon: Lock,            title: "Fully Compliant",      desc: "100% compliant with HMRC, Companies House, and IRS regulations." },
  { icon: HeadphonesIcon,  title: "Dedicated Support",    desc: "Personal advisor via WhatsApp, email, and phone — always available." },
  { icon: TrendingUp,      title: "Transparent Pricing",  desc: "Clear upfront costs. Zero hidden fees. No surprises ever." },
  { icon: Globe2,          title: "Global Expertise",     desc: "Supporting founders from 50+ countries to establish UK/US businesses." },
  { icon: Award,           title: "Proven Track Record",  desc: "500+ companies successfully registered and fully operational." },
];

const TESTIMONIALS = [
  {
    name: "James W.", role: "Founder, London UK", stars: 5,
    text: "Excellent service for my UK LTD. The process was smooth and my certificate arrived the next day. The team handled everything professionally.",
  },
  {
    name: "Ali R.", role: "Entrepreneur, Karachi", stars: 5,
    text: "Digiformation made starting my international business completely stress-free. Got my UK company, banking, and payment gateway all in one place.",
  },
  {
    name: "Sophia L.", role: "SaaS Founder, California", stars: 5,
    text: "Got my Wyoming LLC, EIN, and bank account set up in under a week. They handled the IRS paperwork — I just signed where needed.",
  },
];

const PARTNERS = [
  { name: "Companies House", logo: "/logos/companies-house-1.svg" },
  { name: "Stripe",          logo: "/logos/Stripe wordmark - White.svg" },
  { name: "PayPal",          logo: "/logos/PayPal_Logo_0.svg" },
  { name: "Wise",            logo: "/logos/wise-1.svg" },
  { name: "Payoneer",        logo: "/logos/payoneer-dark-logo.svg" },
  { name: "Tide",            logo: "/logos/Tide_idxybKEmUX_0.svg" },
  { name: "Airwallex",       logo: "/logos/Airwallex_Logo_0.svg" },
  { name: "WorldFirst",      logo: "/logos/worldfirst.svg" },
];

export default function Home() {

  return (
    <div style={{ background: "#0a0a0a", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ════════════════════════════════════════════════════════════════ HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        paddingTop: 120, paddingBottom: 80,
        position: "relative", overflow: "hidden",
        background: "#0a0a0a",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        {/* Glow orbs */}
        <div style={{
          position: "absolute", top: "15%", right: "5%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
          animation: "emerald-breathe 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", zIndex: 1 }}>
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
              <span className="section-label">
                <span style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                Trusted by 500+ businesses worldwide
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              color: "#ffffff",
              marginBottom: 28,
              maxWidth: 760,
            }}>
              Register your UK or US{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline",
              }}>
                company
              </span>
              <br />
              <span style={{ color: "#ffffff" }}>in days.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={fadeUp} style={{
              fontSize: 19, lineHeight: 1.7, color: "#9ca3af",
              maxWidth: 560, marginBottom: 44, fontWeight: 400,
            }}>
              Fast, professional, and fully supported company formation, banking, shelf companies, and compliance — for global entrepreneurs.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "15px 30px" }}>
                Book Free Consultation
                <ArrowRight style={{ width: 18, height: 18 }} />
              </Link>
              <Link href="/uk-shelf-companies" className="btn-secondary" style={{ fontSize: 16, padding: "15px 30px" }}>
                Browse Shelf Companies
              </Link>
            </motion.div>

            {/* Trust pills */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              {["Companies House Certified", "HMRC Compliant", "IRS Approved", "24/7 Support"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <CheckCircle2 style={{ width: 15, height: 15, color: "#10b981" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#6b7280" }}>{t}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: 16, marginTop: 80,
          }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "rgba(22,22,22,0.8)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "24px 24px",
                  backdropFilter: "blur(20px)",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ borderColor: "rgba(16,185,129,0.3)", y: -4 }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, #10b981, transparent)",
                }} />
                <div style={{
                  fontSize: 42, fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1,
                  fontFamily: "'Outfit', sans-serif",
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginBottom: 6,
                }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ PARTNER LOGOS STRIP */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "#0d0d0d",
        padding: "22px 40px",
        overflowX: "auto",
        overflowY: "hidden",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          minWidth: "max-content",
          margin: "0 auto",
          justifyContent: "center",
        }}>
          <span style={{
            fontSize: 10, fontWeight: 700, color: "#374151",
            letterSpacing: "0.12em", textTransform: "uppercase",
            whiteSpace: "nowrap", paddingRight: 32, flexShrink: 0,
          }}>
            Trusted partnerships
          </span>

          {/* Vertical divider before logos */}
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.07)", flexShrink: 0 }} />

          {PARTNERS.map((p, i) => (
            <React.Fragment key={p.name}>
              <div style={{
                padding: "0 28px",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <img
                  src={p.logo}
                  alt={p.name}
                  title={p.name}
                  style={{
                    height: 26,
                    width: "auto",
                    maxWidth: 110,
                    objectFit: "contain",
                    filter: "brightness(0) invert(1) opacity(0.55)",
                    transition: "filter 0.25s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(0) invert(1) opacity(1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(0) invert(1) opacity(0.55)"; }}
                />
              </div>
              {/* Divider between logos */}
              {i < PARTNERS.length - 1 && (
                <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.06)", flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════ SERVICES */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 64, textAlign: "center" }}
          >
            <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>What We Do</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>
              Everything your business needs
            </h2>
            <p style={{ fontSize: 18, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
              One platform for company formation, banking, compliance, and more.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICES.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i}>
                <Link href={s.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      borderColor: "rgba(16,185,129,0.3)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.06)",
                    }}
                    style={{
                      background: "#111111",
                      borderRadius: 20,
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "32px 28px",
                      display: "flex", flexDirection: "column",
                      height: "100%",
                      position: "relative", overflow: "hidden",
                      cursor: "pointer",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    {/* Gradient top stripe */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 3,
                      background: "linear-gradient(90deg, #10b981, #059669, transparent)",
                      borderRadius: "20px 20px 0 0",
                    }} />

                    {/* Inner glow on hover overlay */}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(135deg, rgba(16,185,129,0.04) 0%, transparent 60%)",
                      borderRadius: 20, opacity: 0,
                      transition: "opacity 0.3s",
                      pointerEvents: "none",
                    }} />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      style={{
                        width: 56, height: 56,
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        borderRadius: 16,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 24,
                        flexShrink: 0,
                      }}
                    >
                      <s.icon style={{ width: 26, height: 26, color: "#10b981" }} />
                    </motion.div>

                    {/* Badge */}
                    <span style={{
                      display: "inline-flex", alignItems: "center",
                      fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      color: "#10b981",
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      padding: "3px 9px", borderRadius: 99,
                      marginBottom: 14, alignSelf: "flex-start",
                    }}>{s.badge}</span>

                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 20, fontWeight: 800, color: "#ffffff",
                      letterSpacing: "-0.03em", marginBottom: 10,
                    }}>{s.label}</div>

                    <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, flexGrow: 1 }}>
                      {s.desc}
                    </p>

                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      marginTop: 24, paddingTop: 20,
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, color: "#374151",
                        letterSpacing: "0.04em", textTransform: "uppercase",
                      }}>{s.stat}</span>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 5,
                        color: "#10b981", fontSize: 13, fontWeight: 700,
                      }}>
                        Learn more <ArrowRight style={{ width: 14, height: 14 }} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ WHY US */}
      <section style={{ padding: "100px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 64 }}
          >
            <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>Why Choose Us</span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <h2 className="section-heading" style={{ maxWidth: 520 }}>
                Built for global<br />founders
              </h2>
              <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 320 }}>
                We handle the complex so you can focus on building your business.
              </p>
            </div>
          </motion.div>

          {/* Bento grid */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gridAutoRows: "1fr",
              gap: 16,
            }}
          >
            {WHY.map((w, i) => (
              <motion.div
                key={w.title} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "32px 28px",
                  transition: "all 0.3s ease",
                  position: "relative", overflow: "hidden",
                  ...(i === 0 ? {
                    background: "linear-gradient(160deg, #0d1e15 0%, #111111 100%)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  } : {}),
                }}
              >
                {i === 0 && (
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: "linear-gradient(90deg, #10b981, #34d399, transparent)",
                  }} />
                )}

                <motion.div
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{
                    width: 48, height: 48,
                    background: i === 0 ? "rgba(16,185,129,0.15)" : "rgba(16,185,129,0.08)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: 14,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <w.icon style={{ width: 22, height: 22, color: "#10b981" }} />
                </motion.div>

                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: i === 0 ? 22 : 17,
                  fontWeight: 800, color: "#ffffff",
                  letterSpacing: "-0.03em", marginBottom: 10,
                }}>
                  {w.title}
                </div>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{w.desc}</p>

                {i === 0 && (
                  <div style={{ marginTop: 24 }}>
                    <Link href="/contact" className="btn-emerald-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                      Get Started <ArrowRight style={{ width: 14, height: 14 }} />
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ TESTIMONIALS */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <span className="section-label" style={{ marginBottom: 20, display: "inline-block" }}>Social Proof</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Loved by founders worldwide</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 400, margin: "0 auto" }}>
              500+ companies formed, clients from 50+ countries
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20, padding: "36px 28px",
                  display: "flex", flexDirection: "column",
                  position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Emerald quote mark */}
                <div style={{
                  position: "absolute", top: 20, right: 24,
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 80, fontWeight: 800, lineHeight: 1,
                  color: "rgba(16,185,129,0.08)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}>
                  &quot;
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} style={{ width: 15, height: 15, color: "#10b981", fill: "#10b981" }} />
                  ))}
                </div>

                <p style={{
                  fontSize: 15, color: "#d1d5db", lineHeight: 1.75,
                  marginBottom: 28, flexGrow: 1, fontStyle: "italic",
                }}>
                  &quot;{t.text}&quot;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 16, fontWeight: 800, color: "white",
                    boxShadow: "0 0 16px rgba(16,185,129,0.3)",
                    flexShrink: 0,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, color: "#ffffff" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ CTA BANNER */}
      <section style={{ padding: "0 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "linear-gradient(160deg, #0d1e15 0%, #091a11 50%, #06140d 100%)",
              borderRadius: 28,
              padding: "80px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(16,185,129,0.2)",
              boxShadow: "0 0 0 1px rgba(16,185,129,0.08), 0 30px 80px rgba(0,0,0,0.6), 0 0 80px rgba(16,185,129,0.06)",
            }}
          >
            {/* Grid overlay */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              pointerEvents: "none",
            }} />

            {/* Orb */}
            <div style={{
              position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
              width: 500, height: 300,
              background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
                Start Today
              </span>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800, color: "#ffffff",
                letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1.1,
              }}>
                Ready to launch your{" "}
                <span style={{
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>business?</span>
              </h2>
              <p style={{
                fontSize: 18, color: "rgba(255,255,255,0.6)",
                marginBottom: 44, maxWidth: 440, margin: "0 auto 44px",
              }}>
                Book a free consultation and our advisors will guide you every step of the way.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
                  Book Free Consultation
                  <ArrowRight style={{ width: 18, height: 18 }} />
                </Link>
                <Link href="/uk-shelf-companies" className="btn-secondary" style={{ fontSize: 16, padding: "16px 32px" }}>
                  Explore Shelf Companies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
