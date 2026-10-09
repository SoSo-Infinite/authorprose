import { ImageResponse } from "next/og";

export const alt = "Author Prose — books by Chad Lenseth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 110px",
          background: "#f3efe6",
          color: "#1c1915",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: "#3f3a34" }}>
          Author Prose
        </div>
        <div style={{ fontSize: 76, marginTop: 24, lineHeight: 1.1 }}>Books by Chad Lenseth.</div>
        <div style={{ fontSize: 32, marginTop: 36, color: "#3f3a34" }}>
          Now on Kindle: The Coherence Protocol
        </div>
      </div>
    ),
    size,
  );
}
