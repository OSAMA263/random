import { Collapse } from "@chakra-ui/react";
import React, { useState } from "react";

export const Sup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-20 bg-gray-600 h-fit">
      <button className="w-full"
        onMouseLeave={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
      >
        toggle
      </button>
      <Collapse
        onMouseLeave={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
        in={isOpen}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero
        inventore quam
      </Collapse>
    </div>
  );
};
