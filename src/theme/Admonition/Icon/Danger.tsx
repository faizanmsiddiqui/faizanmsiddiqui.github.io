import React, { type ReactNode } from "react";
import { Radioactive } from "@site/src/assets/noto-emoji";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconDanger(): ReactNode {
  return (
    <Radioactive width={IconExtraSmall.width} height={IconExtraSmall.height} />
  );
}
