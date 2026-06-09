import { ImageResponse } from "next/og";

export const alt = "Lucia Multimedia — Illuminate Your Story";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f2efe9",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* The projector beam */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 215,
            width: 0,
            height: 0,
            borderTop: "100px solid transparent",
            borderBottom: "100px solid transparent",
            borderLeft: "520px solid #f26b1f",
            opacity: 0.22,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#8c8a82",
          }}
        >
          Film · Motion · Photography
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          <span>Illuminate</span>
          <span>
            your <span style={{ color: "#f26b1f" }}>story.</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8c8a82",
          }}
        >
          <span>Lucia Multimedia</span>
          <span>luciamultimedia.com</span>
        </div>
      </div>
    ),
    size,
  );
}
