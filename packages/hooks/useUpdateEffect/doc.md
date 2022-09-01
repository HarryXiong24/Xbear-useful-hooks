
## useUpdateEffect

useUpdateEffect 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。

### API

API 与 React.useEffect 完全一致。

``` typescript
useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)
```

### Demo

``` typescript
import React, { useEffect, useState } from 'react';
import { useMount, useUpdateEffect } from 'xbear-hooks/hooks';

const Demo = () => {
  const [mountInfo, setMountInfo] = useState('');
  const [effectInfo, setEffectInfo] = useState('');
  const [updateInfo, setUpdateInfo] = useState('');
  const [count, setCount] = useState(0);

  useMount(() => {
    setMountInfo(`When count ${count}, mounted!`);
  });

  useEffect(() => {
    setEffectInfo(`When count ${count}, effect executed!`);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateInfo(`When count ${count}, updated!`);
  }, [count]);

  return (
    <div>
      <div key={count}>
        <p>useMount: {mountInfo}</p>
        <p>useEffect: {effectInfo}</p>
        <p>updateInfo: {updateInfo}</p>
        <p>Count: {count}</p>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count++
      </button>
    </div>
  );
};
```
