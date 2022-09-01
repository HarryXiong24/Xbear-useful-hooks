import React from 'react';
import { useLocalStorage } from 'xbear-hooks/hooks';
import { Card } from '@douyinfe/semi-ui';
import doc from 'xbear-hooks/hooks/useLocalStorage/doc.md';
import ReactMarkDown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const Demo = () => {
  return null;
};

const UseLocalStoragePage = () => {
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

export default UseLocalStoragePage;
