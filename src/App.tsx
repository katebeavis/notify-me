import * as React from 'react';
import styled from 'styled-components';

import Notification from './Components/Notification/Notification';
import { NotificationType } from './Types';

const App = () => {
  return (
    <Layout>
      <Header>Notify me</Header>
      <Notification
        type={NotificationType.SUCCESS}
        title={'A title'}
        text={'Some text about many things'}
        onClose={() => console.log('closed')}
        onMore={() => console.log('more')}
      />
    </Layout>
  );
};

export default App;

const Layout = styled.main`
  margin: 10em;
`;

const Header = styled.h1`
  text-align: center;
`;
