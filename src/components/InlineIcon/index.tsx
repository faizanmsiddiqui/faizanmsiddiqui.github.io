import React from "react";

type InlineIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: string;
  marginLeft?: string;
  marginRight?: string;
  style?: React.CSSProperties;
};

const InlineIcon: React.FC<InlineIconProps> = ({
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

export default InlineIcon;
