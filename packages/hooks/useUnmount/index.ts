import { useEffect } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';

const useUnmount = (fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  const fnRef = useLatest(fn);

  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
};

export default useUnmount;
