import {CalculatorProvider} from "./hooks/CalcProvider";
import Calculator from "./components/calculator";
import History from "./components/history.jsx";
import {createPortal} from "react-dom";

function App() {
    return (<CalculatorProvider>
            <Calculator/>
            {createPortal(<History />, document.getElementById('history'))}
        </CalculatorProvider>);
}

export default App;
