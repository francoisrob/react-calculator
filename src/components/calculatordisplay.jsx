import {useContext, useEffect, useRef} from "react";
import {CalculatorContext} from "../hooks/CalcProvider";

const displayStyles = {
    display: "flex font-mono rounded-xl mb-8 bg-ctp-teal h-20 w-72 text-ctp-surface0 transition-colors duration-500 ease-linear overflow-hidden ",
    value: "text-5xl ml-auto my-auto leading-relaxed text-right w-full m-2 break-all",
};

const calculatorDisplay = () => {
    const displayRef = useRef(null);
    const {state} = useContext(CalculatorContext);

    useEffect(() => {
        displayRef.current.scrollTo({
            top: displayRef.current.scrollHeight,
        });
    }, [state.value]);
    return (
        <div className={`${displayStyles["display"]}`} ref={displayRef}>
            <h2 className={`${displayStyles["value"]}`}>
                {state.display}
            </h2>
        </div>
    );
};

export default calculatorDisplay;
