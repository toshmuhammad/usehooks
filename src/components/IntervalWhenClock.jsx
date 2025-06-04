import { useState } from "react";
import { useIntervalWhen } from "../hooks/useIntervalWhen";

export default function IntervalWhenClock() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useIntervalWhen(() => {
    setCount((c) => c + 1);
  }, 1000, running);

  return (
    <div>
      Interval When Clock: {count}
      <button onClick={() => setRunning(!running)} className="ml-2">
        {running ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
