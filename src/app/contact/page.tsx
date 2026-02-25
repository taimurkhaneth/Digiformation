'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, MapPin, Mail, Phone, Clock,
  CheckCircle, Send, MessageCircle,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const SERVICES = [
  "UK LTD Formation", "US LLC Formation", "Shelf Company Acquisition",
  "Business Banking", "Payment Gateway Setup", "General Enquiry",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!supabase) {
        throw new Error("Supabase not initialized");
      }
      await supabase.from("contact_submissions").insert([form]);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12, fontSize: 14,
    fontFamily: "'Space Grotesk', sans-serif",
    color: "#ffffff", outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#0a0a0a", fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Hero */}
      <section style={{
        paddingTop: 130, paddingBottom: 72,
        background: "#0a0a0a", position: "relative", overflow: "hidden", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400,
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>Get in Touch</span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800,
              letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1.05, marginBottom: 20,
            }}>
              Let&apos;s talk about{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981, #34d399)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>your business</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", lineHeight: 1.7 }}>
              Our advisors typically respond within a few hours and will help you find the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding: "64px 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28, alignItems: "start",
          }}>

            {/* Left — Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Contact info card */}
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)", padding: "32px 28px",
                }}
              >
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 800, color: "#ffffff", marginBottom: 28 }}>
                  Contact details
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: MapPin, label: "Address", value: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ" },
                    { icon: Mail, label: "Email", value: "support@digiformation.uk" },
                    { icon: Phone, label: "Phone / WhatsApp", value: "+92 316 4467464" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{
                        width: 38, height: 38,
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        borderRadius: 10,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <item.icon style={{ width: 17, height: 17, color: "#10b981" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>{item.label}</p>
                        <p style={{ fontSize: 14, color: "#d1d5db", fontWeight: 500, lineHeight: 1.55 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)", padding: "28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{
                    width: 34, height: 34,
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Clock style={{ width: 15, height: 15, color: "#10b981" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 800, color: "#ffffff" }}>Office hours</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[["Mon – Fri", "9:00 – 18:00 GMT"], ["Saturday", "Limited availability"], ["Sunday", "Closed"]].map(([d, h]) => (
                    <div key={d} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <span style={{ color: "#6b7280" }}>{d}</span>
                      <span style={{ color: "#d1d5db", fontWeight: 600 }}>{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 8, height: 8, background: "#10b981", borderRadius: "50%", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#10b981" }}>Currently online</span>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.a href="https://wa.me/923164467464" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.01, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "linear-gradient(135deg, #128C7E, #25D366)",
                  borderRadius: 18, padding: "22px 24px",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.2)",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MessageCircle style={{ width: 22, height: 22, color: "white" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 800, color: "white", marginBottom: 2, fontFamily: "'Outfit', sans-serif" }}>Chat on WhatsApp</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Fastest response — usually under 1 hour</p>
                </div>
                <ArrowRight style={{ width: 18, height: 18, color: "white" }} />
              </motion.a>
            </div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{
                background: "#111111", borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.07)", padding: "40px 36px",
                position: "relative", overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #10b981, #34d399, transparent)",
              }} />

              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{
                    width: 72, height: 72,
                    background: "rgba(16,185,129,0.15)",
                    border: "2px solid rgba(16,185,129,0.4)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 0 30px rgba(16,185,129,0.2)",
                  }}>
                    <CheckCircle style={{ width: 32, height: 32, color: "#10b981" }} />
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 800, color: "#ffffff", marginBottom: 12 }}>Message sent!</h2>
                  <p style={{ color: "#6b7280", marginBottom: 32, fontSize: 15 }}>We&apos;ll be in touch within a few hours.</p>
                  <button onClick={() => setSubmitted(false)}
                    style={{ fontSize: 14, fontWeight: 700, color: "#10b981", background: "none", border: "none", cursor: "pointer" }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, color: "#ffffff", marginBottom: 28 }}>
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Full name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="John Smith" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(16,185,129,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Email address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required
                          placeholder="john@company.com" style={inputStyle}
                          onFocus={(e) => { e.target.style.borderColor = "rgba(16,185,129,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Service of interest</label>
                      <select name="service" value={form.service} onChange={handleChange} required
                        style={{ ...inputStyle, appearance: "none" as const, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: 16 }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(16,185,129,0.5)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
                      >
                        <option value="" style={{ background: "#111111" }}>Select a service...</option>
                        {SERVICES.map((s) => <option key={s} style={{ background: "#111111" }}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6b7280", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Your message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required
                        rows={5} placeholder="Tell us about your business and what you need help with..."
                        style={{ ...inputStyle, resize: "none" }}
                        onFocus={(e) => { e.target.style.borderColor = "rgba(16,185,129,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(16,185,129,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    <button type="submit" disabled={loading}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        color: "white", fontWeight: 700, fontSize: 16,
                        padding: "15px 28px", borderRadius: 12, border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        opacity: loading ? 0.7 : 1,
                        boxShadow: "0 4px 18px rgba(16,185,129,0.35)",
                        transition: "all 0.25s ease",
                        fontFamily: "'Space Grotesk', sans-serif",
                        width: "100%",
                      }}
                    >
                      {loading ? "Sending..." : "Send message"}
                      <Send style={{ width: 16, height: 16 }} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
