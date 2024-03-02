import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import tw from "tailwind-styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Img1 from "/img1.jpg"
import Img2 from "/img2.jpg"
import Img4 from "/img4.jpg"

export default function SwiperThumbs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperProps = {
    navigation: true,
    speed: 2000,
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
    },
    modules: [Navigation, Thumbs],
  };

  const thumbsProps = {
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 40,
    modules: [Thumbs, FreeMode],
    loop: true,
    watchSlidesProgress: true,
    onSwiper: setThumbsSwiper,
  };

  return (
    <Container>
      <SliderImages swiperProps={swiperProps} />
      <SliderThumbs swiperProps={thumbsProps} />
    </Container>
  );
}

const SliderImages = ({ swiperProps }) => {
  return (
    <Swiper className="h-[78%] w-[80%]" {...swiperProps}>
      {imgs.map((img, i) => (
        <SwiperSlide key={"img" + i}>
          <img className="h-full w-full object-cover" src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SliderThumbs = ({ swiperProps }) => {
  return (
    <Swiper {...swiperProps} className="w-[80%] h-[20%]">
      {imgs.map((img, i) => (
        <SwiperSlide key={"thumbs" + i}>
          <img className="h-full w-full object-cover" src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Container = tw.div`
relative
h-screen
w-full
flex
flex-col
justify-between
my-4
`;

const imgs = [Img1, Img2, Img1, Img4];
