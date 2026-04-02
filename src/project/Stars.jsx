import starinfo from './star-info.json';
import { useState } from "react";

function parseRA(ra) {
    const [h, m, s] = ra.split(":").map(parseFloat);
    return (h + m / 60 + s / 3600) * 15; // degrees 0–360
}

function parseDEC(dec) {
    const sign = dec.startsWith("-") ? -1 : 1;
    const [d, m, s] = dec.replace(/[+-]/, "").split(":").map(parseFloat);
    return sign * (d + m / 60 + s / 3600); // degrees -90 to +90
}

const starColors = {
    O: "#9bb8ff", B: "#adc8ff", A: "#ccdaff", F: "#f5f0ff",
    G: "#fff4d6", K: "#ffd098", M: "#ff8a5c",
};

function getStarColor(type) {
    const t = type.replace(/[^A-Z]/g, "")[0] || "G";
    return starColors[t] || "#ffffff";
}

function getMagGlow(mag) {
    const m = parseFloat(mag);
    if (m < 3) return "0 0 20px 6px rgba(180,210,255,0.9), 0 0 40px 12px rgba(120,170,255,0.5)";
    if (m < 5) return "0 0 12px 4px rgba(180,210,255,0.7), 0 0 24px 8px rgba(120,170,255,0.3)";
    return "0 0 6px 2px rgba(180,210,255,0.4)";
}

