import { useState } from "hono/jsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button class="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
