import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Img1 from "/img1.jpg";
import Img2 from "/img2.jpg";
import Img3 from "/img3.jpg";
import Img4 from "/img4.jpg";

export default function ScrollxSlider() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-200%"]);
  const slider = Array(8).fill(null);
  return (
    <>
      <div className="h-[400vh] bg-gray-200" ref={containerRef}>
        <div className="h-screen sticky top-0 bg-gray-700 overflow-hidden flex items-center justify-center">
          <motion.div style={{ x: x }} className="flex gap-10 w-full">
            {slider.map((_, i) => (
              <div
                className="flex rounded-3xl overflow-hidden text-white justify-center items-center h-96 min-w-[600px] bg-black"
                key={i + "card"}
              >
                <img
                  src={images[i]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-screen bg-gray-400"></div>
    </>
  );
}
const images = [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4];
