import { Component, createRef } from "react";

// Define the props & state types
interface InputProps {
  initialValue: string;
}

interface InputState {
  value: string;
}

class CustomInput extends Component<InputProps, InputState> {
  private inputRef = createRef<HTMLInputElement>();

  constructor(props: InputProps) {
    super(props);
    this.state = { value: props.initialValue };
  }

  // Sync state when props change
  static getDerivedStateFromProps(
    nextProps: InputProps,
    prevState: InputState
  ) {
    if (nextProps.initialValue !== prevState.value) {
      return { value: nextProps.initialValue };
    }
    return null;
  }

  focusInput = () => {
    this.inputRef.current?.focus();
  };

  render() {
    return <input ref={this.inputRef} value={this.state.value} readOnly />;
  }
}

// Parent Component
export default function App() {
  const inputRef = createRef<CustomInput>();

  return (
    <div>
      <CustomInput ref={inputRef} initialValue="Hello" />
      <button onClick={() => inputRef.current?.focusInput()}>
        Focus Input
      </button>
    </div>
  );
}
