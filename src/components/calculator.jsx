import CalculatorButton from "./calculatorbutton";
import CalculatorDisplay from "./calculatordisplay";
import {useContext} from "react";
import {CalculatorContext} from "../hooks/CalcProvider";

const themeOptions = [
    {theme: "LATTE", label: "Latte"},
    {theme: "FRAPPE", label: "Frappe"},
    {theme: "MACCHIATO", label: "Macchiato"},
    {theme: "MOCHA", label: "Mocha"},];

const operatorButtons = [
    {className: "keyclear", label: "C", value: "CLEAR"},
    {className: "keydivide", label: "÷", value: "DIVIDE"},
    {className: "keymultiply", label: "×", value: "MULTIPLY"},
    {className: "keysubtract", label: "−", value: "SUBTRACT"}];

const plusEqualsButtons = [
    {className: "keyadd", label: "+", value: "ADD"},
    {className: "keyequals", label: "=", value: "EQUALS"}];


const digitKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];


function Calculator() {
    const {state, dispatch} = useContext(CalculatorContext);

    const handleInput = (value) => {
        if (!isNaN(value) || value === ".") {
            dispatch({type: "DIGIT", value});
        } else {
            dispatch({type: value});
        }
    };

    function renderButtons(buttons) {
        return buttons.map((button, index) => (<CalculatorButton
            key={index}
            className={button.className}
            value={button.value}
            label={button.label}
            onClick={() => handleInput(button.value)}
        />));
    }

    function renderDigitKeys() {
        return digitKeys.map((label, index) => (<CalculatorButton
            key={index}
            className={`digitkey ${label === 0 ? "key0" : ""}`}
            value=""
            label={label.toString()}
            onClick={() => handleInput(label.toString())}
        />));
    }

    function renderThemeSwitcher() {
        return themeOptions.map((option, index) => (<button
            key={index}
            className="theme-switcher-button"
            value={option.theme}
            onClick={() => handleInput(option.theme)}
        >
            {option.label}
        </button>));
    }

    return (<div className={`App ${state.theme}`}>
        <main>
            <div className="calculator">
                <CalculatorDisplay/>
                <div className="input-keys">
                    <div className="operator-container">
                        {renderButtons(operatorButtons)}
                    </div>
                    <div className="plus-equals-container">
                        {renderButtons(plusEqualsButtons)}
                    </div>
                    <div className="digit-keys">
                        {renderDigitKeys()}
                    </div>
                </div>
            </div>
            <div className="theme-switcher">
                {renderThemeSwitcher()}
            </div>
        </main>
    </div>);
}

export default Calculator;
