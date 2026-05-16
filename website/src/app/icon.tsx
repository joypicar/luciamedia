import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const dynamic = "force-static";

/** Favicon: the Lucia projector beam on black. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0a0a0a",
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "11px solid transparent",
            borderBottom: "11px solid transparent",
            borderLeft: "26px solid #f26b1f",
          }}
        />
      </div>
    ),
    size,
  );
}
