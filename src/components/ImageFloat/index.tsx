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
  const [isWide, setIsWide] = useState<boolean>(() => {
    // SSR-safe initial state
    if (typeof window === "undefined") return true;
    return window.innerWidth > MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > MOBILE_BREAKPOINT);
    };

    // Set on mount to ensure correct client-side width
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return <img alt={alt} src={src} style={style} loading="lazy" />;
};

export default ImageFloat;
