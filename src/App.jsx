import InternshipTask from "./geeklabs/InternshipTask";
import ParallaxScroll from "./ParallaxScroll"
function App() {
  //   const ppl = [
  //     { name: "ali", age: 69 },
  //     { name: "ahmed", age: 1 },
  //     { name: "osa", age: 99 },
  //   ];
  //   const adultONly = ({age}) => {
  //     if (age > 50) {
  //       return "adule";
  //     } else {
  //       return "kid";
  //     }
  //   };
  // const bigPpl=Object.groupBy(ppl,adultONly)
  //   console.log(bigPpl)

  return (
    <>
      <InternshipTask />
      <ParallaxScroll/>
    </>
  );
}

export default App;
