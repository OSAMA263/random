import { addScaleCorrector } from "framer-motion";
import React from "react";

const CHANGABLE_VALUE_NUMBER = 5;

export default function ImprovmentToTheCode() {
  // - if we are useing a hard value we whould define it outside the comp and in cap case letters
  // now you can make it dynamic ad it on top of the file so we find it easy next time we modifie it
  // or maybe you make a folder "lib" which is not a comps like in next and we make a file inside it "constants" we put all the dynamic values in it

  // - if we have a function called addTodo and if we are useing it in an event
  // if its submit then make it onAddTodo ,if on click make it handleAddTodo or there is handleClick
  // so writ understandable functions names

  // - lets say setSelectedItem we dont have to set it to the whole object that in the array
  // because its too much data and if you showing the item info and then u decided to edit the item info
  // u will have to run the setSelectedItem fn again or it
  // inested just get the id

  // -pagination-filters

  //-  
  return <div className="bg-black">ImprovmentToTheCode</div>;
}
