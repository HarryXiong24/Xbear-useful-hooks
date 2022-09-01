import React, { useEffect, useState } from 'react';
import { useMount, useUpdateEffect } from 'xbear-hooks/hooks';
import { Card } from '@douyinfe/semi-ui';
import doc from 'xbear-hooks/hooks/useUpdateEffect/doc.md';
import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

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

const UseUpdateEffectPage = () => {
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

export default UseUpdateEffectPage;
