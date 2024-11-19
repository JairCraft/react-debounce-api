import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
