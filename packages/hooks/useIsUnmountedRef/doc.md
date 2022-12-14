
## useIsUnmountedRef

获取当前组件是否已经卸载的 Hook。

### API

``` typescript
const isUnmountRef: { current: boolean } = useIsUnmountedRef();
```

### Demo

``` typescript
import React, { useEffect, useState } from 'react';
import {
  useBoolean,
  useMount,
  useUnmount,
  useIsUnmountedRef,
} from 'xbear-hooks/hooks';
import { Toast } from '@douyinfe/semi-ui';

const UseIsUnmountedRefComponent = (props: {
  count: number;
  effectInfo: string;
  mountInfo: string;
  setMountInfo: (value: string) => void;
  setEffectInfo: (value: string) => void;
}) => {
  const { count, effectInfo, mountInfo, setMountInfo, setEffectInfo } = props;
  const isUnmountedRef = useIsUnmountedRef();

  useMount(() => {
    Toast.info(`mount! isUnmountedRef = ${String(isUnmountedRef.current)}`);
    setMountInfo(`When count ${count}, mounted!`);
  });

  useEffect(() => {
    setEffectInfo(`When count ${count}, updated!`);
  }, [count, setEffectInfo]);

  useUnmount(() => {
    Toast.info(`unmount isUnmountedRef = ${String(isUnmountedRef.current)}`);
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

  // 组件销毁的时候调用
  useUnmount(() => {
    return () => {
      Toast.info('unmount');
    };
  });

  return (
    <div>
      {state && (
        <UseIsUnmountedRefComponent
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
