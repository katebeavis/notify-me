import * as React from 'react';
import styled from 'styled-components';

import NotificationProvider from './Components/NotificationContext/NotificationProvider';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <NotificationProvider>
      <Layout>
        <Home />
      </Layout>
    </NotificationProvider>
  );
};

export default App;

const Layout = styled.main`
  margin: 10em;
`;
