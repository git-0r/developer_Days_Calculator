import React, { useState } from "react";
import "./styles.css";
import Keys from "./components/keys";

export default function App() {
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const updateOutput = (e) => {
    const btnType = e.target.dataset.type;
    const btnValue = e.target.dataset.value;

    // if(btnType === "operator" && fir)

    if (output === "" && btnType === "operator" && btnValue === "-") {

      setOperator(btnValue)
      setExpression(btnValue)
      setOutput(output + btnValue)

    } else if (btnType === "number") {

      setOutput(output + btnValue)
      setExpression(expression + btnValue)

      console.log("expression=", firstValue, operator, btnValue)

      if (firstValue !== null && output !== "") {

        if (operator === "+") {
          const evaluateExpression = Number(firstValue) + Number(output + btnValue)
          setResult(evaluateExpression)
          // setFirstValue(evaluateExpression)
          // setOutput("")
        };
        if (operator === "-") {
          const evaluateExpression = Number(firstValue) - Number(output + btnValue)
          setResult(evaluateExpression)
          // setFirstValue(evaluateExpression)
          // setOutput("")
        };
        if (operator === "*") {
          const evaluateExpression = Number(firstValue) * Number(output + btnValue.replace("*", "+"))

          setResult(evaluateExpression)
          // setFirstValue(evaluateExpression)
          // setOutput("")
        };
        if (operator === "/") {
          const evaluateExpression = Number(firstValue) / Number(output + btnValue)

          setResult(evaluateExpression)
          // setFirstValue(evaluateExpression)
          // setOutput("")
        };
      }

    } else if (btnType === "operator" && output !== "" && output !== "-") {

      setFirstValue(output)
      setOutput(btnValue)
      setOperator(btnValue)
      setExpression(expression + btnValue)

    } else if (btnType === "calculate" && firstValue !== null && output !== "") {

      console.log("expression=", firstValue, output)

      if (operator === "+") setResult(Number(firstValue) + Number(output));
      if (operator === "-") setResult(Number(firstValue) + Number(output));
      if (operator === "*") setResult(Number(firstValue) * Number(output.replace("*", "+")));
      if (operator === "/") setResult(Number(firstValue) / Number(output));

      // console.log("result=", result)

    } else if (btnType === "clear") {

      setOutput("");
      setExpression("");
      setFirstValue(null);
      setOperator(null);
      setResult("");
    }
  };

  return (
    <div>
      <h1>calculator</h1>
      <div className="container">
        <div className="expression">{expression}</div>
        <div className="output">{result}</div>
        <Keys output={updateOutput} />
      </div>
    </div>
  );
}
