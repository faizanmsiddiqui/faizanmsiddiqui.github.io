import React, { type ReactNode } from "react";
import { WritingHandDefault } from "@site/src/assets/noto-emoji";
import { IconExtraSmall } from "@site/src/components/IconSize";

export default function AdmonitionIconNote(): ReactNode {
  return (
    <WritingHandDefault
      width={IconExtraSmall.width}
      height={IconExtraSmall.height}
    />
  );
}
