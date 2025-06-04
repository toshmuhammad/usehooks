import { useState } from "react";
import { useRandomInterval } from "../hooks/useRandomInterval";

const messages = ["Salom", "Assalomu alaykum", "Hello", "Hi", "Yo"];

export default function RandomMessage() {
  const [index, setIndex] = useState(0);

  useRandomInterval(() => {
    setIndex((i) => (i + 1) % messages.length);
  }, 500, 2000);

  return <div>Random Message: {messages[index]}</div>;
}
