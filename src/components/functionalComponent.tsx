import {
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
  forwardRef,
} from "react";

// Define the type for the ref methods
export interface InputHandle {
  focusInput: () => void;
}

// Functional Component with `forwardRef`
const CustomInput = forwardRef<InputHandle, { initialValue: string }>(
  ({ initialValue }, ref) => {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sync state when props change
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    // Expose focus method to parent
    useImperativeHandle(ref, () => ({
      focusInput: () => {
        inputRef.current?.focus();
      },
    }));

    return <input ref={inputRef} value={value} readOnly />;
  }
);

// Parent Component
export default function App() {
  const inputRef = useRef<InputHandle>(null);

  return (
    <div>
      <CustomInput ref={inputRef} initialValue="Hello" />
      <button onClick={() => inputRef.current?.focusInput()}>
        Focus Input
      </button>
    </div>
  );
}
