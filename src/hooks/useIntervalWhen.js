// hooks/useIntervalWhen.js
import { useEffect, useRef } from "react";

export function useIntervalWhen(callback, delay, when) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!when || delay === null) return;

    const tick = () => savedCallback.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay, when]);
}
