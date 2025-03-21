import React from "react";
import { createRoot } from "react-dom/client";
function elm() {
  return (
    <h1 className="react" onClick={() => setCount()}>
      <span className="logo">{}</span>
      <img src="url" alt="" />
    </h1>
  );
}
createRoot(document.getElementById("root")).render(elm);

/*
elm = {
    type: "h1",
    props: {
        className: "react", 
        children: [
            {
            type: "span",
            props: {
                className: 'logo',
                children: 'nice world'
            }
        },
        {
            type: "img",
            props: {
                src: "url",
                alt: ""
            }
        }
        ]
    }
}
*/
