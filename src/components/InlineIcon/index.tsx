import React from "react";

type InlineIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: string | number;
  style?: React.CSSProperties;
};

const InlineIcon: React.FC<InlineIconProps> = ({
  Icon,
  size = "1em",
  style,
}) => {
  const mergedStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    verticalAlign: "baseline",
    marginRight: "0.5em",
    marginLeft: "0.5em",
    ...style,
  };

  return <Icon style={mergedStyle} />;
};

export default InlineIcon;
