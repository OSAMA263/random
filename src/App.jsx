import InternshipTask from "./geeklabs/InternshipTask";
import ParallaxScroll from "./ParallaxScroll";
import ScrollxSlider from "./ScrollxSlider";
import LayoutIdCard from "./LayoutIdCard";
import SpyActiveSection from "./SpyActiveSection";
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
      <InternshipTask />
      <ParallaxScroll />
      <ScrollxSlider />
      <LayoutIdCard />
      <SpyActiveSection />
      {/* <SwiperThumbs /> */}
    </>
  );
}

export default App;
