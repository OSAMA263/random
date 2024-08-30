import React from "react";
type ButtonProps = {
  variant?: "primary" | "secondary";//style class
  children?: string;
} & React.ComponentProps<"button">;
//here now you can use the component props without the need to pass onClick props and Classname and so on
export const CustomButton = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return <button {...props}>{children ?? "custom buton"}</button>;
};
