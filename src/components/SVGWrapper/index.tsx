import React from "react";

interface SVGWrapperProps {
  svg: React.ReactNode; // SVG content as a React element
  width?: string | number;
  height?: string | number;
  border?: string;
  padding?: string | number;
  background?: string;
  borderRadius?: string | number;
  style?: React.CSSProperties; // Extra custom styles
  className?: string; // Tailwind or custom classes
}

const SVGWrapper: React.FC<SVGWrapperProps> = ({
  svg,
  width = "auto",
  height = "auto",
  border = "none",
  padding = 0,
  background = "transparent",
  borderRadius = 0,
  style = {},
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height,
        border,
        padding,
        background,
        borderRadius,
        ...style,
      }}
    >
      {svg}
    </div>
  );
};

export default SVGWrapper;
