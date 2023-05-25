const INITIAL_STATE = {
    display: "0", value: "", result: "", theme: "ctp-mocha",
};

const isLastValueOperator = (value) => {
    const operators = ["+", "-", "*", "/"];
    const lastNumber = value[value.length - 1];
    return operators.includes(lastNumber);
};

const isDot = (value) => {
    const lastNumber = value.split(" ").pop();
    return lastNumber.includes(".");
};

const calcReducer = (state, action) => {
    switch (action.type) {
        case "DIGIT":
            if (state.display === "Invalid" || state.display === "Infinity") {
                state.display = "0";
            }
            if (action.value === "." && isDot(state.value)) {
                return state;
            } else {
                return {
                    ...state,
                    display: state.display === "0" ? action.value : state.display + action.value,
                    value: state.value + action.value,
                    result: "",
                };
            }
        case "CLEAR":
            return {
                ...state, display: "0", value: "", result: "",
            };
        case "DIVIDE":
            if (isLastValueOperator(state.value)) {
                return state;
            } else {
                return {
                    ...state, display: "/", value: state.value + "/",
                };
            }
        case "MULTIPLY":
            if (isLastValueOperator(state.value)) {
                return state;
            } else {
                return {
                    ...state, display: "*", value: state.value + "*",
                };
            }
        case "SUBTRACT":
            if (isLastValueOperator(state.value)) {
                return state;
            } else {
                return {
                    ...state, display: "-", value: state.value + "-",
                };
            }
        case "ADD":
            if (isLastValueOperator(state.value)) {
                return state;
            } else {
                return {
                    ...state, display: "+", value: state.value + "+",
                };
            }
        case "EQUALS":
            try {
                const result = eval(state.value);
                const formattedResult = parseFloat(result.toFixed(3)).toString();
                return {
                    ...state, display: formattedResult, value: formattedResult, result: formattedResult,
                };
            } catch (error) {
                console.error("Invalid expression");
                return {
                    ...state, display: "Invalid", value: "", result: "",
                }
            }
        case "LATTE":
            return {
                ...state, theme: "ctp-latte",
            };
        case "FRAPPE":
            return {
                ...state, theme: "ctp-frappe",
            };
        case "MACCHIATO":
            return {
                ...state, theme: "ctp-macchiato",
            };
        case "MOCHA":
            return {
                ...state, theme: "ctp-mocha",
            };
        default:
            return state;
    }
};

export {INITIAL_STATE, calcReducer};
