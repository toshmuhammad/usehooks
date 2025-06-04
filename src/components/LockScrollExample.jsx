import { useState } from "react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

export default function LockScrollExample() {
  const [open, setOpen] = useState(false);

  if (open) {
    useLockBodyScroll();
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p>Scroll Locked</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
