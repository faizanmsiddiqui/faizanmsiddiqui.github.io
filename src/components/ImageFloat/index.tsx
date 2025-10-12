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
  const [isWide, setIsWide] = useState<boolean>(false);

  useEffect(() => {
    // Set initial value after mount
    setIsWide(window.innerWidth > 450);

    if (typeof window !== "undefined") {
      const handleResize = () => setIsWide(window.innerWidth > 450);
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
