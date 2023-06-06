import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { CalculatorProvider } from "./hooks/CalcProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <CalculatorProvider>
        <App />
    </CalculatorProvider>
);
