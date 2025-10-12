import React from "react";

type IconInlineProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  style?: React.CSSProperties;
};

const IconInline: React.FC<IconInlineProps> = ({
  Icon,
  size = "1em",
  marginLeft = "0.5em",
  marginRight = "0.5em",
  style,
}) => {
  const mergedStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    verticalAlign: "middle",
    marginLeft,
    marginRight,
    ...style,
  };

  return <Icon style={mergedStyle} />;
};

export default IconInline;
