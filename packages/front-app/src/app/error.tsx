"use client";

import { useEffect } from "react";

export const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          ()=> reset()
        }
      >
        try again
      </button>
    </div>
  );
}