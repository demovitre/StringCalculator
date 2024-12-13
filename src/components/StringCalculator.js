import React, { useState } from "react";
import { add } from "./../hooks/StringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
};

export default StringCalculator;
