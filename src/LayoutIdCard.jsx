import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import tw from "tailwind-styled-components";
export default function LayoutIdCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-600">
      <div className="grid grid-cols-3 gap-10 p-20 w-[70%] h-[80%]">
        {cards.map((card, i) => (
          <motion.div
            transition={{ duration: 0.6 }}
            className={`${
              i == 0 ? "col-span-2" : i == 3 ? "col-span-2" : "col-span-1"
            } rounded-lg bg-gray-400 flex flex-col justify-end p-4 cursor-pointer`}
            onClick={() => {
              setSelectedCard(card);
            }}
            key={card}
            layoutId={card}
          >
            <div className="space-y-4">
              <h1 className="h-5 rounded-md w-[30%] bg-blue-400 bg-opacity-70"></h1>
              <h1 className="h-5 rounded-md w-[69%] bg-blue-400 bg-opacity-70"></h1>
              <h1 className="h-5 rounded-md w-[50%] bg-blue-400 bg-opacity-70"></h1>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedCard && (
          <>
            <Overlay
              onClick={() => setSelectedCard(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></Overlay>
            <Modal transition={{ duration: 0.6 }} layoutId={selectedCard}>
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 text-white rounded-full right-4 bg-gray-900 p-2"
              >
                X
              </button>
              the card "{cards.find((card) => card === selectedCard)}" content
              <div className="space-y-4">
                <h1 className="h-5 rounded-md w-[30%] bg-blue-400 bg-opacity-70"></h1>
                <h1 className="h-5 rounded-md w-[69%] bg-blue-400 bg-opacity-70"></h1>
                <h1 className="h-5 rounded-md w-[50%] bg-blue-400 bg-opacity-70"></h1>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <h1 className="h-5 rounded-md bg-blue-400 bg-opacity-70"></h1>
                <h1 className="h-5 rounded-md bg-blue-400 bg-opacity-70"></h1>
                <h1 className="h-5 rounded-md bg-blue-400 bg-opacity-70"></h1>
              </div>
            </Modal>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
const Modal = tw(motion.div)`
absolute
h-1/2
w-1/2
bg-gray-400
rounded-lg
p-4
flex 
flex-col 
justify-end
gap-4
z-10
`;

const Overlay = tw(motion.div)`
absolute 
top-0 
h-screen 
w-full 
flex 
items-center 
justify-center 
bg-black 
bg-opacity-50
`;
const cards = ["card1", "card2", "card3", "card4"];
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function App() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="relative flex items-center justify-center h-screen bg-gray-600">
//       <div className="grid grid-cols-3 gap-10 p-20 w-[70%] h-[80%]">
//         {cards.map((card, i) => (
//           <motion.div
//             transition={{ duration: 0.6 }}
//             className={`${
//               i == 0 ? "col-span-2" : i == 3 ? "col-span-2" : "col-span-1"
//             } rounded-lg bg-gray-400 flex flex-col justify-end p-4 cursor-pointer`}
//             onClick={() => {
//               setSelectedCard(card);
//             }}
//             key={card}
//             layoutId={card}
//           >
//             {isActive?"true":"false"}
//           </motion.div>
//         ))}
//       </div>
//       <AnimatePresence>
//         {selectedCard && (
//           <>
//             <Overlay />
//             <motion.div
//               className="bg-white p-10 absolute space-x-6"
//               transition={{ duration: 0.6 }}
//               layoutId={selectedCard}
//             >
//               <button
//                 onClick={() => setSelectedCard(null)}
//                 className="text-white rounded-full bg-gray-900 p-2"
//               >
//                 X
//               </button>
//               <button
//                 className="bg-blue-200"
//                 onClick={() => setIsActive((prev) => !prev)}
//               >
//                 change state
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// const Overlay = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="absolute top-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-50"
//     ></motion.div>
//   );
// };

// const cards = ["card1", "card2", "card3", "card4"];
