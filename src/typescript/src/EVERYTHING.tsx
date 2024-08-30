import React from "react";
type PositionY = "top" | "center" | "bottom";
type PositionX = "left" | "center" | "right";

type ElementPositionType = {
  position: `${PositionY}-${PositionX}`; //hover on position prop
};
//
const CustomAccordion = (
  props: React.ComponentProps<typeof Greet>
) /*the props are the type of the greet component props*/ => {
  const { name, age } = props; //these are the Greet props
  return <></>;
};
//
const Child = ({ styles }: { styles?: React.CSSProperties }) => {
  // this is the css prop type
  return <></>;
};
//
type ButtonProps = {
  variant?: "primary" | "secondary";
} & React.ComponentProps<"button">;
// here we can youe the btn props on the custom omponent like onClikc and so on
const MainComponent = () => {
  return <CustomButton onCLick={() => console.log("sup")}></CustomButton>;
};
const CustomButton = ({ variant = "primary", ...props }: ButtonProps) => {
  return <button {...props}></button>;
};
//
type PropsType = {
  color?: "black" | "red" | "green";
  size?: "lg" | "md" | "sm";
  children?: React.ReactNode; //for children prop
  as?: React.ElementType<any>; //HTML TAG
};
export const CustomComponent = (props: PropsType) => {
  const {
    color = "nothing",
    size = "nothing",
    children = "default text",
    as:Component = "div",
  } = props;
  return (
    <>
      <Component className={`text-${color} font-${size}`}>{children}</Component>
      {/* example for main component */}
      <CustomComponent color="black" as="h1">
        h1 tag
      </CustomComponent>
    </>
  );
};
//
type ButtonType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, ID?: number) => void;
  children?: React.ReactNode;
};
const Button = ({ handleClick, children }: ButtonType) => {
  return <button onClick={(e) => handleClick(e, 68)}>{children}</button>;
};
//
function State({ ComponentProp }: ComponentType) {
  // this is if we passed a component as a prop
  return (
    <>
      {/* example for state component */}
      <State ComponentProp={ButtonComponent} />
    </>
  );
}
//
type userType = {
  name: string;
  age: number;
};
//
const container = useRef<HTMLDivElement>(null);
const [user, setUser] = useState<userType>(); //<here is the initial type value>
const [user, setUser] = useState<userType>({} as userType);
//it means the initial value is an empty object and its type looks like the userype
