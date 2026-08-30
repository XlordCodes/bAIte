import { useEffect, useRef, useState, type ReactElement } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router";

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function FireIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3c.5 3-2 4-2 6.5 0 1.4 1 2 1 2s-2.5-.3-2.5-3C6 10 5 12.4 5 14.5 5 18.6 8.1 21 12 21s7-2.4 7-6.5c0-3.6-2.7-6-4.2-8.2C13.4 4.6 12.6 3.7 12 3Z"
        fill="url(#fireG)"
      />
      <defs>
        <linearGradient id="fireG" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8ec5ff" />
          <stop offset="1" stopColor="#2f7bff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GemIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 3h12l3 5-9 13L3 8l3-5Z"
        fill="url(#gemG)"
        stroke="#cfe4ff"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <path d="M3 8h18M9 3l3 18M15 3l-3 18M8 3l-2 5M16 3l2 5" stroke="#eaf3ff" strokeWidth="0.5" opacity="0.7" />
      <defs>
        <linearGradient id="gemG" x1="12" y1="3" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a9d4ff" />
          <stop offset="1" stopColor="#3d86ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="10.5" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function AstralDiamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <defs>
        <radialGradient id="coreG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#e6f0ff" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <path
        d="M24 0 C25 15 33 23 48 24 C33 25 25 33 24 48 C23 33 15 25 0 24 C15 23 23 15 24 0 Z"
        fill="url(#coreG)"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m12 3 2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L12 16.9 6.6 19.7l1.2-6.1L3.2 9.4l6.2-.7L12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ChestIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="9" width="17" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17M3.5 11a5 5 0 0 1 5-5h7a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="10.5" y="11.5" width="3" height="4" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function DumbbellIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m3.5 11 8.5-7 8.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.5V20h12V9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BadgeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.7" />
      <path d="m8.5 14-1.5 7 5-2.5L17 21l-1.5-7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Data model ──────────────────────────────────────────────────────────── */

type NodeKind = "book" | "chest" | "dumbbell" | "star";

interface Unit {
  index: number;
  title: string;
  subtitle: string;
}

const units: Unit[] = [
  { index: 1, title: "Unit 1", subtitle: "Prompt like a pro" },
  { index: 2, title: "Unit 2", subtitle: "Neural Plumbing" },
  { index: 3, title: "Unit 3", subtitle: "Latent Space" },
  { index: 4, title: "Unit 4", subtitle: "Attention Mechanisms" },
  { index: 5, title: "Unit 5", subtitle: "Agentic Workflows" },
];

/* Elliptical rotary orbit — 5 nodes evenly spaced (72° apart) on an elongated
   track tilted into a diagonal 'X' with the light beam. After the track's
   rotateX(65°)·rotateZ(35°), viewer depth ∝ sin(θ+35°), which peaks at θ=55°,
   so the active START node lives there; the rest recede around the loop. Each
   node's apparent depth drives its scale and opacity. */
interface OrbitNode {
  label: string;
  angle: number; // local degrees around the track; 55° = front (nearest)
  active: boolean;
}

const orbitNodes: OrbitNode[] = [
  { label: "Prompt like a pro", angle: 55, active: true },
  { label: "Neural Plumbing", angle: 127, active: false },
  { label: "Latent Space", angle: 199, active: false },
  { label: "Attention Mechanisms", angle: 271, active: false },
  { label: "Agentic Workflows", angle: 343, active: false },
];

/* ─── Glassmorphism token ─────────────────────────────────────────────────── */

// Standard glass surface — applied uniformly to all neutral cards / surfaces.
const GLASS =
  "bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]";

// Blue-accent glass — for unlocked / active / highlighted surfaces.
const GLASS_ACCENT =
  "bg-[rgba(31,107,255,0.07)] backdrop-blur-[16px] border border-[#3d86ff]/40 shadow-[0_0_24px_rgba(61,134,255,0.22),inset_0_1px_0_rgba(255,255,255,0.08)]";

