import { useCallback } from "react";

const useDebouncedCallback = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  return useCallback(
    (...args: T) => {
      const handler = setTimeout(() => {
        callback(...args);
      }, delay);

      return () => clearTimeout(handler);
    },
    [callback, delay]
  );
};

export default useDebouncedCallback;
