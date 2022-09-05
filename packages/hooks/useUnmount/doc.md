
## useUnmount

在组件卸载（unmount）时执行的 Hook。

### API

``` typescript
useUnmount(fn: () => void);
```

### Demo

``` typescript
import React, { useEffect, useState } from 'react';
import { useBoolean, useMount, useUnmount } from 'xbear-hooks/hooks';

const MyComponent = (props: {
  count: number;
  effectInfo: string;
  mountInfo: string;
  setMountInfo: (value: string) => void;
  setEffectInfo: (value: string) => void;
}) => {
  const { count, effectInfo, mountInfo, setMountInfo, setEffectInfo } = props;

  useMount(() => {
    setMountInfo(`When count ${count}, mounted!`);
  });

  useEffect(() => {
    setEffectInfo(`When count ${count}, updated!`);
  }, [count, setEffectInfo]);

  useUnmount(() => {
    Toast.info('unmount');
  });

  return (
    <div key={count}>
      <p>useMount: {mountInfo}</p>
      <p>useEffect: {effectInfo}</p>
      <p>Count: {count}</p>
    </div>
  );
};

const Demo = () => {
  const [mountInfo, setMountInfo] = useState('');
  const [effectInfo, setEffectInfo] = useState('');
  const [count, setCount] = useState(0);
  const [state, { toggle }] = useBoolean(true);

  useMount(() => {
    setMountInfo(`When count ${count}, mounted!`);
  });

  useEffect(() => {
    setEffectInfo(`When count ${count}, updated!`);
  }, [count]);

  useUnmount(() => {
    Toast.info('unmount');
  });

  return (
    <div>
      {state && (
        <MyComponent
          mountInfo={mountInfo}
          effectInfo={effectInfo}
          count={count}
          setMountInfo={setMountInfo}
          setEffectInfo={setEffectInfo}
        />
      )}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{ marginRight: 10 }}
      >
        count++
      </button>
      <button onClick={toggle}>{state ? 'unmount' : 'mount'}</button>
    </div>
  );
};

```
