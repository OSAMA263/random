import React from "react";
type PropsType = {
  color?: "black" | "red" | "green";
  size?: "lg" | "md" | "sm";
  children?: React.ReactNode;
  as?: React.ElementType;
} 
export const CustomComponent = (props: PropsType) => {
  const {
    color = "nothing",
    size = "nothing",
    children = "default text",
    as = "div",
  } = props;
  const Component = as;
  return (
    <Component className={`text-${color} font-${size}`}>{children}</Component>
  );
};
