import { ImageResponse } from "next/og";

// Icon metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Generate the icon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        {/* Wrap circles so they're centered */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
          }}
        >
          {/* Left orange circle — M */}
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#FF6319",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "9px",
              fontWeight: 900,
              fontFamily: "Inter, sans-serif",
              color: "white",
            }}
          >
            M
          </div>

          {/* Right yellow circle — R */}
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#FCCC0A",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "9px",
              fontWeight: 900,
              fontFamily: "Inter, sans-serif",
              color: "black",
            }}
          >
            R
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}