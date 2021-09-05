import React, { useState } from "react";
import "./styles.css";
import Keys from "./components/keys";

export default function App() {
    const [result, setResult] = useState("")
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    const [operator, setOperator] = useState(null)


    const calculate = (e) => {
        const btnValue = e.target.dataset.value
        const btnType = e.target.dataset.type

        if (btnValue === "-" && result !== "" && operator === "*") {
            setSecondValue(secondValue + btnValue)
        }
        else if (btnType === "operator" && result !== "") {

            setFirstValue(result)
            setSecondValue("")
            setOperator(btnValue)
        }
        else if (btnType === "operator" && firstValue === "" && btnValue === "-") {

            setFirstValue(btnValue)

        }
        else if (btnType === "number" && operator === null) {

            setFirstValue(firstValue + btnValue)

        } else if (btnType === "number" && operator !== null) {

            setSecondValue(secondValue + btnValue)

            if (firstValue !== "" && operator !== null) {

                if (operator === "+") {

                    const result = Number(firstValue) + Number(secondValue + btnValue);
                    setResult(result);
                }

                if (operator === "-") {

                    const result = Number(firstValue) - Number(secondValue + btnValue);
                    setResult(result);
                }

                if (operator === "*") {

                    const result = Number(firstValue) * Number(secondValue + btnValue.replace("*", "+"));

                    if (isNaN(result)) {
                        setResult("Bad expression")
                    } else { setResult(result) };
                }


                if (operator === "/") {

                    if (Number(secondValue + btnValue) === 0) {

                        setResult("Can't divide by 0")

                    } else {

                        const result = Number(firstValue) / Number(secondValue + btnValue);
                        setResult(result);
                    }
                }

                if (operator === "%") {

                    const result = (Number(firstValue) / 100) * Number(secondValue + btnValue);
                    setResult(result)
                }
            }

        } else if (btnValue === "-" && firstValue !== "" && operator === "*") {

            setSecondValue(secondValue + btnValue)

        }
        else if (btnType === "operator" && firstValue !== "" && firstValue !== "-") {

            setOperator(btnValue)

        }
        else if (btnType === "decimal" && operator === null && !firstValue.includes(".")) {

            setFirstValue(firstValue + btnValue)

        }
        else if (btnType === "decimal" && operator !== null && !secondValue.includes(".")) {

            setSecondValue(secondValue + btnValue)

        }
        else if (btnType === "clear") {

            setResult("")
            setFirstValue("")
            setSecondValue("")
            setOperator(null)
        }
    }

    return (
        <div>
            <h1>calculator</h1>
            <div className="container">
                <div className="expression">{firstValue}{operator}{secondValue}</div>
                <div className="output">{result}</div>
                <Keys output={calculate} />
            </div>
        </div>
    );
}
