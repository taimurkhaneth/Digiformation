'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { label: "UK LTD",          href: "/ltd-formation-services" },
  { label: "US LLC",          href: "/llc-formation-services" },
  { label: "South Africa",    href: "/south-africa-company-formation" },
  { label: "Shelf Companies", href: "/uk-shelf-companies" },
  { label: "Banking",         href: "/banks-payment-solutions" },
  { label: "Web Dev",         href: "/web-development" },
];

export function SiteNav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { if (!isMobile) setMobileOpen(false); }, [isMobile]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.6)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: 70, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg, #71717a, #a1a1aa)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(113,113,122,0.4)",
              }}
            >
              <Building2 style={{ color: "white", width: 18, height: 18 }} />
            </motion.div>
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 800,
              fontSize: 20, color: "#ffffff", letterSpacing: "-0.04em",
            }}>
              Digi<span style={{ color: "#71717a" }}>formation</span>
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}>
              {NAV.map((item) => (
                <Link key={item.label} href={item.href}
                  style={{
                    padding: "8px 16px", borderRadius: 8,
                    fontSize: 14, fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#d1d5db", transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#71717a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <Link href="/contact"
                style={{
                  fontSize: 13, fontWeight: 600, color: "#9ca3af",
                  padding: "8px 14px", borderRadius: 8,
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                Contact
              </Link>
              <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14, whiteSpace: "nowrap" }}>
                Book Free Consultation
                <ArrowRight style={{ width: 15, height: 15 }} />
              </Link>
            </div>
          )}

          {/* Hamburger */}
          {isMobile && (
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: 8, borderRadius: 10,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                cursor: "pointer", color: "#ffffff",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.div key="x"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
                    ><X style={{ width: 22, height: 22 }} /></motion.div>
                  : <motion.div key="m"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
                    ><Menu style={{ width: 22, height: 22 }} /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed", top: 70, left: 0, right: 0, zIndex: 49,
              background: "#0d0d0d",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.7)",
              padding: "20px 24px 32px",
            }}
          >
            <div style={{
              height: 2,
              background: "linear-gradient(90deg, #71717a, rgba(113,113,122,0.2), transparent)",
              position: "absolute", top: 0, left: 0, right: 0,
            }} />

            {NAV.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link href={item.href} onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "16px 0", fontSize: 17, fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif", color: "#ffffff",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.label}
                  <ArrowRight style={{ width: 16, height: 16, color: "#71717a" }} />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}
            >
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ textAlign: "center", justifyContent: "center", padding: "15px", fontSize: 15 }}
              >
                Book Free Consultation
                <ArrowRight style={{ width: 17, height: 17 }} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
