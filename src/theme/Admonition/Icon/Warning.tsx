import React, { type ReactNode } from "react";
import { PoliceCarLight } from "@site/src/assets/noto-emoji";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconCaution(): ReactNode {
  return (
    <PoliceCarLight
      width={IconExtraSmall.width}
      height={IconExtraSmall.height}
    />
  );
}
