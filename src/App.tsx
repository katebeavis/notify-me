import * as React from 'react';
import styled from 'styled-components';

import NotificationProvider from './Components/Context/NotificationProvider';
import Home from './Components/Home/Home';
import { LARGE } from './Constants';

// import CustomNotification from './Components/CustomNotification/CustomNotification';

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
  @media screen and (min-width: ${LARGE}) {
    margin: 2em 25em;
  }
`;
