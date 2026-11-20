import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

export const alt = `Portofolio ${personal.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Gambar pratinjau otomatis saat link portofolio dibagikan (LinkedIn, WhatsApp, dll). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #f3f8f5 0%, #c9dfd1 100%)",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 700, color: "#3c634d" }}>Portofolio</div>
        <div style={{ fontSize: 76, fontWeight: 800, marginTop: 16 }}>{personal.name}</div>
        <div style={{ fontSize: 36, marginTop: 20, color: "#334155" }}>{personal.headline}</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#475569" }}>
          {`${personal.role} · ${personal.location}`}
        </div>
      </div>
    ),
    size,
  );
}
