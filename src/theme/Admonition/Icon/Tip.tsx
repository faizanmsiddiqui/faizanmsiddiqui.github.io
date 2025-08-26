import React, { type ReactNode } from "react";
import { GlowingStar } from "@site/src/assets/noto-emoji";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconTip(): ReactNode {
  return (
    <GlowingStar width={IconExtraSmall.width} height={IconExtraSmall.height} />
  );
}
