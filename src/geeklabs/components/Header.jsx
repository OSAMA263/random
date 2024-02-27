import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import tw from "tailwind-styled-components";
import AlertIcon from "/task/alerts-blue.svg";
import SearchIcon from "/task/search.svg";

export default function Header() {
  return (
    <HeaderContainer>
      {/* hero */}
      <h1 className="font-bold uppercase text-5xl flex">
        <span className="rounded-3xl bg-light-blue px-[3px] mr-[14px]"></span>
        alerts
      </h1>
      {/* search input */}
      <InputGroup>
        <InputRightElement><img src={SearchIcon} alt={SearchIcon} /></InputRightElement>
        <Input
          color="white"
          placeholder="Search By..."
          _placeholder={{ color: "white" }}
          type="text"
        />
      </InputGroup>
      {/* alert icon */}
      <div className="relative">
        <small className="absolute size-4 flex items-center justify-center rounded-full bg-green top-0 right-0 z-10 ">
          6
        </small>
          <img src={AlertIcon} className="size-12" alt={AlertIcon} />
      </div>
    </HeaderContainer>
  );
}
const HeaderContainer = tw.header`
w-[846px]
flex
items-center
gap-x-6
text-white
`;
