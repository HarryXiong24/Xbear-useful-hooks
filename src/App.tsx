import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Router } from '@/router';
import AppSider from './components/Sider';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Guide />} />
    </Routes>
  );
};

const Guide = () => {
  const { Content } = Layout;
  return (
    <Layout className="App">
      <AppHeader />
      <Layout>
        <AppSider />
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Router />
        </Content>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default App;
