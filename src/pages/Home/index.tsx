import { Layout } from '@douyinfe/semi-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <h1>I am Home Page!</h1>
        <button
          onClick={() => {
            navigate('/home');
          }}
        >
          Click
        </button>
      </div>
    </Layout>
  );
};

export default Home;
