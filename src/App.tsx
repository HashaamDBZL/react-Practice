/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import "./App.css";
import Hooks from "./components/Lifecycle";
import SearchBox from "./components/useCallbackExamples";
import SquareCalculator from "./components/useMemoExamples";
import Counter from "./components/useReducerExamples";
import CustomInput, { InputHandle } from "./hooks/useCustomImperativeHandle";
import ControlledUncontrolledInputs from "./components/ControlledUncontrolledInputs";

function App() {
  const inputRef = useRef<InputHandle>(null);
  return (
    <>
      {/* <Hooks /> */}
      {/* <SquareCalculator /> */}
      {/* <SearchBox /> */}
      {/* <Counter /> */}
      {/* <div>
        <CustomInput ref={inputRef} />
        <button onClick={() => inputRef.current?.focusInput()}>
          Focus Input
        </button>
      </div> */}
      <ControlledUncontrolledInputs />
    </>
  );
}

export default App;
