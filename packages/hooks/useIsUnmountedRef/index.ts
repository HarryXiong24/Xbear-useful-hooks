import { useEffect, useRef } from 'react';

const useIsUnmountedRef = () => {
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);

  return isUnmountedRef;
};

export default useIsUnmountedRef;
