'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Building2, ArrowRight, CheckCircle2, TrendingUp, Zap, Layers, Filter } from "lucide-react";
import { supabase } from "@/lib/supabase";

const MOCK_COMPANIES = [
  { id: 1, name: "Alpha Global Logistics Ltd", age: "3 Years", price: 850, vat_registered: true, sic_code: "52290" },
  { id: 2, name: "Zenith Trading Solutions Ltd", age: "2 Years", price: 650, vat_registered: false, sic_code: "46190" },
  { id: 3, name: "Emerald Compliance Partners Ltd", age: "5 Years", price: 1200, vat_registered: true, sic_code: "70229" },
  { id: 4, name: "Orion Tech Services Ltd", age: "New", price: 299, vat_registered: false, sic_code: "62012" },
  { id: 5, name: "Vanguard Industries Ltd", age: "1 Year", price: 450, vat_registered: true, sic_code: "46900" },
  { id: 6, name: "Nexus Digital Ventures Ltd", age: "4 Years", price: 950, vat_registered: true, sic_code: "62090" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
};

const BENEFITS = [
  { icon: TrendingUp, label: "Established credibility", desc: "Companies with years of history inspire trust in banks and clients." },
  { icon: CheckCircle2, label: "Immediately usable", desc: "Acquisition complete within 24 hours. Bank account ready to open." },
  { icon: Building2, label: "Clean history", desc: "No financial obligations, CCJs, or previous trading activity." },
];

export default function ShelfCompanies() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [vatFilter, setVatFilter] = useState<"all" | "vat" | "standard">("all");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const { data } = await supabase.from("shelf_companies").select("*");
        setCompanies(data && data.length > 0 ? data : MOCK_COMPANIES);
      } catch {
        setCompanies(MOCK_COMPANIES);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = companies.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchVat = vatFilter === "all" || (vatFilter === "vat" ? c.vat_registered : !c.vat_registered);
    return matchSearch && matchVat;
  });

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
          background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)",
          filter: "blur(60px)", borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>


          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="section-label" style={{ marginBottom: 24, display: "inline-block" }}>
              Ready-Made UK Companies
            </span>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(38px, 6vw, 70px)", fontWeight: 800,
              letterSpacing: "-0.045em", color: "#ffffff", lineHeight: 1.05, marginBottom: 22, maxWidth: 720,
            }}>
              Acquire a UK Shelf{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981, #34d399)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Company</span>
            </h1>
            <p style={{ fontSize: 18, color: "#9ca3af", maxWidth: 540, lineHeight: 1.7, marginBottom: 40 }}>
              Ready-made UK limited companies with established history. Instant credibility, immediate operations.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#listings" className="btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Browse Companies <ArrowRight style={{ width: 17, height: 17 }} />
              </a>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: 16, padding: "14px 28px" }}>
                Request Private Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS */}
      <section style={{ padding: "0 24px 72px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}>
            {BENEFITS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                style={{
                  background: "#111111", borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.07)", padding: "28px 24px",
                  display: "flex", alignItems: "flex-start", gap: 16,
                }}
              >
                <div style={{
                  width: 48, height: 48,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 14,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <item.icon style={{ width: 22, height: 22, color: "#10b981" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 15, color: "#ffffff", marginBottom: 7 }}>{item.label}</div>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH & FILTER BAR */}
      <div id="listings" style={{
        position: "sticky", top: 70, zIndex: 30,
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "16px 24px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center",
        }}>
          {/* Search */}
          <div style={{ position: "relative", flexGrow: 1, minWidth: 200 }}>
            <Search style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: "#6b7280", pointerEvents: "none" }} />
            <input
              type="text" placeholder="Search companies..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%", paddingLeft: 38, paddingRight: 16, paddingTop: 10, paddingBottom: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, fontSize: 13, color: "#ffffff",
                fontFamily: "'Space Grotesk', sans-serif",
                outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(16,185,129,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          {/* Filter */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 4 }}>
              <Filter style={{ width: 14, height: 14, color: "#6b7280" }} />
              <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 600 }}>Filter:</span>
            </div>
            {(["all", "vat", "standard"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setVatFilter(v)}
                style={{
                  padding: "7px 14px", fontSize: 12, fontWeight: 700,
                  borderRadius: 8, border: "1px solid",
                  cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif",
                  transition: "all 0.2s ease",
                  background: vatFilter === v ? "rgba(16,185,129,0.15)" : "transparent",
                  borderColor: vatFilter === v ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.1)",
                  color: vatFilter === v ? "#10b981" : "#9ca3af",
                }}
              >
                {v === "all" ? "All" : v === "vat" ? "VAT Registered" : "Standard"}
              </button>
            ))}
          </div>

          <span style={{ fontSize: 12, color: "#4b5563", fontWeight: 600, whiteSpace: "nowrap", marginLeft: "auto" }}>
            {filtered.length} available
          </span>
        </div>
      </div>

      {/* ── COMPANY GRID */}
      <section style={{ padding: "48px 24px 100px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              {Array(6).fill(0).map((_, i) => (
                <div key={i} style={{
                  background: "#111111", borderRadius: 20, height: 220,
                  border: "1px solid rgba(255,255,255,0.05)",
                  animation: "pulse-dot 1.5s ease-in-out infinite",
                }} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
              <AnimatePresence>
                {filtered.map((c, i) => (
                  <motion.div
                    key={c.id} layout
                    variants={fadeUp}
                    initial="hidden" animate="visible" custom={i}
                    whileHover={{ y: -5 }}
                    style={{
                      background: "#111111", borderRadius: 20,
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "28px 24px",
                      transition: "all 0.3s ease",
                      position: "relative", overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 2,
                      background: "linear-gradient(90deg, #10b981, transparent)",
                    }} />

                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                      <div style={{
                        width: 44, height: 44,
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.2)",
                        borderRadius: 12,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Building2 style={{ width: 20, height: 20, color: "#10b981" }} />
                      </div>
                      {c.vat_registered && (
                        <span style={{
                          fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                          color: "#10b981",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.25)",
                          padding: "3px 8px", borderRadius: 99,
                        }}>VAT</span>
                      )}
                    </div>

                    <h3 style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800, fontSize: 14, color: "#ffffff",
                      lineHeight: 1.4, marginBottom: 16,
                    }}>{c.name}</h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                      {[["Age", c.age], ["SIC Code", c.sic_code]].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                          <span style={{ color: "#6b7280" }}>{k}</span>
                          <span style={{ color: "#d1d5db", fontWeight: 600, fontFamily: k === "SIC Code" ? "monospace" : "inherit" }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 800, color: "#ffffff" }}>£{c.price}</span>
                      <Link href="/contact"
                        style={{
                          display: "flex", alignItems: "center", gap: 5,
                          fontSize: 12, fontWeight: 700, color: "#10b981",
                          background: "rgba(16,185,129,0.1)",
                          border: "1px solid rgba(16,185,129,0.2)",
                          padding: "7px 14px", borderRadius: 8,
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(16,185,129,0.2)";
                          e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(16,185,129,0.1)";
                          e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
                        }}
                      >
                        Acquire <ArrowRight style={{ width: 13, height: 13 }} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{
                width: 64, height: 64,
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.15)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <Building2 style={{ width: 28, height: 28, color: "#374151" }} />
              </div>
              <p style={{ color: "#6b7280", fontWeight: 600, marginBottom: 16 }}>No companies match your search.</p>
              <button
                onClick={() => { setSearch(""); setVatFilter("all"); }}
                style={{ fontSize: 13, color: "#10b981", fontWeight: 700, background: "none", border: "none", cursor: "pointer" }}
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA */}
      <section style={{ padding: "0 24px 80px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              background: "linear-gradient(160deg, #0d1e15 0%, #091a11 100%)",
              borderRadius: 24, padding: "48px 40px",
              border: "1px solid rgba(16,185,129,0.2)",
              boxShadow: "0 0 60px rgba(16,185,129,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between",
              gap: 24, position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: -40, right: -40, width: 300, height: 200,
              background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
              filter: "blur(40px)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, color: "#ffffff", marginBottom: 8 }}>
                Can&apos;t find what you need?
              </h3>
              <p style={{ fontSize: 15, color: "#6b7280" }}>
                We have access to a private ledger of companies not listed here.
              </p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0, fontSize: 15, padding: "13px 26px" }}>
              Request Private Access <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
