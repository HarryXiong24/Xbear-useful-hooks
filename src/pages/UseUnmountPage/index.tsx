import React, { useEffect, useState } from 'react';
import { useBoolean, useMount, useUnmount } from 'xbear-hooks/hooks';
import { Card, Toast } from '@douyinfe/semi-ui';
import doc from 'xbear-hooks/hooks/useUnmount/doc.md';
import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const UseUnmountComponent = (props: {
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
    return () => {
      Toast.info('unmount1111');
    };
  }, [count, setEffectInfo]);

  useEffect(() => {
    return () => {
      Toast.info('unmount');
    };
  }, []);

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

  return (
    <div>
      {state && (
        <UseUnmountComponent
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

const UseUnmountPage = () => {
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

export default UseUnmountPage;
