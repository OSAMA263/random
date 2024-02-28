import {  useRef } from "react";
import tw from "tailwind-styled-components";
import { motion, useTransform, useScroll } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis'
import Img1 from "/img1.jpg"
import Img2 from "/img2.jpg"
import Img3 from "/img3.jpg"
import Img4 from "/img4.jpg"

export default function ParallaxScroll() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef,offset:["0 1","1 0"] });

  return (
    <ReactLenis root>
      <div className="h-screen bg-gray-300"></div>
      <div ref={containerRef} className="h-[200vh] bg-gray-800">
          <GridWrapper>
            {images.map(({ imgs, scrollY }, i) => (
              // COLUMN
              <GridColumn
                key={i + "column"}
                {...{ imgs, scrollY, scrollYProgress }}
              />
            ))}
          </GridWrapper>
      </div>
      <div className="h-screen bg-gray-300"></div>
    </ReactLenis>
  );
}

const GridColumn = ({ imgs, scrollYProgress, scrollY }) => {
  const y = useTransform(scrollYProgress, [0, 1], scrollY);
  return (
    <motion.div style={{ y }} className="space-y-10 h-fit">
      {imgs.map((src, j) => (
        <Card key={j + "card"}><img src={src} alt={src} className="w-full h-full object-center"/></Card>
      ))}
    </motion.div>
  );
};
const GridWrapper = tw.div`
sticky 
top-0 
h-screen
grid
grid-cols-4
gap-10
overflow-hidden
mx-4
`;
const Card = tw.div`
rounded-3xl 
flex
items-center
justify-center
h-[600px]
overflow-hidden
`;
const images = [
  { imgs: [Img1, Img2], scrollY: ["-30%", "0%"] },
  { imgs: [Img3, Img4, Img1], scrollY: ["0%", "-60%"] },
  { imgs: [Img2, Img3, Img2, Img4], scrollY: ["-80%", "20%"] },
  { imgs: [Img4,Img1], scrollY: ["10%", "-40%"] },
];
