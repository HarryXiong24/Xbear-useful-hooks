import React from 'react';
import { useSetState } from 'xbear-hooks/hooks';
import doc from 'xbear-hooks/hooks/useSetState/doc.md';
import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
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

const UseSetStatePage = () => {
  return (
    <>
      <Card>
        <ReactMarkDown
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
          // eslint-disable-next-line react/no-children-prop
          children={doc}
        />
        <Card>
          <Demo />
        </Card>
      </Card>
    </>
  );
};

export default UseSetStatePage;
