import { CalculatorContext } from "../hooks/CalcProvider";
import { useContext } from "react";

const History = () => {
  const { state } = useContext(CalculatorContext)

  function renderHistory() {
    return state.history.map((history, index) => (
      <label className="historytext" key={index}>
        {history}
      </label>
    ));
  }

  return (
    <div className="history">
      <h1 className="historytitle">History</h1>
      {renderHistory()}
    </div>
  );
};

export default History;
