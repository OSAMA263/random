import { ReactNode } from "react";
type AccountType = {
  name: string;
  age: number;
  isLoggedIn: boolean;
  skills: string | { count: number }[];
};
type UserProps = {
  account: AccountType;
  children?: ReactNode;
  obj?:object,
};

type CombieTyps = AccountType &
  UserProps & {
    loggedin: never; //idk but never is that in this codiction dont let the user set isLoggedIn
  };
const Greet = ({ account, children,obj }: UserProps) => {
  const { name, age, isLoggedIn, skills } = account;
  const names: { user: string; age: number }[] = [{ user: "ali", age: 44 }];
  return (
    <div>
      <div>{children}</div>
      <Events />
    </div>
  );
};
export { Greet };

// Specify the type for the 'status' variable
type statusType = {
  string: "loading" | "success" | "error";
};
const status = "loading";
// Define the type for the 'users' array
type usersTye = {
  name: string;
  age: number;
};
const users: usersTye[] = [
  { name: "ali", age: 44 },
  { name: "ali", age: 44 },
];
// event props
type ButtonType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, ID?: number) => void;
  children?: React.ReactNode;
};
const Button = ({ handleClick, children }: ButtonType) => {
  return <button onClick={(e) => handleClick(e, 68)}>{children}</button>;
};

const Events = () => {
  type inputTypes = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  const handleChange: inputTypes["handleChange"] = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div>
        <Button
          handleClick={(e, ID) => {
            console.log("clicked", e, ID);
          }}
        >
          Click
        </Button>
      </div>
      <div>
        <input type="text" onChange={(e) => handleChange(e)} />
      </div>
    </>
  );
};
