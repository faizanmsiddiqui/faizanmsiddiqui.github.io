import React, { useEffect, useState } from "react";

interface ImageFloatProps {
  alt: string;
  src: string;
  align?: "left" | "right";
  width?: string;
}

const ImageFloat: React.FC<ImageFloatProps> = ({
  alt,
  src,
  align = "right",
  width = "250px",
}) => {
  const MOBILE_BREAKPOINT = 450;
  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > MOBILE_BREAKPOINT);

    // Set initial value after mount
    handleResize();

    // Add event listener only if window is defined
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const style: React.CSSProperties = {
    float: isWide ? align : "none",
    display: "block",
    margin: isWide
      ? align === "left"
        ? "0 1em 1em 0"
        : "0 0 1em 1em"
      : "1em auto",
    width,
  };

  return <img alt={alt} src={src} style={style} />;
};

export default ImageFloat;
