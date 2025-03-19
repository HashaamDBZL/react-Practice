import React, { useState } from "react";
import useExpensiveCalculation from "../hooks/useExpensiveCalculation";

const SquareCalculator = () => {
  const [num, setNum] = useState(2);
  const result = useExpensiveCalculation(num);

  return (
    <div>
      <h2>
        Square of {num}: {result}
      </h2>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
};

export default SquareCalculator;
