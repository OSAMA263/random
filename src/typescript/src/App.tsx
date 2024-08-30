// import "./App.css";
import { Sup } from "./Sup";
import { AboutSection } from "./components/AboutSection";
import Child from "./components/Child";
import { CustomButton } from "./components/CustomButton";
import { CustomComponent } from "./components/CustomComponent";
import Generics from "./components/Generics";
import { Greet } from "./components/Greet";
import State from "./components/State";

function App() {
  const user = {
    name: "ali",
    age: 44,
    isLoggedIn: false,
    skills: [{ count: 6 }, { count: 6 }],
  };
  return (
    <>
      {/* <div>sup</div>
      <Greet account={user}>
        <Child styles={{ color: "red" }}></Child>
      </Greet>
      <State component={Child} />
      <Generics onClick={(value) => console.log(value)} items={[1, 2, 3]} />
      <Generics
        onClick={(value) => console.log(value)}
        items={["1", "2", "3"]}
      />
      <Generics
        onClick={(value) => console.log(value)}
        items={[
          { name: "ali", age: 69 },
          { name: "ali", age: 69 },
          { name: "ali", age: 69 },
        ]}
      />
      <CustomButton className="" onClick={() => console.log("sup")}>
        asd
      </CustomButton>
      <CustomComponent color="black" as="h1"></CustomComponent> */}
      {/* <div className="flex gap-10">
        <Sup />
        <Sup />
      </div> */}
      <AboutSection/>
    </>
  );
}
export default App;
// extracting component prop like isOpen,isExpanded in chakra componenet
const CustomAccordion = ({ account }: React.ComponentProps<typeof Greet>) => {
  const { age, isLoggedIn, name } = account;
  return <></>;
};
