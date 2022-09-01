import React from 'react';
import { useBoolean } from 'xbear-hooks/hooks';
import { Card } from '@douyinfe/semi-ui';
import doc from 'xbear-hooks/hooks/useBoolean/doc.md';
import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

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

const UseBooleanPage = () => {
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

export default UseBooleanPage;
