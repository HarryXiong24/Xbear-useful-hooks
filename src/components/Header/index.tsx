import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Nav, Button } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconGithubLogo } from '@douyinfe/semi-icons';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { Header } = Layout;

  return (
    <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        key="top"
        mode="horizontal"
        onClick={({ itemKey }) => {
          navigate(itemKey as string);
        }}
        items={[
          {
            itemKey: '/',
            text: '首页',
          },
          {
            itemKey: '/state',
            text: 'API',
          },
        ]}
        header={
          <IconSemiLogo
            style={{ width: '96px', height: '36px', fontSize: 36 }}
            onClick={() => {
              navigate('/');
            }}
          />
        }
        footer={
          <>
            <Button
              theme="borderless"
              icon={<IconGithubLogo size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
              onClick={() => {
                window.open(
                  'https://github.com/HarryXiong24/Xbear-useful-hooks'
                );
              }}
            />
          </>
        }
      />
    </Header>
  );
};

export default AppHeader;
