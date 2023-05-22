import {useReducer, useEffect} from "react";
import CalculatorButton from "./components/calculatorbutton";
import CalculatorDisplay from "./components/calculatordisplay";
import {calcReducer, INITIAL_STATE} from "./reducers/calcReducer";
import {digitKeys, operatorButtons, plusEqualsButtons, themeOptions,} from "./utils/constants";

function App() {
    const [state, dispatch] = useReducer(calcReducer, INITIAL_STATE);

    useEffect(() => {
        const handleKeyPress = (event) => {
          const key = event.key;
          if (!isNaN(key) || key === ".") {
            dispatch({ type: "DIGIT", value: key });
          } else if (key === "=" || key === "Enter") {
            dispatch({ type: "EQUALS" });
          } else if (key === "+") {
            dispatch({ type: "ADD" });
          } else if (key === "-") {
            dispatch({ type: "SUBTRACT" });
          } else if (key === "*") {
            dispatch({ type: "MULTIPLY" });
          } else if (key === "/") {
            dispatch({ type: "DIVIDE" });
          } else if (key === "Backspace") {
            dispatch({ type: "CLEAR" });
          }
        };
    
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);

    const handleInput = (value) => {
        if (!isNaN(value) || value === ".") {
            dispatch({type: "DIGIT", value});
        } else {
            dispatch({type: value});
        }
    };

    function renderOperatorButtons() {
        return operatorButtons.map((button, index) => (
            <CalculatorButton
                key={index}
                className={button.className}
                value={button.value}
                label={button.label}
                onClick={() => handleInput(button.value)}
            />
        ));
    }

    function renderPlusEqualsButtons() {
        return plusEqualsButtons.map((button, index) => (
            <CalculatorButton
                key={index}
                className={button.className}
                value={button.value}
                label={button.label}
                onClick={() => handleInput(button.value)}
            />
        ));
    }

    function renderDigitKeys() {
        return digitKeys.map((label, index) => (
            <CalculatorButton
                key={index}
                className={`digitkey ${label === 0 ? "key0" : ""}`}
                value=""
                label={label.toString()}
                onClick={() => handleInput(label.toString())}
            />
        ));
    }

    function renderThemeSwitcher() {
        return themeOptions.map((option, index) => (
            <button
                key={index}
                className="theme-switcher-button"
                value={option.theme}
                onClick={() => handleInput(option.theme)}
            >
                {option.label}
            </button>
        ));
    }

    return (
        <div className={`App ${state.theme}`}>
            <main>
                <div className="calculator">
                    <CalculatorDisplay value={state.display}/>
                    <div className="input-keys">
                        <div className="operator-container">{renderOperatorButtons()}</div>
                        <div className="plus-equals-container">
                            {renderPlusEqualsButtons()}
                        </div>
                        <div className="digit-keys">{renderDigitKeys()}</div>
                    </div>
                </div>
                <div className="theme-switcher">{renderThemeSwitcher()}</div>
            </main>
        </div>
    );
}

export default App;
