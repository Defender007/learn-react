import React from "react";
import { render } from "react-dom";
import MyButton from "./MyButton";

const items = ["Django", "React", "Spring", "Dotnet-core"]
render(<MyButton items={items}>Click Me</MyButton>, document.getElementById("root"));
