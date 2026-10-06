import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Database,
  Workflow,
  Cpu,
  Mail,
  ExternalLink,
  ChevronRight,
  Clock,
  Zap,
  Globe,
  Radio,
  Eye,
  Check,
  BarChart3,
  TrendingUp,
  Server,
  Lock
} from "lucide-react";

/**
 * =========================================================================
 * CLUMCY.COM - ENTERPRISE ORCHESTRATION PLATFORM
 * =========================================================================
 * TRUE / FALSE MODE FLAG:
 * - `true`  = Displays the sleek Coming Soon / VIP Early Access landing page
 * - `false` = Displays the complete Live Platform Showcase
 *
 * You can also click the interactive True / False toggle button in the header!
 * =========================================================================
 */
export const DEFAULT_COMING_SOON = true;

export default function App() {
  const [isComingSoon, setIsComingSoon] = useState<boolean>(DEFAULT_COMING_SOON);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Enterprise Leader");
  const [submitted, setSubmitted] = useState(false);

  // Countdown timer for public launch
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 36,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev: { days: number; hours: number; minutes: number; seconds: number }) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  const integrations = [
    { name: "SAP S/4HANA", tag: "ERP", color: "#0070F3" },
    { name: "Oracle Cloud", tag: "ERP", color: "#F80000" },
    { name: "Salesforce CRM", tag: "CRM", color: "#00A1E0" },
    { name: "Workday", tag: "HCM", color: "#FF6200" },
    { name: "NetSuite", tag: "ERP", color: "#007ACC" },
    { name: "HubSpot", tag: "GTM", color: "#FF7A59" },
    { name: "Zoho Suite", tag: "Operations", color: "#059669" },
  ];

  return (
    <div className="relative min-h-screen bg-[#07050f] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full bg-gradient-to-b from-purple-600/25 via-indigo-600/15 to-transparent blur-[120px]" />
        <div className="absolute top-1/3 -left-48 h-[400px] w-[500px] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute bottom-10 -right-48 h-[450px] w-[550px] rounded-full bg-fuchsia-600/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Top Header with TRUE / FALSE Switcher */}
      <header className="relative z-40 border-b border-purple-500/15 bg-[#07050f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dzprmnlxn/image/upload/v1781946920/Cortex_bProduct_Label-removebg-preview_1_pdkgtk.png"
              alt="Clumcy Logo"
              className="h-8 w-auto object-contain brightness-110 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]"
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-300">
              <Globe className="h-3 w-3 text-purple-400" />
              clumcy.com
            </span>
          </div>

          {/* TRUE / FALSE SWITCH BUTTON */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-purple-500/30 bg-purple-950/40 p-1 backdrop-blur shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <button
                type="button"
                onClick={() => setIsComingSoon(true)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  isComingSoon
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.5)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Clock className="h-3 w-3" />
                Coming Soon
              </button>

              <button
                type="button"
                onClick={() => setIsComingSoon(false)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  !isComingSoon
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.5)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Eye className="h-3 w-3" />
                Live Platform
              </button>
            </div>

            {/* Quick True/False Pill Toggle */}
            <button
              onClick={() => setIsComingSoon(!isComingSoon)}
              title="Click to toggle True/False mode"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-pointer"
            >
              <span className="text-[11px] text-slate-400">Mode Flag:</span>
              <span
                className={`inline-flex items-center gap-1 font-mono font-bold ${
                  isComingSoon ? "text-emerald-400" : "text-amber-400"
                }`}
              >
                {isComingSoon ? "true (Coming Soon)" : "false (Live Site)"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* VIEW 1: COMING SOON MODE (isComingSoon === true) */}
      {isComingSoon ? (
        <main className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Status Chip */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300 shadow-[0_0_24px_rgba(168,85,247,0.2)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Domain Verified: <strong className="text-white">clumcy.com</strong></span>
              <span className="text-purple-400/60">•</span>
              <span className="text-purple-200">Private Enterprise Beta Launching Soon</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-white max-w-4xl mx-auto leading-[1.08]">
              The Enterprise Orchestration Layer Is{" "}
              <span
                className="italic font-normal font-serif px-1 inline-block"
                style={{
                  background: "linear-gradient(135deg, #c084fc 20%, #e879f9 70%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Coming Soon.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300/85 leading-relaxed">
              Clumcy harmonizes your disconnected systems—<strong>SAP, Oracle, NetSuite, Salesforce & Workday</strong>—into a single autonomous dashboard with real-time root cause intelligence.
              Zero data warehouse setup. Zero rip-and-replace.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-4 gap-3 sm:gap-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 sm:p-6 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINUTES", value: timeLeft.minutes },
                { label: "SECONDS", value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center min-w-[60px] sm:min-w-[84px]">
                  <span className="text-2xl sm:text-4xl font-bold font-mono tracking-tight text-white">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple-300/70 mt-1">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Early Access Waitlist Form */}
          <div className="mt-10 mx-auto max-w-xl">
            <div className="relative rounded-3xl border border-purple-500/25 bg-gradient-to-b from-purple-900/30 via-slate-900/50 to-purple-950/20 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="text-center mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 mb-1">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                  VIP Priority Waitlist
                </span>
                <h3 className="text-xl font-bold text-white">Join the Clumcy Founders' Circle</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Be the first to orchestrate your enterprise stack. Priority applicants receive 6 months of complimentary neural connector licenses upon launch.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">You're on the priority list!</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Spot confirmed for <span className="font-mono text-emerald-300 font-semibold">{email}</span>. Our deployment team will deliver private tenant credentials prior to public launch.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-medium text-purple-300 hover:text-purple-200 underline"
                  >
                    Register another company email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/60" />
                      <input
                        type="email"
                        required
                        placeholder="work-email@company.com"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-purple-500/20 bg-purple-950/40 pl-10 pr-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                      />
                    </div>

                    <select
                      value={role}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
                      className="rounded-xl border border-purple-500/20 bg-[#120d2b] px-3 py-3 text-xs sm:text-sm text-slate-200 outline-none focus:border-purple-400"
                    >
                      <option value="Enterprise Leader">VP / C-Level</option>
                      <option value="IT Director">IT / Systems Director</option>
                      <option value="Ops Lead">Operations Lead</option>
                      <option value="Software Engineer">Engineering / Architect</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(147,51,234,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>Request Priority Access for clumcy.com</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-purple-400" /> SOC2 Type II Ready
                    </span>
                    <span>Zero spam • Instant invite</span>
                    <span className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-amber-400" /> 140+ Waitlisted
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Supported Integrations Grid */}
          <div className="mt-16 text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-purple-300/70 mb-5">
              Plug-and-play connectors for enterprise tech stacks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 backdrop-blur transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.08]"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {item.name}
                  </span>
                  <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-mono text-purple-300/80">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Core Architecture Pillars */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-purple-500/15 bg-purple-950/15 p-6 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Zero Database Setup</h4>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                No Snowflake, BigQuery, or manual ETL builds. Clumcy queries pre-built software adapters with zero ongoing maintenance.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/15 bg-purple-950/15 p-6 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 mb-4">
                <Workflow className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Root Cause Intelligence</h4>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                When sales velocity dips, Clumcy correlates upstream ERP fulfillment bottlenecks and CRM pipeline freezes automatically.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/15 bg-purple-950/15 p-6 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600/20 text-fuchsia-400 mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Multi-Cadence Sync</h4>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                Daily operational pulses, weekly departmental velocity, monthly P&L close reconciliation, and board-level forecasting.
              </p>
            </div>
          </div>
        </main>
      ) : (
        /* VIEW 2: FULL LIVE PLATFORM SHOWCASE (isComingSoon === false) */
        <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
          {/* Header Banner */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center mb-10 backdrop-blur">
            <span className="text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Live Platform Preview Active • Mode Flag set to <strong>false</strong>
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold text-purple-300 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Clumcy Enterprise Orchestration
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Connect your fragmented tools into{" "}
              <span
                className="italic font-serif"
                style={{
                  background: "linear-gradient(135deg, #c084fc 20%, #e879f9 70%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                one intelligent brain
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Automated cross-department root cause detection across ERP, CRM, and HR. Stop digging through disconnected silos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => alert("Connecting to enterprise demo environment...")}
                className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:opacity-95 transition"
              >
                Request Enterprise Demo
              </button>
              <button
                onClick={() => setIsComingSoon(true)}
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
              >
                Return to Coming Soon Teaser
              </button>
            </div>
          </div>

          {/* Interactive Feature Matrix */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <BarChart3 className="h-8 w-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Cross-Department Pulses</h3>
              <p className="text-sm text-slate-400">
                Track revenue, pipeline leakage, and procurement velocity in unified timelines with sub-second queries.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Server className="h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Zero-ETL Architecture</h3>
              <p className="text-sm text-slate-400">
                Direct secure API bridges into SAP, Oracle, and Salesforce with SOC2 Type II compliance guarantees.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <Lock className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-sm text-slate-400">
                End-to-end encrypted tenant isolation, SSO/SAML integration, and granular role-based access control.
              </p>
            </div>
          </div>
        </main>
      )}

      {/* Floating Toggle Helper */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsComingSoon(!isComingSoon)}
          className="flex items-center gap-2 rounded-full border border-purple-500/40 bg-[#090717]/90 px-4 py-2.5 text-xs font-semibold text-purple-200 shadow-[0_4px_24px_rgba(147,51,234,0.35)] backdrop-blur-md hover:bg-purple-950 hover:text-white transition-all hover:scale-105 cursor-pointer"
        >
          <Clock className="h-3.5 w-3.5 text-purple-400" />
          <span>Switch Mode: {isComingSoon ? "Live Platform" : "Coming Soon"}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-500/10 bg-[#05030b] py-8 text-center text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between px-6 gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <span>© {new Date().getFullYear()} Clumcy, Inc.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>clumcy.com</span>
            <span>•</span>
            <span>Enterprise Orchestration</span>
            <span>•</span>
            <a href="mailto:founders@clumcy.com" className="hover:text-purple-300 transition">
              founders@clumcy.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
