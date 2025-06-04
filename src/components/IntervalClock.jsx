import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

export default function IntervalClock() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <div>Interval Clock: {count}</div>;
}
