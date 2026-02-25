'use client';

import React from "react";
import Link from "next/link";
import { Building2, Mail, Phone, MapPin, Instagram, Zap, Facebook, Youtube, AtSign } from "lucide-react";

const SERVICES = [
  { label: "UK LTD Formation", href: "/ltd-formation-services" },
  { label: "US LLC Formation", href: "/llc-formation-services" },
  { label: "UK Shelf Companies", href: "/uk-shelf-companies" },
  { label: "Banking & Payments", href: "/banks-payment-solutions" },
  { label: "Web Development", href: "#" },
];

const COMPANY = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579301672673&rdid=Cc9i3maJNLvbAbSq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D676UBQw5%2F#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/digiformationltd?igsh=ejBoMmFsOXFpMmdw", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@digiformationltd?si=wy_K54l1UISmVHJI", label: "YouTube" },
  { icon: AtSign, href: "https://www.threads.com/@digiformationltd?invite=0", label: "Threads" },
];

export function Footer() {
  return (
    <footer style={{
      background: "#080808",
      color: "#9ca3af",
      fontFamily: "'Space Grotesk', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top emerald divider */}
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), rgba(16,185,129,0.3), transparent)",
      }} />

      {/* Subtle background glow */}
      <div style={{
        position: "absolute", top: 0, left: "30%",
        width: 600, height: 300,
        background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48,
          paddingBottom: 64,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, textDecoration: "none" }}>
              <div style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg, #10b981, #059669)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(16,185,129,0.3)",
              }}>
                <Building2 style={{ color: "white", width: 18, height: 18 }} />
              </div>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800, fontSize: 19,
                color: "#ffffff", letterSpacing: "-0.04em",
              }}>
                Digi<span style={{ color: "#10b981" }}>formation</span>
              </span>
            </Link>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#6b7280", marginBottom: 24 }}>
              Premium UK & US company formation services for global entrepreneurs. Fast, compliant, transparent.
            </p>

            {/* Trust badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 8, padding: "8px 12px", marginBottom: 24,
            }}>
              <div style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", animation: "pulse-dot 2s infinite" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#10b981", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                All services operational
              </span>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#6b7280", transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(16,185,129,0.12)";
                    e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
                    e.currentTarget.style.color = "#10b981";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#6b7280";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon style={{ width: 15, height: 15 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Outfit', sans-serif",
              color: "#ffffff", fontWeight: 800, fontSize: 13,
              letterSpacing: "0.06em", textTransform: "uppercase",
              marginBottom: 24, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 2, background: "#10b981", borderRadius: 99, display: "inline-block" }} />
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}
                    style={{
                      fontSize: 14, color: "#6b7280",
                      display: "flex", alignItems: "center", gap: 6,
                      transition: "all 0.2s ease", fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#10b981";
                      e.currentTarget.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6b7280";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: "'Outfit', sans-serif",
              color: "#ffffff", fontWeight: 800, fontSize: 13,
              letterSpacing: "0.06em", textTransform: "uppercase",
              marginBottom: 24, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 2, background: "#10b981", borderRadius: 99, display: "inline-block" }} />
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link href={c.href}
                    style={{ fontSize: 14, color: "#6b7280", transition: "all 0.2s ease", fontWeight: 500 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#10b981";
                      e.currentTarget.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#6b7280";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Outfit', sans-serif",
              color: "#ffffff", fontWeight: 800, fontSize: 13,
              letterSpacing: "0.06em", textTransform: "uppercase",
              marginBottom: 24, display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 16, height: 2, background: "#10b981", borderRadius: 99, display: "inline-block" }} />
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{
                  width: 32, height: 32,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <MapPin style={{ width: 14, height: 14, color: "#10b981" }} />
                </div>
                <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, marginTop: 4 }}>
                  71-75 Shelton St, Covent Garden,<br />London WC2H 9JQ, UK
                </span>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{
                  width: 32, height: 32,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Mail style={{ width: 14, height: 14, color: "#10b981" }} />
                </div>
                <a href="mailto:support@digiformation.uk"
                  style={{ fontSize: 13, color: "#6b7280", transition: "color 0.2s", fontWeight: 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#10b981")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
                >
                  support@digiformation.uk
                </a>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{
                  width: 32, height: 32,
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Phone style={{ width: 14, height: 14, color: "#10b981" }} />
                </div>
                <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>+92 316 4467464</span>
              </div>

              {/* Company registration */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 10, padding: "10px 14px", marginTop: 4,
              }}>
                <div style={{ fontSize: 11, color: "#4b5563", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 2 }}>
                  Company No.
                </div>
                <div style={{ fontSize: 13, color: "#9ca3af", fontWeight: 700 }}>16994903</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          marginBottom: 28,
        }} />
        <div style={{
          paddingBottom: 36,
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>
            © {new Date().getFullYear()} Digiformation Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Link href="#" style={{ fontSize: 12, color: "#374151", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#9ca3af")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >Privacy</Link>
            <Link href="#" style={{ fontSize: 12, color: "#374151", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#9ca3af")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
            >Terms</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Zap style={{ width: 12, height: 12, color: "#10b981" }} />
              <span style={{ fontSize: 12, color: "#374151", fontWeight: 600 }}>Made in London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
