import { useReducer } from "react";

const counterReducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

const useCounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return { count: state.count, dispatch };
};

export default useCounterReducer;
