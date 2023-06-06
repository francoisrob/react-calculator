import { CalculatorProvider } from "./hooks/CalcProvider";
import Calculator from "./components/calculator";
import History from "./components/history";
import { useContext } from "react";
import { CalculatorContext } from "./hooks/CalcProvider";

function App() {
  const { state } = useContext(CalculatorContext);

  return (
    <CalculatorProvider>
      <div className={`App ${state.theme}`}>
        <Calculator />
        <History />
      </div>
    </CalculatorProvider>
  );
}

export default App;
