import React, { useEffect } from 'react';

import useNotify from '../Context/useNotify';
import {
  dummyDataExclActionRequired,
  actionRequired,
  info,
  success,
  error,
  promo,
} from '../../dummyData';
import {
  Header,
  Header2,
  Header3,
  Ul,
  Li,
  Container,
  RulesContainer,
  ButtonContainer,
  Button,
} from './Home.styles';

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
          <Ul>
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
          </Ul>
          <Header3>This example:</Header3>
          <Ul>
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
          </Ul>
        </RulesContainer>
        <ButtonContainer>
          <Button onClick={() => notify(actionRequired)}>
            Action required
          </Button>
          <Button onClick={() => notify(info)}>Info</Button>
          <Button onClick={() => notify(success)}>Success</Button>
          <Button onClick={() => notify(error)}>Error</Button>
          <Button onClick={() => notify(promo)}>Promotional</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Home;
