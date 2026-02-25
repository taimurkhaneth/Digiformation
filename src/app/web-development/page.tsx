'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe, Code2, Smartphone, ShoppingCart, Zap,
  CheckCircle2, ArrowRight, Layers, Palette, Search, Shield,
  Clock, Star
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const SERVICES = [
  {
    icon: Globe, label: "Business Websites",
    desc: "Professional multi-page websites that represent your brand — built for speed, SEO, and conversions.",
    features: ["Custom design", "Mobile responsive", "Contact forms", "Google Analytics"],
    from: "499",
  },
  {
    icon: ShoppingCart, label: "E-Commerce Stores",
    desc: "Full online stores with product management, secure checkout, and payment integration.",
    features: ["Product catalogue", "Stripe / PayPal", "Order management", "Inventory tracking"],
    from: "899",
  },
  {
    icon: Zap, label: "Landing Pages",
    desc: "High-converting single-page sites designed to turn visitors into paying clients.",
    features: ["Lead capture forms", "A/B test ready", "Fast load times", "CTA optimised"],
    from: "249",
  },
  {
    icon: Code2, label: "Custom Web Apps",
    desc: "Bespoke web applications — dashboards, portals, booking systems, and internal tools.",
    features: ["Full-stack build", "Database design", "API integration", "Ongoing support"],
    from: "1,500",
  },
  {
    icon: Smartphone, label: "Mobile-First Design",
    desc: "Every project is designed mobile-first so it looks great on any screen size or device.",
    features: ["Responsive layouts", "Touch-friendly UI", "Fast on all devices", "PWA support"],
    from: "Included",
  },
  {
    icon: Search, label: "SEO & Performance",
    desc: "Built-in on-page SEO, fast loading scores, and technical best practices from day one.",
    features: ["On-page SEO", "Core Web Vitals", "Schema markup", "Sitemap & robots.txt"],
    from: "Included",
  },
];

const STACK = [
  { label: "Next.js", desc: "React framework for fast, SEO-friendly sites" },
  { label: "React", desc: "Modern component-based UI development" },
  { label: "Tailwind CSS", desc: "Utility-first styling for pixel-perfect designs" },
  { label: "Supabase", desc: "Postgres database and authentication backend" },
  { label: "Vercel", desc: "Global edge deployment & CDN" },
  { label: "WordPress", desc: "CMS for content-heavy sites and blogs" },
  { label: "Shopify", desc: "E-commerce platform for product stores" },
  { label: "Stripe", desc: "Secure payment processing integration" },
];

const PROCESS = [
  { num: "01", icon: Palette, label: "Discovery & Design", desc: "We understand your goals, brand identity, and target audience — then wireframe and design the full experience." },
  { num: "02", icon: Code2,   label: "Development",        desc: "We build your site with clean, modern code — optimised for speed, SEO, and scalability from day one." },
  { num: "03", icon: Shield,  label: "Testing & Review",   desc: "Full QA across all devices, browsers, and screen sizes before anything goes live." },
  { num: "04", icon: Globe,   label: "Launch & Support",   desc: "We deploy your project and provide ongoing support, updates, and hosting assistance as you grow." },
];

const PACKAGES = [
  {
    name: "Starter", price: "499", color: "#71717a",
    desc: "Perfect for new businesses needing a clean, professional online presence.",
    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic on-page SEO", "3 revision rounds", "2-week delivery"],
  },
  {
    name: "Growth", price: "999", color: "#6366f1", popular: true,
    desc: "For businesses ready to grow — more pages, more features, and stronger SEO.",
    features: ["Up to 12 pages", "CMS / blog integration", "Advanced SEO setup", "Google Analytics", "WhatsApp chat widget", "5 revision rounds", "3-week delivery"],
  },
  {
    name: "Premium", price: "2,499", color: "#f59e0b",
    desc: "Full custom builds — web apps, e-commerce, and complex multi-feature projects.",
    features: ["Unlimited pages", "E-commerce or web app", "Custom integrations & APIs", "Payment gateway setup", "Priority support", "Unlimited revisions", "4-week delivery"],
  },
];

