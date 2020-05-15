import React, { useEffect } from 'react';
import styled from 'styled-components';

import useNotify from '../Context/useNotify';
import {
  dummyDataExclActionRequired,
  actionRequired,
  info,
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
      <Container>
        <RulesContainer>
          <Header2>Rules:</Header2>
          <ul>
            <Li>There is a defined order of notification types</Li>
            <Li>Certain types of notification can't be dismissed</Li>
            <Li>
              Certain notifications can't be displayed when a specified type of
              notification is displayed
            </Li>
            <Li>
              Only three notifications can be displayed on screen at once unless
              a notification is of a specifed type, in which case they must
              always be shown
            </Li>
          </ul>
          <Header3>This example:</Header3>
          <ul>
            <Li>
              The order is ACTION_REQUIRED, INFO, SUCCESS, ERROR, PROMOTIONAL
            </Li>
            <Li>ACTION_REQUIRED and INFO can't be dismissed</Li>
            <Li>
              PROMOTIONAL can't be displayed when a ACTION_REQUIRED or INFO are
              displayed
            </Li>
            <Li>
              Only three notifications can be displayed on screen at once unless
              they are ACTION_REQUIRED or INFO, in which case they must always
              be shown
            </Li>
          </ul>
        </RulesContainer>
        <ButtonContainer>
          <Button onClick={() => notify(actionRequired)}>
            Notify me of action required
          </Button>
          <Button onClick={() => notify(info)}>Notify me of info</Button>
          <Button onClick={() => notify(success)}>Notify me of success</Button>
          <Button onClick={() => notify(error)}>Notify me of error</Button>
          <Button onClick={() => notify(promo)}>Notify me of promo</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;

const Header = styled.h1`
  text-align: center;
`;

const Header2 = styled.h2`
  text-decoration: underline;
  margin-top: 0;
`;

const Header3 = styled.h3`
  text-decoration: underline;
`;

const Li = styled.li`
  margin-bottom: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const RulesContainer = styled.div`
  flex: 4;
  padding: 0 2em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
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
