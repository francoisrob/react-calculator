import {createContext, useEffect, useReducer} from "react";
import {calcReducer, INITIAL_STATE} from "./calcReducer";

const CalculatorContext = createContext();

function CalculatorProvider({children}) {
    const [state, dispatch] = useReducer(calcReducer, INITIAL_STATE);

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;
            if (!isNaN(key) || key === ".") {
                dispatch({type: "DIGIT", value: key});
            } else if (key === "=" || key === "Enter") {
                dispatch({type: "EQUALS"});
            } else if (key === "+") {
                dispatch({type: "ADD"});
            } else if (key === "-") {
                dispatch({type: "SUBTRACT"});
            } else if (key === "*") {
                dispatch({type: "MULTIPLY"});
            } else if (key === "/") {
                dispatch({type: "DIVIDE"});
            } else if (key === "Backspace") {
                dispatch({type: "CLEAR"});
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);


    return (
        <CalculatorContext.Provider value={{state, dispatch}}>
            {children}
        </CalculatorContext.Provider>
    );
}

export {CalculatorContext, CalculatorProvider};
