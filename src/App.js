import React, { useState } from "react";
import "./styles.css";
import Keys from "./components/keys";

export default function App() {
  const [output, setOutput] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const updateOutput = (e) => {
    const btnType = e.target.dataset.type;
    const btnValue = e.target.dataset.value;

    if (output === "" && btnType === "operator") {
    } else if (btnType === "decimal" && output.toString().includes(".")) {
    } else if (btnType === "operator" && output !== "") {
      setFirstValue(output);
      setOperator(btnValue);
      setOutput("");
    } else if (btnType === "calculate") {
      console.log(operator, firstValue, output);

      if (operator === "+") setOutput(Number(firstValue) + Number(output));
      if (operator === "-") setOutput(Number(firstValue) - Number(output));
      if (operator === "*") setOutput(Number(firstValue) * Number(output));
      if (operator === "/") setOutput(Number(firstValue) / Number(output));
    } else if (btnType === "clear") {
      setOutput("");
      setFirstValue(null);
      setOperator(null);
    } else setOutput(output + btnValue);
  };

  return (
    <div>
      <h1>calculator</h1>
      <div className="container">
        <div className="output">{output}</div>
        <Keys output={updateOutput} />
      </div>
    </div>
  );
}
