// hooks/useRandomInterval.js
import { useEffect, useRef } from "react";

export function useRandomInterval(callback, minDelay, maxDelay) {
  const timeoutId = useRef();
  const savedCallback = useRef();

  function runInterval() {
    const timeout = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
    timeoutId.current = setTimeout(() => {
      savedCallback.current();
      runInterval();
    }, timeout);
  }

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    runInterval();
    return () => clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);
}
