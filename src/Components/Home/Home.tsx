import React, { useEffect } from 'react';
import styled from 'styled-components';

import useNotify from '../Context/useNotify';
import {
  dummyDataExclActionRequired,
  actionRequired,
  success,
  error,
  promo,
} from '../../dummyData';

const Home = () => {
  const { notify } = useNotify();

  useEffect(() => {
    dummyDataExclActionRequired.map((notification: any) => {
      notify({
        ...notification,
      });
    });
  }, []);

  return (
    <>
      <Header>Notify me</Header>
      <ButtonContainer>
        <Button onClick={() => notify(actionRequired)}>
          Notify me of action required
        </Button>
        <Button onClick={() => notify(success)}>Notify me of success</Button>
        <Button onClick={() => notify(error)}>Notify me of error</Button>
        <Button onClick={() => notify(promo)}>Notify me of promo</Button>
      </ButtonContainer>
    </>
  );
};

export default Home;

const Header = styled.h1`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

const Button = styled.button`
  padding: 1em;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  margin-bottom: 2em;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 0, 0, 0.25);
  }
`;
