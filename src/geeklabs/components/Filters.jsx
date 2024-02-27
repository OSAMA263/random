import tw from "tailwind-styled-components";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { filters_data } from "../data";
import SearchIcon from "/task/search.svg";

export default function Filters() {
  const { industry, radio, roll } = filters_data;

  return (
    <FiltersContainer>
      <div className="space-y-[14px] text-white ">
        <h2 className="text-center text-xl font-semibold">Filters</h2>
        {/* selected filter options */}
        <div>
          <h5 className="flex justify-between">
            <span className="textwhite">Filters Applied</span>
            <button>Clear All</button>
          </h5>
          <div className="rounded-md mt-2 bg-dark-gray gap-2 flex flex-wrap p-2 min-h-[50px]">
            <span className="bg-light-blue rounded-md h-fit flex items-center gap-x-1 px-1 text-[10px] text-black">
              Real Estate
              <button>x</button>
            </span>
          </div>
        </div>

        {/* filter list options */}
        <div className="rounded-xl p-4 space-y-3 bg-dark-gray ">
          {/* input search */}
          <div>
            <h3>Stock</h3>
            <div className="px-3 mt-1">
              <InputGroup color={"#939393"}>
                <InputLeftElement>$</InputLeftElement>
                <Input
                  color={"white"}
                  placeholder="TICKER"
                  _placeholder={{ color: "#939393" }}
                />
                <InputRightElement>
                  <img src={SearchIcon} alt={SearchIcon} />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
          <div className="space-y-6">
            {/* multi filters options */}
            <div className="flex gap-x-2 ms-5">
              {industry.map((col, i) => (
                <div className="space-y-2" key={col}>
                  <h3>{i === 0 ? "Industry" : "\u00A0"}</h3>
                  <div className="border-l-2 pl-2 flex flex-col gap-y-1">
                    {col.map(({ icon, label }) => (
                      <button
                        className="transition-all hover:text-black hover:bg-light-blue rounded-md px-1"
                        key={label}
                      >
                        <span className="flex items-center gap-x-2 min-w-max">
                          <img src={icon} alt="" /> {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* filters input radio */}
            <FilterSection>
              {radio.map((col, i) => (
                <div className="space-y-2" key={col}>
                  <h3>{i === 0 ? "Market Cap" : "Risk Level"}</h3>
                  {col.map((option) => (
                    <InputRadio key={option}>
                      <label className="cursor-pointer">
                        <span className="relative size-5 rounded-full bg-light-gray">
                          <small className="transition-all has-[:checked]:bg-light-blue bg-black-ish absolute size-[7px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <input
                              name={i === 0 ? "radio1" : "radio2"}
                              value={option}
                              type="radio"
                              defaultChecked={
                                (i === 0 && option === "Small") ||
                                (i === 1 && option === "Low Risk")
                              }
                            />
                          </small>
                        </span>
                        {option}
                      </label>
                    </InputRadio>
                  ))}
                </div>
              ))}
            </FilterSection>
            {/* choose a roll filter */}
            <FilterSection>
              {roll.map((col, i) => (
                <div className="space-y-2 text-center" key={col}>
                  <h3>{i === 0 ? "Strategy" : "Asset"}</h3>
                  <div className="roll-selector">
                    {col.map((option, j) => (
                      <span
                        key={option}
                        className={
                          j === 1 ? "rounded-lg bg-light-blue p-[2px]" : ""
                        }
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </FilterSection>
          </div>
        </div>
        <button className="bg-light-blue mx-auto block rounded-lg px-16 py-2 font-bold ">
          Apply
        </button>
      </div>
    </FiltersContainer>
  );
}

const FilterSection = ({ children }) => {
  return <div className="mx-6 grid grid-cols-2 gap-x-6">{children}</div>;
};

const FiltersContainer = tw.div`
w-[427px]
h-[783px]
bg-black-ish
rounded-tl-xl
rounded-bl-xl
p-6
[&_h3]:font-bold
[&_h3]:text-[14px]
[&_span]:text-[13px]
`;
const InputRadio = tw.div`
*:flex 
*:items-center 
*:gap-2
[&_input]:absolute
[&_input]:invisible
space-y-1
text-[13px]
`;
