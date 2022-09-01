import { useState } from 'react';

export interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export const useLocalStorage = <T>(
  key: string,
  options: Options<T>
): [T, (value?: T | ((previousState: T) => T)) => void] => {
  const [localStorage, setLocalStorage] = useState(0);

  return [localStorage, setLocalStorage];
};

export default useLocalStorage;
