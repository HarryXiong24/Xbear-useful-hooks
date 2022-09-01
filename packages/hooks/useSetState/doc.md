
## useSetState

管理 object 类型 state 的 Hooks，用法与 class 组件的 `this.setState` 基本一致。

### API

``` typescript
const [state, setState] = useSetState<T extends Record<string, any>>(
  initialState: T = {} as T
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void]
```

### Demo

``` typescript
import React from 'react';
import { useSetState } from 'xbear-hooks/hooks';
import { Card } from '@douyinfe/semi-ui';

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}


const Demo = () => {
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: 'world' })}>
          set hello
        </button>
        <button
          type="button"
          onClick={() => setState({ foo: 'bar' })}
          style={{ margin: '0 8px' }}
        >
          set foo
        </button>
        <button
          type="button"
          onClick={() =>
            setState((prev: { count: number }) => ({
              count: prev.count + 1,
            }))
          }
        >
          count + 1
        </button>
      </p>
    </div>
  );
};
```
