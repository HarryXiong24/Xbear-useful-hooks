import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { menus } from '@/common/menus';

export const AppSider = () => {
  const navigate = useNavigate();
  const { Sider } = Layout;
  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        key="sider"
        style={{ maxWidth: 300, height: '100%' }}
        defaultSelectedKeys={[`${window.location.pathname}`]}
        items={menus}
        onClick={({ itemKey }) => {
          if (itemKey && itemKey && /(\/.*){2,}/.test(`${itemKey}`)) {
            navigate(`${itemKey}${window.location.search}`);
          }
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </Sider>
  );
};

export default AppSider;
