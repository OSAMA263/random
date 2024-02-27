import { table_data } from "../data";
import tw from "tailwind-styled-components";
import CompanyIcon from "/task/table/company.svg";
import ViewsIcon from "/task/table/eye.svg";
import MarketIcon from "/task/table/market-cap.svg";
import RiskIcon from "/task/table/risk.svg";
import { useEffect, useState } from "react";
import { Fade, useDisclosure } from "@chakra-ui/react";

export default function AlertTable() {
  const arr = Array.from({ length: 15 }, () => table_data).flat();
  const { isOpen, onToggle } = useDisclosure();
  const [ind, setInd] = useState(null);

  return (
    <TableContainer className="table-container">
      {arr.map((row, i) => {
        const { company, views, marketCap, risk } = row;
        return (
          <>
            <AlertRow
              onClick={() => {
                setInd(ind === null ? i : null);
                onToggle();
              }}
              key={i + "row"}
            >
              <Cell>
                <div>
                  <span>
                    <img src={CompanyIcon} alt={CompanyIcon} />
                  </span>
                </div>
                <div>
                  <span className="uppercase">{company}</span>
                </div>
              </Cell>
              <Cell>
                <div>
                  <span>
                    <img src={ViewsIcon} alt={ViewsIcon} />
                  </span>
                </div>
                <div>
                  <span>{views}</span>
                </div>
              </Cell>
              <Cell>
                <div>
                  <span>
                    <img src={MarketIcon} alt={MarketIcon} />
                  </span>
                </div>
                <div>
                  <span
                    className={
                      marketCap < 0 ? "text-dark-orange" : "text-green"
                    }
                  >
                    {marketCap}
                  </span>
                </div>
              </Cell>
              <Cell>
                <div>
                  <span>
                    {risk === "Low Risk" ? (
                      <img src={RiskIcon} alt={RiskIcon} />
                    ) : (
                      <>
                        <img
                          src={RiskIcon}
                          alt=""
                          className="relative bg-light-gray z-10"
                        />
                        <img
                          src={RiskIcon}
                          alt=""
                          className="top-[12px] bg-light-gray absolute"
                        />
                        <img
                          src={RiskIcon}
                          alt=""
                          className="top-[9px] absolute bg-light-gray"
                        />
                      </>
                    )}
                  </span>
                </div>
                <div>
                  <span>{risk}</span>
                </div>
              </Cell>
              {ind === i && (
                <Fade
                  className="z-[68] rounded-md overflow-hidden absolute bottom-0 translate-y-full bg-black-ish w-full border-transparent !text-white"
                  in={isOpen}
                >
                  <AlertDetail {...{ company, views }} />
                </Fade>
              )}
            </AlertRow>
          </>
        );
      })}
    </TableContainer>
  );
}

const AlertDetail = ({ company, views }) => {
  return (
    <DetailContainer>
      <p>
        <span>{company}</span> just announced an acquisition of
        <span> $NFTLX</span> at
        <span> ${views} B.</span>
      </p>
      <p>
        This is an <a href="">arbitrage opportunity</a>, with the max gain being
        %X if the deal closes, but the possible risk is %Y if the deal fails, if
        the deal success is % and therefore the recommended play is{" "}
        <a href="">long/short</a> $ABC
      </p>
    </DetailContainer>
  );
};

const DetailContainer = tw.div`
w-full 
space-y-2
[&_span]:font-bold
[&_span]:uppercase
[&_a]:text-light-blue
[&_a]:underline
p-4 
`;

const TableContainer = tw.div`
w-[864px]
h-[690px]
space-y-4
pr-2
overflow-y-scroll
`;

const AlertRow = tw.div`
rounded-md
bg-light-gray
divide-x-[1px]
grid
grid-cols-4
content-center
place-content-center
text-white
py-4
relative
cursor-pointer
`;

const Cell = tw.div`
grid
grid-cols-2
px-8
[&>div]:flex 
[&>div]:items-center 
[&>div]:justify-around
relative
`;
