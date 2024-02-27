import tw from "tailwind-styled-components";
import { sidebar_data } from "../data";

export default function SideBar() {
  return (
    <div className="transition-all duration-700 hover:w-[176px] w-[76px] z-[69] h-[835px] absolute left-0">
      <SideBarWrapper id="side-navbar">
        logo
        <nav className="mt-16 w-full px-4">
          <ul className="space-y-7 flex flex-col">
            {sidebar_data.map(({ icon, label, available }) => (
              <Link $available={available} key={label}>
                <img src={icon} alt={label} />
                <div
                  id="link-text"
                  className="absolute ml-12 opacity-0 invisible transition-all duration-700"
                >
                  <h4>{label}</h4>
                </div>
                {!available && (
                  <ComingSoon id="coming-soon">coming soon</ComingSoon>
                )}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <img
            src="public/task/side bar/avatar.svg"
            alt=""
            className="size-10 rounded-full"
          />
        </div>
      </SideBarWrapper>
    </div>
  );
}
const SideBarWrapper = tw.div`
h-full
w-full
bg-black-ish
py-8
text-white
flex 
flex-col
items-center
after:absolute
after:h-full
after:w-12
after:block
after:-right-12
after:top-0
after:bg-gradient-to-r
after:from-dark-gray
[&_#link-text]:hover:!visible
[&_#link-text]:hover:!opacity-100 
`;
const ComingSoon = tw.span`
absolute 
flex 
items-center 
justify-center 
py-4 
top-0 
left-0 
h-full 
w-full 
bg-[#396d9d]
shadow-[inset_0_0_5px_4px_#181818]
opacity-0
transition-all
duration-700
`;

const Link = tw.li`
${({ $available }) =>
  $available
    ? "hover:text-light-blue cursor-pointer"
    : "[&_#coming-soon]:hover:!opacity-100"}
flex
items-center
relative
transition-all
duration-700
ms-2
`;
// w-76px
