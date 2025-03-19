import React from "react";
import { useEffect, useState } from "react";

function UserProfile({ name }: { name: string }) {
  const [userName, setUserName] = useState(name);

  useEffect(() => {
    setUserName(name);
  }, [name]); // Runs only when `name` prop changes

  return <h1>Welcome, {userName}!</h1>;
}

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [num] = useState(2);
  const [name, setName] = useState("Alice");

  useEffect(() => {
    console.log("This runs after mount i.e. Replicating ComponentDidMount");
    console.log(
      "changing the value by pressing + or - will not make these comments appear again"
    );
  }, []);

  useEffect(() => {
    console.log(
      "This runs whenever component rerenders i.e. Replicating ComponentDidUpdate"
    );
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Tick...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log(
        "Component Unmounted, Timer Cleared i.e. componentWillUnmount"
      );
    };
  }, []);

  const ExpensiveCalculation = React.memo(({ num }: { num: number }) => {
    console.log("Expensive Calculation Running...");
    return <p>Result: {num * 2}</p>;
  });

  return (
    <div className="bg-red-500">
      Hooks
      <div className="flex justify-around">
        <div
          className="bg-amber-200 w-10"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </div>
        {count}
        <div
          className="bg-amber-200 w-10"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </div>
      </div>
      <ExpensiveCalculation num={num} />
      <UserProfile name={name} />
      <button onClick={() => setName("Bob")}>Change Name</button>
    </div>
  );
};

export default Hooks;
