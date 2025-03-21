import React from "react";
import { createRoot } from "react-dom/client";

const element = (
  <div>
    <h1>Hello earth</h1>
  </div>
);
const root = createRoot(document.getElementById("root"));
root.render(element);
