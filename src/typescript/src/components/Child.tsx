import React, { ReactNode } from "react";
type PositionY = "top" | "center" | "bottom";
type PositionX = "left" | "center" | "right";

type ElementPositionType = {
  position: `${PositionY}-${PositionX}`; //hover on position prop
};
export default function Child(
  { styles }: { styles?: React.CSSProperties },
  { children }: { children?: ReactNode }
) {
  const user: { name: string; age: number } = { name: "ali", age: 44 };
  return (
    <div style={styles}>
      this is a childre obj: {user.age} and {user.name}
    </div>
  );
}