/* ─── LightBeam ───────────────────────────────────────────────────────────── */

function LightBeam() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Ambient cosmic wash — a broad, heavily diffused halo. */}
      <div
        className="absolute left-1/2 top-1/2 h-[380px] w-[960px] rounded-[50%]"
        style={{
          transform: "translate(-50%, -50%) rotate(-34deg)",
          filter: "blur(90px)",
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(180,160,255,0.4) 0%, rgba(150,120,255,0.16) 45%, transparent 78%)",
        }}
      />
      {/* Softly curved mid glow — bowed with a gentle border-radius so it reads
          as an arc of light rather than a straight slash. */}
      <div
        className="absolute left-1/2 top-1/2 h-[150px] w-[840px] rounded-[50%]"
        style={{
          transform: "translate(-50%, -50%) rotate(-36deg)",
          filter: "blur(48px)",
          background:
            "radial-gradient(ellipse 55% 100% at 50% 50%, rgba(226,214,255,0.6) 0%, rgba(200,185,255,0.25) 50%, transparent 80%)",
        }}
      />
      {/* Diffused core — no longer a hard laser; a soft luminous ribbon. */}
      <div
        className="absolute left-1/2 top-1/2 h-[46px] w-[640px] rounded-full"
        style={{
          transform: "translate(-50%, -50%) rotate(-36deg)",
          filter: "blur(30px)",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

/* ─── Neural cluster (3D elliptical rotary orbit) ─────────────────────────── */

// Each node is counter-rotated by the exact inverse of the track tilt so its
// icon / text stays upright and legible for the user.
const NODE_UPRIGHT = "rotateZ(-35deg) rotateX(-65deg)";
const NODE_BASE = 56;

function NeuralCluster({ onStart }: { onStart: () => void }) {
  return (
    // Master container — bounded to the viewport with generous side padding so
    // the elongated, diagonally-tilted ring never clips off screen.
    <div className="mx-auto w-full max-w-[100vw] px-6">
      <div
        className="relative mx-auto h-[400px] w-full max-w-[330px]"
        style={{ perspective: "1000px" }}
      >
        {/* Elongated, diagonally-tilted orbital track (taller than it is wide) */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full border border-white/35"
          style={{
            width: "85%",
            aspectRatio: "1 / 1.4",
            transformStyle: "preserve-3d",
            transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(35deg)",
            boxShadow:
              "0 0 40px rgba(150,190,255,0.14), inset 0 0 50px rgba(150,190,255,0.06)",
          }}
        >
          {/* Gravitational core — the light source, kept upright and centered */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(-50%, -50%) ${NODE_UPRIGHT}` }}
          >
            <span className="absolute inset-[-16px] rounded-full bg-[#cfe0ff] opacity-25 blur-3xl" />
            <AstralDiamond className="relative h-[88px] w-[88px] [filter:blur(1px)_drop-shadow(0_0_10px_white)_drop-shadow(0_0_40px_rgba(255,255,255,0.6))]" />
          </div>

          {/* Orbiting nodes — positioned on the ellipse, then counter-rotated
              upright. Depth is derived from the tilt so nearer nodes are larger
              and brighter. */}
          {orbitNodes.map((node, i) => {
            const a = (node.angle * Math.PI) / 180;
            const left = `${50 + 50 * Math.cos(a)}%`;
            const top = `${50 + 50 * Math.sin(a)}%`;
            // Post-tilt viewer depth ∝ sin(θ + 35°), range ±1.
            const depth = (Math.sin(a + (35 * Math.PI) / 180) + 1) / 2;
            const scale = node.active ? 1.2 : 0.72 + depth * 0.38;
            const opacity = node.active ? 1 : 0.72 + depth * 0.28;

            if (node.active) {
              return (
                <button
                  key={i}
                  onClick={onStart}
                  className="absolute grid place-items-center rounded-full bg-white text-black transition-transform duration-200"
                  style={{
                    left,
                    top,
                    width: NODE_BASE,
                    height: NODE_BASE,
                    transform: `translate(-50%, -50%) ${NODE_UPRIGHT} scale(${scale})`,
                    boxShadow:
                      "0 0 24px rgba(255,255,255,0.75), 0 0 48px rgba(150,200,255,0.5), 0 8px 24px rgba(0,0,0,0.5)",
                    border: "2px solid rgba(255,255,255,0.9)",
                  }}
                  aria-label="Start lesson: Prompt like a pro"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em]">
                    Start
                  </span>
                </button>
              );
            }

            return (
              <button
                key={i}
                disabled
                className="absolute grid place-items-center rounded-full border border-white/30 bg-white/[0.12] shadow-[0_0_18px_rgba(150,190,255,0.35),inset_0_1px_0_rgba(255,255,255,0.18)]"
                style={{
                  left,
                  top,
                  width: NODE_BASE,
                  height: NODE_BASE,
                  opacity,
                  transform: `translate(-50%, -50%) ${NODE_UPRIGHT} scale(${scale})`,
                }}
                aria-label={`Locked: ${node.label}`}
              >
                <LockIcon className="h-[20px] w-[20px] text-white/80" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Unit dropdown ───────────────────────────────────────────────────────── */

function UnitDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(units[0]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative mx-auto mb-8 w-full max-w-[320px]">
      <button
        ref={triggerRef}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${GLASS} flex w-full items-center justify-between rounded-full px-5 py-3.5 transition-colors duration-200 hover:border-white/[0.14]`}
      >
        <span className="text-[15px] font-semibold text-white">
          <span className="text-[#7db4ff]">{selected.title}:</span>{" "}
          {selected.subtitle}
        </span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-white/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select unit"
          className={`${GLASS} absolute inset-x-0 top-[calc(100%+6px)] z-20 rounded-[22px] p-1.5`}
        >
          {units.map((u) => {
            const isSelected = selected.index === u.index;
            return (
              <li key={u.index} role="option" aria-selected={isSelected}>
                <button
                  onClick={() => {
                    setSelected(u);
                    setOpen(false);
                    triggerRef.current?.focus();
                  }}
                  className={[
                    "w-full rounded-[15px] px-4 py-2.5 text-left text-[14px] font-medium transition-colors duration-200",
                    isSelected
                      ? "bg-white/[0.07] text-white"
                      : "text-white/60 hover:text-white/85",
                  ].join(" ")}
                >
                  <span className="font-semibold text-[#7db4ff]">{u.title}:</span>{" "}
                  {u.subtitle}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ─── Shared small UI ─────────────────────────────────────────────────────── */

function StatPill({ icon, value }: { icon: ReactElement; value: string }) {
  return (
    <div className={`${GLASS} flex items-center gap-1.5 rounded-full px-3.5 py-2`}>
      {icon}
      <span className="text-[15px] font-bold text-white">{value}</span>
    </div>
  );
}

function Hud() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 pt-11">
      <div className="text-[20px] font-extrabold tracking-tight text-white">
        b<span className="text-[#5ea0ff]">AI</span>te
      </div>
      <div className="flex items-center gap-2">
        <StatPill icon={<FireIcon className="h-[18px] w-[18px]" />} value="45" />
        <StatPill icon={<GemIcon className="h-[18px] w-[18px]" />} value="340" />
      </div>
    </div>
  );
}

function ScreenTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="pt-14">
      <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7db4ff]">{eyebrow}</div>
      <h1 className="mt-1 text-[28px] font-extrabold tracking-tight text-white">{title}</h1>
    </div>
  );
}

/* ─── Bottom dock ─────────────────────────────────────────────────────────── */

const navItems = [
  { label: "Journey", path: "/", icon: HomeIcon },
  { label: "Codex", path: "/codex", icon: BadgeIcon },
  { label: "Profile", path: "/profile", icon: UserIcon },
];

function BottomDock() {
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center pb-6"
    >
      <div
        className={`${GLASS} pointer-events-auto flex items-center gap-2 rounded-full px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.1)]`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === "/"}
              aria-label={item.label}
              className={({ isActive }) =>
                [
                  "grid h-11 w-11 place-items-center rounded-full transition-[color,background-color,box-shadow] duration-200",
                  isActive
                    ? "bg-white/[0.09] text-white shadow-[0_0_16px_rgba(150,200,255,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]"
                    : "text-white/55 hover:text-white/80",
                ].join(" ")
              }
            >
              <Icon className="h-[22px] w-[22px]" />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── Journey view ────────────────────────────────────────────────────────── */

function JourneyView() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full">
      <LightBeam />
      <Hud />
      <div className="relative z-10 flex h-full flex-col px-6 pt-28 pb-40">
        <UnitDropdown />
        <div className="flex flex-1 items-center justify-center">
          <NeuralCluster onStart={() => navigate("/lesson")} />
        </div>
      </div>
    </div>
  );
}

/* ─── Lesson view ─────────────────────────────────────────────────────────── */

function LessonView() {
  const navigate = useNavigate();
  const [temp, setTemp] = useState(0.8);
  const [choice, setChoice] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  const choices = [
    "The model cites a source that does not exist",
    "The model responds slightly slower than usual",
    "The model asks a clarifying question",
  ];

  function complete() {
    setCelebrate(true);
    setTimeout(() => navigate("/"), 1100);
  }

  return (
    <div className="relative flex h-full flex-col">
      <LightBeam />

      {/* Progress bar + close */}
      <div className="relative z-10 flex items-center gap-3 px-5 pt-12">
        <div className="flex flex-1 gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              <div
                className={
                  i <= 1
                    ? "h-full rounded-full bg-[#3d86ff] shadow-[0_0_10px_rgba(61,134,255,0.8)]"
                    : "h-full"
                }
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate("/")}
          className={`${GLASS} grid h-9 w-9 place-items-center rounded-full text-white/65`}
          aria-label="Close lesson"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="scroll-area relative z-10 flex-1 overflow-y-auto px-5 pt-8">
        <h1 className="text-[34px] font-extrabold tracking-tight text-white">Temperature</h1>

        {/* Concept card */}
        <div className={`${GLASS} mt-4 rounded-[28px] p-6`}>
          <p className="text-[15px] leading-relaxed text-white/65">
            Controls AI randomness. Low = predictable; High = creative.
          </p>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[13px] font-semibold">
              <span className="text-white/60">0.0</span>
              <span className="rounded-full bg-[#3d86ff]/15 px-2.5 py-0.5 text-[#8ec5ff] tabular-nums">
                {temp.toFixed(1)}
              </span>
              <span className="text-white/60">1.0</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={temp}
              onChange={(e) => setTemp(parseFloat(e.target.value))}
              className="baite-range w-full"
              style={{ ["--val" as string]: `${temp * 100}%` }}
              aria-label="Temperature"
              aria-valuetext={temp.toFixed(1)}
            />
          </div>
        </div>

        {/* Quiz */}
        <div className="mt-7">
          <div className="text-[17px] font-bold text-white">Identify the Hallucination</div>
          <div className="mt-3 flex flex-col gap-3">
            {choices.map((c, i) => {
              const selected = choice === i;
              return (
                <button
                  key={i}
                  onClick={() => setChoice(i)}
                  className={[
                    "w-full rounded-full border px-5 py-4 text-left text-[14px] font-medium backdrop-blur-[16px] transition-[color,border-color,background-color,box-shadow] duration-200",
                    selected
                      ? "border-[#3d86ff] bg-[rgba(61,134,255,0.15)] text-white shadow-[0_0_20px_rgba(61,134,255,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
                      : "border-white/[0.08] bg-white/[0.03] text-white/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/[0.15]",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 px-5 pb-8 pt-4">
        <button
          onClick={complete}
          disabled={choice === null}
          className="w-full rounded-full bg-white py-4 text-[15px] font-extrabold uppercase tracking-[0.14em] text-black shadow-[0_0_40px_rgba(150,200,255,0.55)] transition-[transform,opacity,box-shadow] duration-200 enabled:motion-safe:hover:scale-[1.01] disabled:opacity-25 disabled:shadow-none"
        >
          Neutralize &amp; Continue
        </button>
      </div>

      {celebrate && <Celebration />}
    </div>
  );
}

function Celebration() {
  const pieces = Array.from({ length: 18 });
  const colors = ["#3d86ff", "#8ec5ff", "#ffffff", "#5ea0ff"];
  return (
    <div className="pointer-events-none absolute inset-0 z-50 grid place-items-center overflow-hidden">
      <div className="baite-flash absolute inset-0 animate-[flash_1.1s_ease-out] bg-[radial-gradient(circle_at_center,rgba(61,134,255,0.5),transparent_60%)]" />
      {pieces.map((_, i) => {
        const angle = (i / pieces.length) * Math.PI * 2;
        const dist = 120 + (i % 5) * 26;
        return (
          <span
            key={i}
            className="baite-burst absolute h-2.5 w-2.5 animate-[burst_1s_ease-out_forwards] rounded-full"
            style={{
              backgroundColor: colors[i % colors.length],
              ["--tx" as string]: `${Math.cos(angle) * dist}px`,
              ["--ty" as string]: `${Math.sin(angle) * dist}px`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Codex view ──────────────────────────────────────────────────────────── */

function CodexView() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "LLMs", "Vision", "Agents"];

  const cards = [
    { name: "LoRA", desc: "Low-rank fine-tuning", unlocked: true, cat: "LLMs" },
    { name: "RAG", desc: "Retrieval-augmented gen", unlocked: true, cat: "Agents" },
    { name: "Temperature", desc: "Sampling randomness", unlocked: true, cat: "LLMs" },
    { name: "Tokenization", desc: "Text-to-token mapping", unlocked: true, cat: "LLMs" },
    { name: "Attention", desc: "Transformer heads", unlocked: false, cat: "LLMs" },
    { name: "Diffusion", desc: "Denoising models", unlocked: false, cat: "Vision" },
    { name: "Quantization", desc: "Weight compression", unlocked: false, cat: "Vision" },
    { name: "MoE", desc: "Mixture of Experts", unlocked: false, cat: "LLMs" },
    { name: "Zero-Shot", desc: "No-example inference", unlocked: false, cat: "Agents" },
    { name: "Vector DB", desc: "Embedding similarity", unlocked: false, cat: "Agents" },
  ];

  const visibleCards =
    filter === "All" ? cards : cards.filter((c) => c.cat === filter);

  return (
    <div className="relative h-full">
      <LightBeam />
      <div className="scroll-area relative z-10 h-full overflow-y-auto px-6 pb-40">
        <ScreenTitle eyebrow="Codex" title="Glossary" />

        {/* Filter chips */}
        <div className="scroll-area -mx-6 mt-5 flex gap-2 overflow-x-auto px-6 pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={[
                "shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold backdrop-blur-[16px] transition-[color,border-color,background-color,box-shadow] duration-200",
                filter === f
                  ? "border border-[#3d86ff]/50 bg-[rgba(61,134,255,0.15)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : `${GLASS} text-white/60`,
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        {visibleCards.length === 0 ? (
          <div className={`${GLASS} mt-5 rounded-[26px] p-8 text-center`}>
            <div className="text-[15px] font-bold text-white">No terms in {filter} yet</div>
            <p className="mt-1 text-[13px] text-white/60">New cards unlock as you clear units.</p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 rounded-full border border-white/[0.14] px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:border-white/30"
            >
              Show all terms
            </button>
          </div>
        ) : (
        /* 2-column card grid */
        <div className="mt-5 grid grid-cols-2 gap-3">
          {visibleCards.map((c) => (
            <div
              key={c.name}
              className={[
                "relative flex aspect-square flex-col justify-between rounded-[26px] p-4",
                c.unlocked
                  ? GLASS_ACCENT
                  : `${GLASS} opacity-55`,
              ].join(" ")}
            >
              {!c.unlocked && (
                <div className="absolute right-4 top-4 text-white/35">
                  <LockIcon className="h-[18px] w-[18px]" />
                </div>
              )}
              <div className={c.unlocked ? "text-[#8ec5ff]" : "text-white/25"}>
                <BadgeIcon className="h-7 w-7" />
              </div>
              <div>
                <div className={["text-[17px] font-extrabold", c.unlocked ? "text-white" : "text-white/45"].join(" ")}>
                  {c.name}
                </div>
                <div className="mt-0.5 text-[11px] text-white/60">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

/* ─── Profile view ────────────────────────────────────────────────────────── */

function ProfileView() {
  const stats = [
    { label: "Streak", value: "45 Days", accent: true },
    { label: "Mastered", value: "112", accent: false },
    { label: "Accuracy", value: "98%", accent: false },
    { label: "Units Cleared", value: "4", accent: false },
  ];

  return (
    <div className="relative h-full">
      <LightBeam />
      <div className="scroll-area relative z-10 h-full overflow-y-auto px-6 pb-40">
        <div className="flex flex-col items-center pt-16">
          {/* Eclipse halo avatar */}
          <div className="relative grid h-28 w-28 place-items-center rounded-full">
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 0deg, transparent 130deg, #3d86ff 200deg, #8ec5ff 225deg, transparent 290deg, transparent 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1.5px))",
              }}
            />
            <span
              className={`${GLASS} relative z-10 grid h-[104px] w-[104px] place-items-center rounded-full text-white/65`}
            >
              <UserIcon className="h-12 w-12" />
            </span>
          </div>
          <div className="mt-4 text-[22px] font-extrabold text-white">Architecture Lead</div>
          <div className="text-[13px] text-white/60">@baite.architect</div>
        </div>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={[
                "flex aspect-square flex-col justify-center rounded-[26px] p-5",
                s.accent ? GLASS_ACCENT : GLASS,
              ].join(" ")}
            >
              <div
                className={[
                  "text-[32px] font-extrabold leading-none",
                  s.accent ? "text-[#8ec5ff]" : "text-white",
                ].join(" ")}
              >
                {s.value}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Export button */}
        <button
          className={`${GLASS_ACCENT} mt-6 w-full rounded-full py-4 text-[15px] font-extrabold uppercase tracking-[0.12em] text-[#cfe4ff] transition-[background-color] duration-200 hover:bg-[rgba(31,107,255,0.12)]`}
        >
          Export Victory Card
        </button>
      </div>
    </div>
  );
}

/* ─── Shell + router ──────────────────────────────────────────────────────── */

function Shell() {
  const { pathname } = useLocation();
  const showDock = pathname !== "/lesson";
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#080808] p-4 sm:p-8">
      <div className="relative h-[812px] w-[375px] max-h-full overflow-hidden rounded-[54px] border-[10px] border-[#1c1c1e] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.85)]">
        <div className="absolute left-1/2 top-0 z-40 h-7 w-40 -translate-x-1/2 rounded-b-[18px] bg-black" />
        <Outlet />
        {showDock && <BottomDock />}
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Shell,
    children: [
      { index: true, Component: JourneyView },
      { path: "lesson", Component: LessonView },
      { path: "codex", Component: CodexView },
      { path: "profile", Component: ProfileView },
      { path: "*", Component: JourneyView },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