export default function WebDev() {
  return (
    <div style={{ background: "#0a0a0a", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* ── HERO */}
      <section style={{ paddingTop: 130, paddingBottom: 80, position: "relative", overflow: "hidden", background: "#0a0a0a" }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: -100, right: -80, width: 700, height: 500,
          background: "radial-gradient(circle, rgba(113,113,122,0.1) 0%, transparent 65%)",
          filter: "blur(80px)", borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -100, width: 500, height: 400,
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              Web Development
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 800,
              letterSpacing: "-0.045em", color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 760,
            }}>
              Websites that work{" "}
              <span style={{
                background: "linear-gradient(135deg, #71717a, #a1a1aa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>as hard as you do.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
              We build fast, professional, and conversion-focused websites for businesses worldwide — from simple landing pages to full e-commerce stores and custom web apps.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                Get a Free Quote <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
              <a href="#packages" className="btn-secondary" style={{ fontSize: 15, padding: "14px 28px" }}>
                View Packages
              </a>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: "flex", gap: 16, marginTop: 60, flexWrap: "wrap" }}
          >
            {[
              { num: "48h", label: "Design turnaround" },
              { num: "100%", label: "Mobile responsive" },
              { num: "90+", label: "PageSpeed score" },
              { num: "24/7", label: "WhatsApp support" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, padding: "18px 24px", flex: "1 1 140px",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#71717a", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.04em" }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#6b7280", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID */}
      <section style={{ padding: "90px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>What We Build</span>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Services we offer</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480 }}>
              From a single landing page to a full-scale web application — we handle everything.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}
          >
            {SERVICES.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} custom={i} whileHover={{ y: -5 }}>
                <div style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "30px 26px", height: "100%",
                  position: "relative", overflow: "hidden",
                  transition: "border-color 0.3s",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #71717a, #a1a1aa, transparent)" }} />
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, marginBottom: 20,
                    background: "rgba(113,113,122,0.1)", border: "1px solid rgba(113,113,122,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <s.icon style={{ width: 20, height: 20, color: "#71717a" }} />
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, color: "#ffffff", marginBottom: 8 }}>{s.label}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#9ca3af" }}>
                        <CheckCircle2 style={{ width: 14, height: 14, color: "#71717a", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {s.from !== "Included" && (
                    <div style={{ fontSize: 12, color: "#4b5563", fontWeight: 600 }}>
                      From <span style={{ color: "#71717a", fontSize: 15, fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>£{s.from}</span>
                    </div>
                  )}
                  {s.from === "Included" && (
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: "#71717a",
                      background: "rgba(113,113,122,0.1)", border: "1px solid rgba(113,113,122,0.2)",
                      borderRadius: 6, padding: "3px 10px", display: "inline-block", letterSpacing: "0.05em",
                    }}>INCLUDED IN ALL PACKAGES</div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48, textAlign: "center" }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Our Stack</span>
            <h2 className="section-heading" style={{ marginBottom: 14 }}>Modern tools, proven results</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
              We use the latest technologies to deliver fast, scalable, and maintainable projects.
            </p>
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}
          >
            {STACK.map((t, i) => (
              <motion.div key={t.label} variants={fadeUp} custom={i} whileHover={{ y: -3 }}>
                <div style={{
                  background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14,
                  padding: "18px 20px", display: "flex", alignItems: "center", gap: 14,
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: 36, height: 36, flexShrink: 0, borderRadius: 9,
                    background: "rgba(113,113,122,0.1)", border: "1px solid rgba(113,113,122,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Layers style={{ width: 16, height: 16, color: "#71717a" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>{t.label}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{t.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS */}
      <section style={{ padding: "80px 24px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>How It Works</span>
            <h2 className="section-heading" style={{ marginBottom: 14 }}>Our process, from idea to launch</h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {PROCESS.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -4 }}
              >
                <div style={{
                  background: "#111", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 18, padding: "28px 24px", height: "100%", position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #71717a, transparent)" }} />
                  <div style={{ fontSize: 42, fontWeight: 800, color: "rgba(113,113,122,0.15)", fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.05em", marginBottom: 16 }}>{step.num}</div>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 16,
                    background: "rgba(113,113,122,0.1)", border: "1px solid rgba(113,113,122,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <step.icon style={{ width: 18, height: 18, color: "#71717a" }} />
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 17, color: "#fff", marginBottom: 10 }}>{step.label}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING */}
      <section id="packages" style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56, textAlign: "center" }}>
            <span className="section-label" style={{ marginBottom: 18, display: "inline-block" }}>Pricing</span>
            <h2 className="section-heading" style={{ marginBottom: 14 }}>Transparent, fixed pricing</h2>
            <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 440, margin: "0 auto" }}>
              No surprises. Pick a package and we&apos;ll deliver exactly what&apos;s promised.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div style={{
                  background: pkg.popular ? "linear-gradient(160deg, #05131e 0%, #030d14 100%)" : "#111",
                  border: `1px solid ${pkg.popular ? "rgba(113,113,122,0.35)" : "rgba(255,255,255,0.07)"}`,
                  borderRadius: 22, padding: "36px 30px", height: "100%",
                  position: "relative", overflow: "hidden",
                  boxShadow: pkg.popular ? "0 0 50px rgba(113,113,122,0.1)" : "none",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${pkg.color}, transparent)` }} />
                  {pkg.popular && (
                    <div style={{
                      position: "absolute", top: 18, right: 18,
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#71717a",
                      background: "rgba(113,113,122,0.15)", border: "1px solid rgba(113,113,122,0.3)",
                      borderRadius: 6, padding: "3px 10px", textTransform: "uppercase",
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <Star style={{ width: 10, height: 10 }} /> Most Popular
                    </div>
                  )}
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 6 }}>{pkg.name}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>{pkg.desc}</div>
                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 46, color: "#fff", letterSpacing: "-0.05em" }}>£{pkg.price}</span>
                    <span style={{ fontSize: 14, color: "#4b5563", marginLeft: 6 }}>one-time</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#9ca3af" }}>
                        <CheckCircle2 style={{ width: 16, height: 16, color: "#71717a", flexShrink: 0, marginTop: 1 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={pkg.popular ? "btn-primary" : "btn-secondary"}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", fontSize: 14, width: "100%" }}
                  >
                    Get Started <ArrowRight style={{ width: 16, height: 16 }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section style={{ padding: "0 24px 90px", background: "#080808" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: "linear-gradient(160deg, #05131e 0%, #030d14 100%)",
              borderRadius: 24, padding: "64px 40px", textAlign: "center",
              border: "1px solid rgba(113,113,122,0.2)",
              boxShadow: "0 0 60px rgba(113,113,122,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #71717a, transparent)" }} />
            <div style={{
              position: "absolute", top: -60, right: -60, width: 300, height: 300,
              background: "radial-gradient(circle, rgba(113,113,122,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 18 }}>
                <Clock style={{ width: 18, height: 18, color: "#71717a" }} />
                <span style={{ fontSize: 14, color: "#71717a", fontWeight: 600 }}>We respond within 2 hours</span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: "#fff", marginBottom: 16 }}>
                Ready to build something great?
              </h2>
              <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
                Tell us about your project and we&apos;ll give you a free quote and timeline within 24 hours.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "15px 32px" }}>
                  Get a Free Quote <ArrowRight style={{ width: 17, height: 17 }} />
                </Link>
                <a
                  href="https://wa.me/923164467464"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)",
                    color: "#25d366", borderRadius: 12, padding: "15px 28px",
                    fontSize: 15, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
