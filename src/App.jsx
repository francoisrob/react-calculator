import {CalculatorProvider} from "./hooks/CalcProvider";
import Calculator from "./components/calculator";

function App() {
    return (<CalculatorProvider>
            <Calculator/>
        </CalculatorProvider>);
}

export default App;
