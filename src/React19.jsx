import { useState, useTransition } from "react";

export default function React19() {
  return (
    <>
      <UseTransition />
      {/* now all the react19 new shit */}
      {/* form (actions) */}
      {/* useactionstate() */}
      <UseActionsForm />
      {/* useoptimistic() */}
      <UseOptimistic/>
      {/* useformstatus() */}
      {/* use() */}
      <UseHook/>
      {/* ref as prop */}
      {/* meta data ,client and server comps */}
    </>
  );
}
//  THE use() its a hook but they fucking call it api
const UseHook=()=>{
  // it can be replace useContext()
  // and use effect? and usestate???? tf?
  
  return <div></div>
}


// refs as prop we can pass refs as a normal prop
// useOptimistic
const UseOptimistic = () => {
  // updates te state to the user immediately and if there is an error it changes the updated states to the prev state before update
  const [optimistic,setOptimistic]=useOptimistic(state.name)

  return (
    <>
      <div>{optimistic}</div>
    </>
  );
};
// const {pinding,data}=useFormStatus() data.get("password")
const UseActionsForm = () => {
  // validation
  // useActionState()
  const [user, actionFunction, isPending] = useActionState(
    updateName,
    { error: null, name: "user" } // initial value
  );

  async function updateName(pervState, formData) {
    try {
      const newName = await formData.get("name");
      return { name: newName };
    } catch (error) {
      return { ...pervState, error };
    } finally {
      console.log(user);
    }
  }

  // const hanldeAction = (formData) => {
  //   console.log(formData.get("password"));
  // };

  return (
    // <form action={hanldeAction}>
    <form action={actionFunction}>
      <input type="text" name="name" />
      <input type="text" name="password" />
      <button type="submit">sub</button>
    </form>
  );
};

// old hook usetransition
// basicly if your navigation to "home" and then click to "about" fast but the about page got too much content so its gonna take lets say 3sec to transform you to the about page
// cuz whats whats happing is you navigate to home page so all the home page content are geting rendered
// if you click on about fast it takes 3 seconds to go to about because its still finishing rendring the home page content
// use transition can abanded the rendreing and navigate you to the about page without waiting to the home page content to finish rendreing

const UseTransition = () => {
  const [tab, setTab] = useState("/contact");
  const [isPending, startTransition] = useTransition();

  const setStyles = (activeTab) => {
    return {
      backgroundColor: tab === activeTab ? "black" : "white",
      color: tab === activeTab ? "white" : "black",
    };
  };

  const nav_links = [
    { url: "/", link: "home" },
    { url: "/about", link: "about" },
    { url: "/contact", link: "contact" },
    { url: "/services", link: "services" },
  ];

  return (
    <div>
      <nav>
        <ul className="flex p-9 bg-gray-400 justify-center gap-10">
          {nav_links.map(({ url, link }) => (
            <li key={link}>
              <button
                className="rounded-md p-2 transition-all duration-500"
                style={setStyles(url)}
                onClick={() => startTransition(setTab(url))}
              >
                {isPending
                  ? "loding,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,"
                  : link}
              </button>
            </li>
          ))}
        </ul>
        {isPending ? (
          <div className="p-6 bg-black"></div>
        ) : (
          <div className="p-6 bg-blue-400"></div>
        )}
      </nav>
    </div>
  );
};
