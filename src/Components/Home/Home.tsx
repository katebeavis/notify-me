import React, { useEffect } from 'react';
import styled from 'styled-components';

import useNotify from '../Context/useNotify';
import { INotificationCallbackProps, NotificationType } from '../../Types';

const Home = () => {
  const { notify } = useNotify();

  const neededNotifications: INotificationCallbackProps[] = [
    {
      type: NotificationType.NEEDED,
      title: 'Needed notification',
      text: 'Needed',
      onMore: () => alert('woooooo'),
    },
    {
      type: NotificationType.NEEDED,
      title: 'Needed notification',
      text: 'Needed',
      onMore: () => alert('woooooo'),
    },
  ];

  const successNotifications: INotificationCallbackProps[] = [
    {
      type: NotificationType.SUCCESS,
      title: 'Success notification',
      text: 'Success',
      onMore: () => alert('woooooo'),
    },
  ];

  const errorNotifications: INotificationCallbackProps[] = [
    {
      type: NotificationType.ERROR,
      title: 'Error notification',
      text: 'Error',
      onMore: () => alert('woooooo'),
    },
  ];

  const promoNotifications: INotificationCallbackProps[] = [
    {
      type: NotificationType.PROMOTIONAL,
      title: 'Promo notification',
      text: 'Promo',
      onMore: () => alert('woooooo'),
    },
  ];

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
