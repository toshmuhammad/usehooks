import IntervalClock from "./components/IntervalClock";
import IntervalWhenClock from "./components/IntervalWhenClock";
import RandomMessage from "./components/RandomMessage";
import CountdownTimer from "./components/CountdownTimer";
import HoverCard from "./components/HoverCard";
import FirstRenderStatus from "./components/FirstRenderStatus";
import LockScrollExample from "./components/LockScrollExample";

export default function App() {
  return (
    <div className="space-y-6 p-4">
      <IntervalClock />
      <IntervalWhenClock />
      <RandomMessage />
      <CountdownTimer />
      <HoverCard />
      <FirstRenderStatus />
      <LockScrollExample />
    </div>
  );
}