export default function Stars() {
    const [hovered, setHovered] = useState(null);

    const raValues = starinfo.map((s) => parseRA(s.RA));
    const decValues = starinfo.map((s) => parseDEC(s.DEC));
    const raMin = Math.min(...raValues) - 0.3;
    const raMax = Math.max(...raValues) + 0.3;
    const decMin = Math.min(...decValues) - 5;
    const decMax = Math.max(...decValues) + 5;

    const toX = (ra) => ((ra - raMin) / (raMax - raMin)) * 88 + 6;
    const toY = (dec) => (1 - (dec - decMin) / (decMax - decMin)) * 84 + 8;

    const bgStars = Array.from({ length: 120 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 0.4 + 0.1,
        op: Math.random() * 0.4 + 0.1,
    }));

    return (
        <div style={{
            minHeight: "100vh",
            background: "radial-gradient(ellipse at 40% 30%, #0a0e1a 0%, #020408 70%)",
            fontFamily: "'Courier New', monospace",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 20px",
            color: "#c8d8f0",
        }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <p style={{
                    fontSize: "11px",
                    letterSpacing: "6px",
                    color: "#4a6080",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                }}>HD Star Catalog · Epoch 2000</p>
                <h1 style={{
                    fontSize: "clamp(22px, 4vw, 36px)",
                    fontWeight: "300",
                    letterSpacing: "12px",
                    color: "#dde8f8",
                    margin: 0,
                    textTransform: "uppercase",
                }}>Star Chart</h1>
                <div style={{
                    width: "60px", height: "1px",
                    background: "linear-gradient(90deg, transparent, #3a6090, transparent)",
                    margin: "12px auto 0",
                }} />
            </div>

            {/* Chart */}
            <div style={{
                position: "relative",
                width: "min(800px, 95vw)",
                aspectRatio: "4/3",
                border: "1px solid #1a2a3a",
                borderRadius: "4px",
                overflow: "visible",
                background: "radial-gradient(ellipse at 50% 50%, #060d1a 0%, #020408 100%)",
                boxShadow: "0 0 80px rgba(20,60,120,0.15), inset 0 0 60px rgba(0,10,30,0.8)",
            }}>
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((pct) => (
                    <div key={`hg-${pct}`} style={{
                        position: "absolute", left: "6%", right: "6%",
                        top: `${8 + pct * 0.84}%`, height: "1px",
                        background: "rgba(40,80,120,0.15)",
                    }} />
                ))}
                {[0, 25, 50, 75, 100].map((pct) => (
                    <div key={`vg-${pct}`} style={{
                        position: "absolute", top: "8%", bottom: "8%",
                        left: `${6 + pct * 0.88}%`, width: "1px",
                        background: "rgba(40,80,120,0.15)",
                    }} />
                ))}

                {/* SVG for background noise stars */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                    {bgStars.map((s) => (
                        <circle key={s.id} cx={`${s.x}%`} cy={`${s.y}%`}
                            r={s.r} fill="white" opacity={s.op} />
                    ))}
                </svg>

                {/* Catalog stars */}
                {starinfo.map((star) => {
                    const ra = parseRA(star.RA);
                    const dec = parseDEC(star.DEC);
                    const x = toX(ra);
                    const y = toY(dec);
                    const mag = parseFloat(star.MAG);
                    const size = Math.max(4, Math.round(14 / mag));
                    const color = getStarColor(star.Title_HD);
                    const isHovered = hovered === star.ID;

                    return (
                        <div
                            key={star.ID}
                            onMouseEnter={() => setHovered(star.ID)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                position: "absolute",
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: "translate(-50%, -50%)",
                                cursor: "pointer",
                                zIndex: isHovered ? 20 : 10,
                            }}
                        >
                            {/* Star dot */}
                            <div style={{
                                width: `${isHovered ? size + 4 : size}px`,
                                height: `${isHovered ? size + 4 : size}px`,
                                borderRadius: "50%",
                                background: color,
                                boxShadow: getMagGlow(star.MAG),
                                transition: "all 0.2s ease",
                            }} />

                            {/* Tooltip */}
                            {isHovered && (
                                <div style={{
                                    position: "absolute",
                                    bottom: "calc(100% + 12px)",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    background: "rgba(5, 12, 25, 0.95)",
                                    border: "1px solid #1e3a5a",
                                    borderRadius: "3px",
                                    padding: "10px 14px",
                                    whiteSpace: "nowrap",
                                    pointerEvents: "none",
                                    boxShadow: "0 4px 24px rgba(0,0,0,0.7)",
                                    minWidth: "160px",
                                }}>
                                    <div style={{ fontSize: "11px", color: "#5a9fd4", letterSpacing: "3px", marginBottom: "6px" }}>
                                        HD {star.ID}
                                    </div>
                                    <div style={{ fontSize: "13px", color: color, fontWeight: "bold", marginBottom: "4px" }}>
                                        {star.Title_HD}
                                    </div>
                                    <div style={{ fontSize: "10px", color: "#4a6880", lineHeight: 1.8 }}>
                                        <span style={{ color: "#7aa0c0" }}>RA</span>  {star.RA}<br />
                                        <span style={{ color: "#7aa0c0" }}>DEC</span> {star.DEC}<br />
                                        <span style={{ color: "#7aa0c0" }}>MAG</span> {star.MAG}
                                    </div>
                                    {/* Arrow */}
                                    <div style={{
                                        position: "absolute", bottom: "-5px", left: "50%",
                                        transform: "translateX(-50%) rotate(45deg)",
                                        width: "8px", height: "8px",
                                        background: "rgba(5,12,25,0.95)",
                                        borderRight: "1px solid #1e3a5a",
                                        borderBottom: "1px solid #1e3a5a",
                                    }} />
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Axis labels */}
                <div style={{
                    position: "absolute", bottom: "2%", left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "9px", letterSpacing: "4px", color: "#2a4060",
                }}>RIGHT ASCENSION</div>
                <div style={{
                    position: "absolute", left: "0.5%", top: "50%",
                    transform: "translateY(-50%) rotate(-90deg)",
                    fontSize: "9px", letterSpacing: "4px", color: "#2a4060",
                    transformOrigin: "center center",
                }}>DECLINATION</div>
            </div>

            {/* Legend */}
            <div style={{
                marginTop: "24px",
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {Object.entries(starColors).map(([type, color]) => (
                    <div key={type} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                        <div style={{
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: color,
                            boxShadow: `0 0 6px 2px ${color}66`,
                        }} />
                        <span style={{ fontSize: "10px", color: "#3a5070", letterSpacing: "2px" }}>
                            {type}-type
                        </span>
                    </div>
                ))}
            </div>

            {/* Star table */}
            <div style={{
                marginTop: "32px",
                width: "min(800px, 95vw)",
                borderTop: "1px solid #101e30",
            }}>
                <p style={{
                    fontSize: "9px", letterSpacing: "5px", color: "#2a4060",
                    textTransform: "uppercase", marginBottom: "12px",
                }}>Catalog Data</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1px", background: "#0a1520" }}>
                    {starinfo.map((star) => {
                        const color = getStarColor(star.Title_HD);
                        return (
                            <div
                                key={star.ID}
                                onMouseEnter={() => setHovered(star.ID)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    background: hovered === star.ID ? "#0c1e32" : "#060e18",
                                    padding: "12px 16px",
                                    cursor: "pointer",
                                    transition: "background 0.15s",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                }}
                            >
                                <div style={{
                                    width: "8px", height: "8px", borderRadius: "50%",
                                    background: color, flexShrink: 0,
                                    boxShadow: `0 0 6px 2px ${color}55`,
                                }} />
                                <div>
                                    <div style={{ fontSize: "10px", color: "#2a5070", letterSpacing: "2px", marginBottom: "2px" }}>
                                        HD {star.ID} · <span style={{ color }}>{star.Title_HD}</span>
                                    </div>
                                    <div style={{ fontSize: "10px", color: "#3a6080" }}>
                                        mag {star.MAG} · {star.RA} / {star.DEC}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}