import { useState, useCallback } from "react";

type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;

const useLoading = <T extends any[], R>(asyncFunction: AsyncFunction<T, R>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: T): Promise<R> => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await asyncFunction(...args);
        setIsLoading(false);
        return result;
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
        throw err;
      }
    },
    [asyncFunction]
  );

  return { execute, isLoading, error };
};

export default useLoading;
