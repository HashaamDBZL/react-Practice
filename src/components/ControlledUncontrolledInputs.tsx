import React, { useState, useRef, FormEvent } from "react";

const ControlledUncontrolledInputs: React.FC = () => {
  // Controlled Input (State Managed)
  const [controlledValue, setControlledValue] = useState<string>("");

  // Uncontrolled Input (Ref Managed)
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  // Submit Handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Controlled: ${controlledValue}, Uncontrolled: ${uncontrolledRef.current?.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="controlled">Controlled Input:</label>
        <input
          id="controlled"
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="uncontrolled">Uncontrolled Input:</label>
        <input id="uncontrolled" type="text" ref={uncontrolledRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledUncontrolledInputs;
