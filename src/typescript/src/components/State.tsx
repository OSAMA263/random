import React, { useEffect, useRef, useState } from "react";
type userType = {
  name: string;
  age: number;
};
// type a componenet as a prop
type ComponentType = {
  component: React.ComponentType;
  // component: React.ComponentType<PropsType>; if the component needs props like name="a"
};
export default function State({ component: ComponentProp }: ComponentType) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<userType>({} as userType);
  // const [user, setUser] = useState<null|userType>(null);

  const handleLogIn = () => {
    setUser({ name: "ali", age: 69 });
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
    // setUser(null);
  };
  // useRef
  const Login = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    Login.current?.click();
  }, []);
  return (
    <div>
      <button ref={Login} onClick={handleLogIn}>
        log in
      </button>
      <button onClick={handleLogOut}>log out</button>
      <div>user is {loggedIn ? user?.name : "loged out"}</div>
      <ComponentProp />
    </div>
  );
}
