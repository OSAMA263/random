import tw from "tailwind-styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";

export default function RevealSectionsScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    /*start the animation when the top of the target meets the top of the viewport */
    // and the end of the animtion when the end of the target meets the end of the viewport
    offset: ["0 0", "1 1"],
  });

  return (
    <div ref={ref} className="h-[500vh] bg-[#a19c90]">
      {/* slide up div */}
      <SlideHero />
      {/* main section */}
      <StickyDiv>
        {/* content div */}
        <div className="relative">
          {data.text.map(({ containerOffset }, i) => (
            <TransformAnimation
              {...{ containerOffset, i, scrollYProgress }}
              key={"text" + i}
            >
              {/* overlay div */}
              <div className="sup absolute w-full bottom-0 z-50"></div>
              {/* content text */}
              <div className="absolute h-dvh w-full flex items-cneter bg-[#f2f0ea]">
                <div className="h-full w-1/2 divide-y mx-auto flex flex-col items-center justify-center gap-32 text-center">
                  <div className="space-y-6">
                    <h6 className="text-sm">{i + 1}</h6>
                    {/* the boxshadown is on the top */}
                    <h1 className="text-5xl font-semibold">
                      TITLE NUM({i + 1})
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, commodi exercitationem veniam odio sed omnis,
                    eaque cumque dolores quo qui asperiores at tempore magnam
                    fugit numquam.
                  </p>
                </div>
              </div>
            </TransformAnimation>
          ))}
        </div>
        {/* images div */}
        <div className="relative">
          {data.imgs.map(({ containerOffset, src }, i) => (
            <TransformAnimation
              {...{ containerOffset, i, scrollYProgress }}
              key={"img" + i}
            >
              <img
                src={src}
                alt={"img" + i}
                className="absolute h-dvh w-fit object-cover"
              />
            </TransformAnimation>
          ))}
        </div>
      </StickyDiv>
    </div>
  );
}

const TransformAnimation = (props) => {
  const { i, containerOffset, scrollYProgress, children } = props;

  const height = useTransform(
    scrollYProgress,
    containerOffset ?? [0, 0] /*just a default value */,
    i === 0 ? ["100%", "100%"] : ["100%", "0%"]
    // if its the last image then dont change the height
  );

  return (
    <AnimatedDiv style={{ height }}>
      {children}
    </AnimatedDiv>
  );
};
const SlideHero = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum.
    </Container>
  );
};
const Container = tw.div`
absolute
top-0
z-[69]
w-full
h-screen
bg-[#3c4236]
flex
items-center
justify-center
text-3xl
`;

const StickyDiv = tw.div`
grid
grid-cols-2
h-[100vh]
w-full
bg-[#a19c90]
overflow-hidden
sticky
top-0
`;

const AnimatedDiv = tw(motion.div)`
w-full
h-full
ease-linear
overflow-hidden
absolute
bg-no-repeat
bg-cover
bg-center
transition-all
duration-300
px-2
`;

const data = {
  // so i gave every img a value for the scrollYProgress of the container
  imgs: [
    {
      src: "https://www.newgamenetwork.com/images/uploads/gallery/KentuckyRouteZero/krz_04.jpg",
    },
    {
      src: "https://www.newgamenetwork.com/images/uploads/gallery/KentuckyRouteZero/krz_05.jpg",
      containerOffset: [0.75, 1],
      /* when the scrollYprogress is 75% (when we pass the 450vh from the main container)
        untill we reach the end of the target container (500vh) then i want to animte this image
        between 75% to 100% of the container height the animtion of this image will happen
        */
    },
    {
      src: "https://www.newgamenetwork.com/images/uploads/gallery/KentuckyRouteZero/krz_06.jpg",
      containerOffset: [0.5, 0.75],
    },
    {
      src: "https://www.newgamenetwork.com/images/uploads/gallery/KentuckyRouteZero/krz_07.jpg",
      containerOffset: [0.25, 0.5],
      /* here i started with 25% and not 0% because the first div that slides up with the green bg 
        so the div is taking a 100vh so i gave the first 1/4 (0,0.25) of the container height to that div
        */
    },
  ],
  text: [
    { containerOffset: [0.75, 1] },
    { containerOffset: [0.5, 0.75] },
    { containerOffset: [0.25, 0.5] },
  ],
};
