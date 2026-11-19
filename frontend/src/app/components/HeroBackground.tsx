import React, { useMemo } from "react";

// Decorative pattern for the blue hero sections: zigzag lines running across, plus rings, dots, triangles,
// diamonds and plus signs in many sizes, spread evenly over the whole hero.
// Shapes are faint, and fainter still towards the middle, so text stays easy to read.
// To change the look: DENSITY (more or fewer shapes) and STRENGTH (how visible) below.
const W = 1440;
const H = 640;
const COLS = 14;
const ROWS = 6;
const DENSITY = 0.82; // 0 to 1: share of grid cells that get a shape
const STRENGTH = 1; // 0.5 = subtler, 1.5 = stronger

// small seeded random generator, so the pattern is the same every time
function seeded(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLORS = {
  white: "#FFFFFF",
  yellow: "#F4D03F",
  teal: "#6BB7A8",
  blue: "#7FB0F0",
};

function zigzag(y: number, amp: number, step: number, from = -40, to = W + 40) {
  const pts: string[] = [];
  let up = false;
  for (let x = from; x <= to; x += step) {
    pts.push(`${x},${up ? y - amp : y + amp}`);
    up = !up;
  }
  return pts.join(" ");
}

export default function HeroBackground() {
  const shapes = useMemo(() => {
    const rand = seeded(20261107);
    const cw = W / COLS;
    const ch = H / ROWS;
    const out: React.ReactNode[] = [];
    let key = 0;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (rand() > DENSITY) continue;
        const cx = (c + 0.5) * cw + (rand() - 0.5) * cw * 0.55;
        const cy = (r + 0.5) * ch + (rand() - 0.5) * ch * 0.55;
        const size = 7 + rand() * 30; // irregular sizes
        const rot = rand() * 360;
        const kind = Math.floor(rand() * 8);

        // colour: mostly white, some yellow, teal and light blue accents
        const pick = rand();
        const color = pick < 0.13 ? COLORS.yellow : pick < 0.24 ? COLORS.teal : pick < 0.33 ? COLORS.blue : COLORS.white;
        const accent = color !== COLORS.white;

        // fainter towards the centre, where the text sits
        const dx = (cx - W / 2) / (W / 2);
        const dy = (cy - H / 2) / (H / 2);
        const centre = Math.min(1, Math.sqrt(dx * dx + dy * dy) / 0.7);
        const fade = 0.4 + 0.6 * centre;
        const base = accent ? 0.32 : 0.13;
        const opacity = Math.min(0.5, base * fade * STRENGTH);

        const common = { fill: "none", stroke: color, strokeWidth: 2.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
        let shape: React.ReactNode;
        switch (kind) {
          case 0:
            shape = <circle r={size} {...common} />; // ring
            break;
          case 1:
            shape = <circle r={Math.max(3, size / 4)} fill={color} />; // dot
            break;
          case 2:
            shape = <polygon points={`0,${-size} ${size * 0.9},${size * 0.7} ${-size * 0.9},${size * 0.7}`} {...common} />; // triangle
            break;
          case 3:
            shape = <polygon points={`0,${-size * 0.8} ${size * 0.7},${size * 0.5} ${-size * 0.7},${size * 0.5}`} fill={color} />; // filled triangle
            break;
          case 4:
            shape = <rect x={-size * 0.7} y={-size * 0.7} width={size * 1.4} height={size * 1.4} rx={3} {...common} />; // diamond / square
            break;
          case 5:
            shape = <path d={`M${-size * 0.7},0 H${size * 0.7} M0,${-size * 0.7} V${size * 0.7}`} {...common} />; // plus
            break;
          case 6:
            shape = <polyline points={`${-size * 1.2},${size * 0.4} ${-size * 0.6},${-size * 0.4} 0,${size * 0.4} ${size * 0.6},${-size * 0.4} ${size * 1.2},${size * 0.4}`} {...common} />; // short zigzag
            break;
          default:
            shape = <path d={`M${-size},0 A${size},${size} 0 0 1 ${size},0`} {...common} />; // half circle
        }
        out.push(
          <g key={key++} transform={`translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${rot.toFixed(0)})`} opacity={opacity.toFixed(3)}>
            {shape}
          </g>
        );
      }
    }
    return out;
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* a few large soft shapes for depth, in different sizes */}
        <circle cx="1330" cy="70" r="210" fill="#1F5CBA" opacity="0.16" />
        <circle cx="90" cy="600" r="250" fill="#1F5CBA" opacity="0.14" />
        <circle cx="760" cy="640" r="120" fill="#6BB7A8" opacity="0.08" />
        <circle cx="1330" cy="70" r="150" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.07" />

        {/* zigzag lines running across the whole width */}
        <polyline points={zigzag(48, 14, 44)} fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" opacity="0.09" />
        <polyline points={zigzag(H - 44, 14, 44, -20, W + 60)} fill="none" stroke="#F4D03F" strokeWidth="2.5" strokeLinejoin="round" opacity="0.2" />
        <polyline points={zigzag(H * 0.5, 10, 36, 20, W)} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" opacity="0.045" />

        {shapes}
      </svg>
    </div>
  );
}
