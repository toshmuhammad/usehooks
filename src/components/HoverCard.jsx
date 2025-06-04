import { useRef } from "react";
import { useHover } from "../hooks/useHover";

export default function HoverCard() {
  const ref = useRef();
  const isHovering = useHover(ref);

  return (
    <div
      ref={ref}
      className="p-4 border rounded w-48 text-center"
      style={{ background: isHovering ? "#ffeaa7" : "#dfe6e9" }}
    >
      {isHovering ? "Hovering!" : "Hover me"}
    </div>
  );
}
