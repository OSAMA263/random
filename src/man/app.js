const name = "ali";
let array = ["osama", "ali", "osama", "ahmed"];
const nistedArr = [12, [12, 32, [154, 46]]];
const user = {
  name: "osama",
  age: function () {
    return this.name;
  },
};
// console.log(user.age());
let age = 69;
let num = 63.36;
Number("4" + "4");
Number.isInteger(4); //is it a number?
Math.abs(-5); //make the number positive
Number(num.toFixed(1)); //
let unique = [...new Set(array)]; //unique items
const newarr = nistedArr.flat(Infinity); //clean nestied arrays
let arrayToString = array.join("-"); //make the array to a string
name.toLowerCase().trim(); //removes the white space in a block line
name.startsWith("a");
for (let i = 0; i < array.length; i++) {
  if (array[i] === "osama") {
    continue; //i dont want that name
  }
  // console.log(array[i]);
}
function a(obj, ...arr) {
  //pass array must tbe last par
  // console.log(arr)
}
a(12123, 2, 3, 3);
// deep copy and modify it push or whatever
// const clonedUser=structuredClone(user)
// const newObj= Object.assign(obj1,obj2)//marge objects props in one obj
const body = document.body;
// document.forms||.links||.images||.title
body.style.cssText = `
background:gray;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:10px;
`;
// style.removeProperty("color");
const divs = document.querySelectorAll(".div");
const div1 = document.querySelectorAll(".div")[0];
const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector(".container");
divs.forEach(
  (div, i) => (div.style.color = i === 0 ? "red" : i === 1 ? "blue" : "green")
);
div1.setAttribute("id", "id");
div1.classList.add("grid","ass");
div1.hasAttribute("src"); //hass a specific att
container.innerHTML += "<p>click me</p>";
container.previousElementSibling.innerHTML +=
  "<span style='color:blue'> next element added</span>";
let receviedText = document.createTextNode("any text we recive");
let content = document.createElement("div");
content.appendChild(receviedText);
body.appendChild(content);
// add classnames and events
container.addEventListener("click", (e) => (container.style.color = "yellow"));
btn.onmouseover = function () {
  this.style.cssText = "background-color:black;color:white";
};
btn.onmouseout = function () {
  this.style.cssText = "";
};
let text;
input.onkeyup=(e)=>{
  content.innerHTML=e.target.value
}
// container.after(var)
const Huh = () => {
  const user = { name: "aa", age: 69,skills:["cook"] };
  const names = ["ali", "all", "shaq"];
  names.at(1);
  console.log(names.with(1,"change name"))
  user.name ??= "new name"; //if prop name does exits then leave it i not make it new name

  clonedUser.skills.push("al")
  console.log(user,clonedUser)

  return (
    <>
      <p title="tool tip" contentEditable>
        title
      </p>
      <marquee direction="right"> zooooooooooo</marquee> {/*in js*/}
    </>
  ); 
};

// // built in method if PM => num+12
// // 2:pm =>2+12 =>14 the real time
// let midNight = false;
// function CalcWorkedTime(start, end) {
//   let trueStartTime = !midNight ? start : start + 12;
//   let trueEndTime = !midNight ? end : end + 12;
//   const totalTime = trueEndTime - trueStartTime;
//   console.log(totalTime)
// }
// CalcWorkedTime(7,16.5)
// REDUX --------------------
