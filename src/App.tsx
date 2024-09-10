import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootRouterWrap } from './routes/RouterWrap';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <RootRouterWrap />
      </Router>
    </Layout>
  );
}

export default App;
