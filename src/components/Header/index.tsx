import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Nav, Button } from '@douyinfe/semi-ui';
import {
  IconSemiLogo,
  IconGithubLogo,
  IconHelpCircle,
} from '@douyinfe/semi-icons';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { Header } = Layout;

  return (
    <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <div>
        <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
          <Nav.Header>
            <IconSemiLogo
              style={{ width: '96px', height: '36px', fontSize: 36 }}
              onClick={() => {
                navigate('/');
              }}
            />
          </Nav.Header>
          <span
            style={{
              color: 'var(--semi-color-text-2)',
            }}
          >
            <span
              style={{
                marginRight: '24px',
                color: 'var(--semi-color-text-0)',
                fontWeight: '600',
              }}
            >
              模版推荐
            </span>
            <span style={{ marginRight: '24px' }}>所有模版</span>
            <span>我的模版</span>
          </span>
          <Nav.Footer>
            <Button
              theme="borderless"
              icon={<IconGithubLogo size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
            <Button
              theme="borderless"
              icon={<IconHelpCircle size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
            />
          </Nav.Footer>
        </Nav>
      </div>
    </Header>
  );
};

export default AppHeader;
