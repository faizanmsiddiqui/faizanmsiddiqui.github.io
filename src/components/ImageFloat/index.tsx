import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

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
  const className = align === "left" ? styles.floatLeft : styles.floatRight;

  const style: React.CSSProperties = { width };

  return (
    <img
      alt={alt}
      src={src}
      style={style}
      className={clsx(styles.responsiveFloat, className)}
      loading="lazy"
    />
  );
};

export default ImageFloat;
