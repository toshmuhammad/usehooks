// hooks/useHover.js
import { useRef, useState, useEffect } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [ref, hovered];
}
