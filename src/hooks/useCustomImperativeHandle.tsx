import React, { useImperativeHandle, useRef, forwardRef } from "react";

// Define the type of the methods we want to expose
export interface InputHandle {
  focusInput: () => void;
}

export function useCustomImperativeHandle(ref: React.Ref<InputHandle>) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  return inputRef;
}

const CustomInput = forwardRef<InputHandle>((_, ref) => {
  const inputRef = useCustomImperativeHandle(ref);

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
});

export default CustomInput;
