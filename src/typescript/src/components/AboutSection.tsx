import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export const AboutSection = () => {

  return <></>;
};

const text = [
  "Hello -again!",
  "Graduated -from -Delta -Academy -of -Science -with -a -bachelor's -degree -in -information -systems.",
  "As -a -FrontEnd -developer, -I -use -React -alongside -with -important -libraries -like -Tailwind -for -styling -and -ChakraUI -for -superior -user -interface -elements.",
  "I -mostly -concentrate -on -useing -Framer -Motion -primarily -to -create -charming -visuals -for -my -web -development -projects.",
  "I -am -constantly -learning -new -languages -and -tools -and -not -just -relying -on -the -knowledge -i -already -have.",

  // "I -am -looking -for -a -job -where -I -can -apply -my -knowledge -and -provide -cool -ass -websites -and -gain -guidance -from -experienced -colleagues.",
];
// const container = useRef<HTMLDivElement>(null);
// const { scrollYProgress } = useScroll({
//   target: container,
// });
// const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
// return (
//   <div ref={container} style={{ height: "200vh", background: "black" }}>
//     <motion.div style={{ position: "fixed", top: 0 }}>
//       <motion.div
//         style={{
//           y,
//           width: 20,
//           height: 20,
//           background: "gray",
//         }}
//       ></motion.div>
//     </motion.div>
//   </div>
// );
// export const AboutSection = () => {
//   let ind = 0;
//   return (
//     <>
//       <div className="bg-gray-400 h-screen">
//         {text.map((line, i) => (
//           <div key={i}>
//             {line
//               .replace(" ", `${"\u00A0"}`)
//               .split("-")
//               .map((word, j) => (
//                 <span key={j}>
//                   {word.split("").map((char, h) => (
//                     <Letter {...{ ind: ind++, char, wait: 2 }} key={h}></Letter>
//                   ))}
//                 </span>
//               ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// const Letter = ({
//   char,
//   ind,
//   wait = 0,
// }: {
//   char: string;
//   ind: number;
//   wait?: number;
// }) => {
//   return (
//     <>
//       <motion.span
//         key={ind + char}
//         initial={{ opacity: 0 }}
//         whileInView={{
//           opacity: [0, 1],
//           transition: {
//             duration: 0.2,
//             delay: 0,
//           },
//         }}
//         whileHover={{
//           opacity: [0, 1],
//         }}
//         transition={{
//           duration: 0.2,
//           delay: wait + ind * 0.05,
//         }}
//       >
//         {char}
//       </motion.span>
//     </>
//   );
// };
