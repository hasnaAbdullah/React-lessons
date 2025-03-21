import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const div = React.createElement(
  "div",
  { className: "container", id: "wrapper" },
  "React Element is an actual js object"
);
console.log(div);
function timer() {
  const element = (
    <h1 className="heading">
      <span>Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  return element;
}
const int = setInterval(() => {
  // console.log("hello");
  root.render(timer());
}, 1000);
clearInterval(int);
