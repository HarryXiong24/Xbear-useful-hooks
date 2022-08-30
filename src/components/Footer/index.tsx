import React from 'react';
import { Layout } from '@douyinfe/semi-ui';

export const AppFooter = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'var(--semi-color-text-2)',
        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span>Copyright © Harry Xiong. All Rights Reserved. </span>
      </span>
    </Footer>
  );
};

export default AppFooter;
