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
        style={{ maxWidth: 220, height: '100%' }}
        defaultSelectedKeys={['/home']}
        items={menus}
        onClick={({ itemKey }) => {
          navigate(`${itemKey}${window.location.search}`);
        }}
        footer={{
          collapseButton: true,
        }}
      />
    </Sider>
  );
};

export default AppSider;
