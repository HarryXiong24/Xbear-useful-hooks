import { IconGithubLogo } from '@douyinfe/semi-icons';
import { Button, Layout, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './index.module.scss';

const Home: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { Title } = Typography;

  return (
    <Layout>
      <div className={Style.home}>
        <Title style={{ margin: '30px 0' }}>Xbear Hooks</Title>
        <div>
          <Button
            size="large"
            theme="light"
            type="tertiary"
            onClick={() => {
              navigate('/state');
            }}
            style={{ marginRight: 20, width: 200 }}
          >
            Hooks 列表
          </Button>
          <Button
            size="large"
            theme="solid"
            type="tertiary"
            icon={<IconGithubLogo />}
            style={{ marginLeft: 20, width: 200 }}
            onClick={() => {
              window.open('https://github.com/HarryXiong24/Xbear-useful-hooks');
            }}
          >
            GitHub
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
