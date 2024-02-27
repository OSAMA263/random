import tw from "tailwind-styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { ChakraProvider } from "@chakra-ui/react";
import Filters from "./components/Filters";
import AlertTable from "./components/AlertTable";

export default function InternshipTask() {
  return (
    <ChakraProvider>
      <div className="bg-gray-600 flex items-center justify-center h-screen">
        <Container>
          <SideBar />
          <MainContentContainer>
            <div className="h-full mt-10 space-y-10">
              <Header />
              <AlertTable />
            </div>
          </MainContentContainer>
          <Filters />
        </Container>
      </div>
    </ChakraProvider>
  );
}

const MainContentContainer = tw.div`
h-full
relative
after:absolute
after:bottom-0
after:h-24
after:bg-gradient-to-t
after:from-dark-gray
after:block
after:w-full
after:z-50
`;

const Container = tw.div`
bg-dark-gray
w-[1440px]
h-[835px]
flex
items-center
gap-x-6
justify-end
relative
`;
