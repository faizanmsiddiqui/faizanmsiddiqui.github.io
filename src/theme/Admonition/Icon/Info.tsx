import React, { type ReactNode } from "react";
import { Pushpin } from "@site/src/assets/noto-emoji";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconInfo(): ReactNode {
  return (
    <Pushpin width={IconExtraSmall.width} height={IconExtraSmall.height} />
  );
}
