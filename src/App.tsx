import * as React from 'react';
import styled from 'styled-components';

import NotificationProvider from './Components/Context/NotificationProvider';
import Home from './Components/Home/Home';
import CustomNotification from './Components/CustomNotification/CustomNotification';

const App = () => {
  return (
    <NotificationProvider components={{ Notification: CustomNotification }}>
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
