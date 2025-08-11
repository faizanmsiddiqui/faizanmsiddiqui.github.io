import React from "react";

interface GraphicsWrapperProps {
  // Content options
  imageUrl?: string; // File path or URL for PNG, JPG, WebP, GIF, or SVG
  svgInline?: React.ReactNode; // React JSX for an inline SVG component
  svgMarkup?: string; // Raw SVG XML string

  // Dimensions
  width?: string | number;
  height?: string | number;

  // Margin
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;

  // Padding
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;

  // Borders
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;

  // Styling
  displayType?: "block" | "flex" | "inline-flex";
  background?: string;
  borderRadius?: string | number;
  style?: React.CSSProperties; // Extra custom styles

  // Others
  className?: string; // Custom classes or Tailwind
  alt?: string; // For image accessibility
}

const GraphicsWrapper: React.FC<GraphicsWrapperProps> = ({
  imageUrl,
  svgInline,
  svgMarkup,

  width = "auto",
  height = "auto",

  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,

  displayType = "flex", // Default to flex for better alignment
  background = "transparent",
  borderRadius = 0,
  style = {},

  className = "",
  alt = "",
}) => {
  const renderContent = () => {
    if (imageUrl)
      return (
        <img
          src={imageUrl}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      );

    if (svgInline) return svgInline;

    if (svgMarkup)
      return (
        <div
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
          style={{ width: "100%", height: "100%" }}
        />
      );

    return null;
  };

  return (
    <div
      className={className}
      style={{
        display: displayType,
        alignItems: displayType !== "block" ? "center" : undefined,
        justifyContent: displayType !== "block" ? "center" : undefined,

        // Dimensions
        width,
        height,

        // Margins
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,

        // Padding
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,

        // Borders
        border,
        borderTop,
        borderRight,
        borderBottom,
        borderLeft,

        // Styling
        background,
        borderRadius,
        overflow: "hidden", // Ensures border radius works for images/SVGs
        ...style,
      }}
    >
      {renderContent()}
    </div>
  );
};

export default GraphicsWrapper;
