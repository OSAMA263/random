import InternshipTask from "./geeklabs/InternshipTask";
import ParallaxScroll from "./ParallaxScroll";
import ScrollxSlider from "./ScrollxSlider";
import LayoutIdCard from "./LayoutIdCard";
import SpyActiveSection from "./SpyActiveSection";
import React19 from "./React19";
import tw from "tailwind-styled-components";
import { useTransform } from "framer-motion";
function App() {
  //   const ppl = [
  //     { name: "ali", age: 69 },
  //     { name: "ahmed", age: 1 },
  //     { name: "osa", age: 99 },
  //   ];
  //   const adultONly = ({age}) => {
  //     if (age > 69) {
  //       return "adule";
  //     } else {
  //       return "kid";
  //     }
  //   };
  // const oldPpl=Object.groupBy(ppl,adultONly)
  //   console.log(oldPpl)
  return (
    <>
      {/* <Huh /> */}
      {/* <React19/> */}
      <InternshipTask />
      <ParallaxScroll />
      <ScrollxSlider />
      <LayoutIdCard />
      <SpyActiveSection />
      {/* <SwiperThumbs /> */}
    </>
  );
  //,formik?or react validation new way
}

export default App;
// shallowcopy
// const clone = structuredClone(user);

// const Huh = () => {
//   const names = ["ali", "all", "shaq"];
// const user = {
//   name: "aa",
//   age: 69,
//   skills: ["cook"],
//   info() {
//     return `${this.name} ${this.age}`;
//   },
// };
// Array.some().every() //if true retuurns true
// console.log(user.info());
//   names.at(1);
//   console.log(names.with(1,"change name"))
//   user.name ??= "new name"; //if prop name does exits then leave it i not make it new name
//   // deep copy and modifa it
//   const clonedUser=structuredClone(user)
//   clonedUser.skills.push("al")
//   console.log(user,clonedUser)
// const newarr = nistedArr.flat(Infinity); //clean nestied arrays
// let arrayToString = array.join("-"); //make the array to a string
// name.toLowerCase().trim(); //removes the white space in a block line
// name.startsWith("a");
// let num = 63.36;
// Number(num.toFixed(1)); //
// let unique = [...new Set(array)]; //unique items
//   return (
//     <>
// <button id="popover-trigger" popoverTargert="popover">popover for title</button>
//<div anchor="popover-trigger" id="popover">popover</div>
//       <p title="tool tip" contentEditable>
//         title
//       </p>
//       <marquee direction="right"> zooooooooooo</marquee> {/*in js*/}
//     </>
//   );
// };

// // css
// @media (300px <=width <=600px){
//   body{
//     background-color:"black"
//   }
// }
// .container{
//   background-image:"url...";
//   background-repeat:"space no repeat"//resize it now
// }
// mix-blend-mode
// imgs with diffrent height
// .img{
//   aspect-ratio:3/2;
//   object-fit:"container";
//   // mix-blend-mode
// }
// .grid{
//   display:grid;
//   grid-template-columns:repeat(auto-fit,minmax(0,1fr))
// }
{
  /* <div className=""></div> */
}
// lets say that the image we want it to be dynamic but we want equel margin from top left,bottrom right
// maegin-block :calc(100% - 4px) // ifk my brain hurts
//
// radial-gradient(red 75%,blue)
// linear-gradient(red 50%,blue 50%) to 50% make it red and from 50% to the rest make it blue
// so its gonna be half red ,half blue
