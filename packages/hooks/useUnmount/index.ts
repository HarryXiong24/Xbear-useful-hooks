import { useEffect, useRef } from 'react';
import { isFunction } from '../utils';

const useUnmount = (fn: () => void) => {
  const ref = useRef(fn);

  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`
      );
    }
  }

  ref.current = fn;

  useEffect(() => {
    // 卸载钩子
    return () => {
      ref.current();
    };
  }, []);
};

export default useUnmount;
