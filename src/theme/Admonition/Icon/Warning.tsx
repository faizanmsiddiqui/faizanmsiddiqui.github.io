import React, { type ReactNode } from "react";
import { PoliceCarLight } from "@site/src/assets/noto-emoji-unicode-16";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconCaution(): ReactNode {
  return (
    <PoliceCarLight
      width={IconExtraSmall.width}
      height={IconExtraSmall.height}
    />
  );
}
