import React from "react";
//
type ListProp<T> = {
  items: T[];
  onClick: (value: T) => void;
};
type TType = string | { name: string; age: number } | number;

const Generics = <T extends TType>({ items, onClick }: ListProp<T>) => {
  console.log(items);
  // const Generics = <T extends number|string>({ items, onClick }: ListProp<T>) => {
  return (
    <div>
      {items.map((item) => (
        <div onClick={() => onClick(item)}>
          {typeof item === "object" ? JSON.stringify(item) : item}
        </div>
      ))}
    </div>
  );
};
export default Generics;
