
## useBoolean

优雅的管理 boolean 状态的 Hook。

### API

``` typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

### Demo

``` typescript
import React from 'react';
import { useBoolean } from 'xbear-hooks/hooks';

const Demo = () => {
  const [state, { toggle, setTrue, setFalse, set }] = useBoolean(true);

  return (
    <div>
      <p>Effects: {JSON.stringify(state)}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </button>
        <button type="button" onClick={setTrue} style={{ marginRight: 16 }}>
          Set true
        </button>
        <button
          type="button"
          onClick={() => {
            set(false);
          }}
        >
          Set
        </button>
      </p>
    </div>
  );
};
```
