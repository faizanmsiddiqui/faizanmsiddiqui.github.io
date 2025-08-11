// Helper to wrap PNG in React component
export default function wrapPng(src: string, alt?: string) {
  return function PngComponent(props: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img src={src} alt={alt || ''} width={64} height={64} {...props} />;
  };
}

export * as FluentUIEmoji from "./fluentui-emoji";
export * as Kit from "./kit";
export * as NotoEmoji from "./noto-emoji";
