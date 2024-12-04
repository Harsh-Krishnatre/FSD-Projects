import React from "react";
import reactDom from "React-Dom";
const parent = document.getElementById("root");
const element = React.createElement("h1",()=>"Shopping List");
const root = reactDom.createRoot(parent);
root.render(element);