import { useMemo } from "react";

const useExpensiveCalculation = (input: number) => {
  const computedValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return input ** 2; // Example: Squaring a number
  }, [input]);

  return computedValue;
};

export default useExpensiveCalculation;
