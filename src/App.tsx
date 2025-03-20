/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import "./App.css";
import Hooks from "./components/Lifecycle";
import SearchBox from "./components/useCallbackExamples";
import SquareCalculator from "./components/useMemoExamples";
import Counter from "./components/useReducerExamples";
import CustomInput, { InputHandle } from "./hooks/useCustomImperativeHandle";
import ControlledUncontrolledInputs from "./components/ControlledUncontrolledInputs";

import { Link, Routes, Route } from "react-router";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Hehe from "./components/Hehe";
import ProtectedRoutes from "./utils/protectedRoutes";
import Dashboard from "./components/Dashboard";

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
      {/* <ControlledUncontrolledInputs /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protecting the dashboard page */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
