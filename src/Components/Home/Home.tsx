import React, { useEffect } from 'react';
import styled from 'styled-components';

import useNotify from '../Context/useNotify';
import { INotificationCallbackProps, NotificationType } from '../../Types';

const Home = () => {
  const { notify } = useNotify();

  const needed = {
    type: NotificationType.NEEDED,
    title: 'Needed notification',
    text: 'Needed',
    onMore: () => alert('woooooo'),
  };

  const success = {
    type: NotificationType.SUCCESS,
    title: 'Success notification',
    text: 'Success',
    onMore: () => alert('woooooo'),
  };

  const error = {
    type: NotificationType.ERROR,
    title: 'Error notification',
    text: 'Error',
    onMore: () => alert('woooooo'),
  };

  const promo = {
    type: NotificationType.PROMOTIONAL,
    title: 'Promo notification',
    text: 'Promo',
    onMore: () => alert('woooooo'),
  };

  const neededNotifications: INotificationCallbackProps[] = [needed, needed];

  const successNotifications: INotificationCallbackProps[] = [success];

  const errorNotifications: INotificationCallbackProps[] = [error];

  const promoNotifications: INotificationCallbackProps[] = [promo];

  useEffect(() => {
    const notifications = [
      ...neededNotifications,
      ...successNotifications,
      ...errorNotifications,
    ];

    const toShow =
      neededNotifications.length >= 1
        ? notifications
        : notifications.concat(promoNotifications);
    toShow.map((notification: any) => {
      notify({
        ...notification,
      });
    });
  }, []);

  return (
    <>
      <Header>Notify me</Header>
      <ButtonContainer>
        <Button onClick={() => notify(needed)}>Notify me of needed</Button>
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
