import { Children } from "react";

type TextHeadingTypes = {
  as: "h1" | "h2" | "h3" | "div" | "span" | "p";
  children: string;
  className?: string;
};

export const BrandText = (props: TextHeadingTypes) => {
  const Tag = `${props.as}` as keyof JSX.IntrinsicElements;

  return <Tag className={props.className}>{props.children}</Tag>;
};
