import { useState, useRef, useCallback } from "react";
import { useInterval } from "./useInterval";

export function useCountdown({ countStart, intervalMs = 1000 }) {
  const [count, setCount] = useState(countStart);
  const isCounting = useRef(false);

  const reset = useCallback(() => {
    setCount(countStart);
    isCounting.current = false;
  }, [countStart]);

  const start = useCallback(() => {
    isCounting.current = true;
  }, []);

  useInterval(() => {
    if (isCounting.current && count > 0) {
      setCount((c) => c - 1);
    }
  }, intervalMs);

  return [count, { start, reset }];
}
