import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-12">
      <h1 className="text-center text-white text-3xl mb-12 text-shadow">Counter using Redux toolkit</h1>
      <div className="flex items-center justify-center gap-10">
        <button
          aria-label="Increment value"
          className="btn btn-primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-2xl">Count: {count}</span>
        <button
          className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
