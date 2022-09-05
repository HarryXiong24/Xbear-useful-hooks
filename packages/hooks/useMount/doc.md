
## useMount

只在组件初始化时执行的 Hook。

### API

``` typescript
useMount(fn: () => void);
```

### Demo

``` typescript
import React, { useEffect, useState } from 'react';
import { useMount } from 'xbear-hooks/hooks';
import { Toast } from '@douyinfe/semi-ui';

const Demo = () => {
  const [mountInfo, setMountInfo] = useState('');
  const [effectInfo, setEffectInfo] = useState('');
  const [count, setCount] = useState(0);

  useMount(() => {
    setMountInfo(`When count ${count}, mounted!`);
  });

  useEffect(() => {
    setEffectInfo(`When count ${count}, updated!`);
  }, [count]);

  return (
    <div>
      <div key={count}>
        <p>useMount: {mountInfo}</p>
        <p>useEffect: {effectInfo}</p>
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
