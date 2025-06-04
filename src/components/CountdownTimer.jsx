import { useCountdown } from "../hooks/useCountdown";

export default function CountdownTimer() {
  const [count, { start, reset }] = useCountdown({
    countStart: 10,
    intervalMs: 1000,
  });

  return (
    <div>
      Countdown: {count}
      <button onClick={start} className="ml-2">Start</button>
      <button onClick={reset} className="ml-2">Reset</button>
    </div>
  );
}
