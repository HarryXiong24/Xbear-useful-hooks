import { useMemo, useState } from 'react';

export interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}

export const useBoolean = (
  defaultValue = false
): [state: boolean, actions: Actions] => {
  const [state, setState] = useState(defaultValue);

  const actions: Actions = useMemo(() => {
    const set = (value: boolean) => {
      setState(value);
    };
    const setTrue = () => set(true);
    const setFalse = () => set(false);
    const toggle = () => set(!state);
    return {
      set,
      setTrue,
      setFalse,
      toggle,
    };
  }, [state]);

  return [state, actions];
};

export default useBoolean;
