import React from 'react';
import styled from 'styled-components';

import { useNotify } from '../NotificationContext/NotificationProvider';

const Home = () => {
  const { notify, notifications } = useNotify();
  console.log(notifications);
  return (
    <>
      <Header>Notify me</Header>
      <button
        onClick={() =>
          notify({
            type: 'success',
            title: 'A title',
            text: 'Text',
            onMore: () => alert('woooooo'),
          })
        }
      >
        Trigger
      </button>
    </>
  );
};

export default Home;

const Header = styled.h1`
  text-align: center;
`;
