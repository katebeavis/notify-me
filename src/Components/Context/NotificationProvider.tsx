import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v1 } from 'uuid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import NotificationContext from './NotificationContext';
import useCreateDomElement from './Portal';
import DefaultNotification from '../DefaultNotification/DefaultNotification';
import NotificationContainer from '../NotificationContainer/NotificationContainer';
import { INotification, INotificationCallbackProps } from '../../Types';
import { customSort, getNotificationsToShow, REQUIRED_TYPES } from './helper';

const useNotifications = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const notify = useCallback(
    (notificationPayload: INotificationCallbackProps) => {
      const id = v1();

      const removeNotification = () => {
        setNotifications((notifications) =>
          notifications.filter(
            (notification: INotification) => notification.id !== id
          )
        );
      };

      const notification = {
        id,
        ...(!REQUIRED_TYPES.includes(notificationPayload.type) && {
          onClose: removeNotification,
        }),
        ...notificationPayload,
      };

      setNotifications((notifications: INotification[]) => [
        ...notifications,
        notification,
      ]);
    },
    []
  );

  const sortedNotifications = customSort(notifications);
  const notificationsToShow = getNotificationsToShow(sortedNotifications);

  console.log({ sortedNotifications });

  return { notify, notificationsToShow };
};

const defaultComponents = { Notification: DefaultNotification };

const NotificationProvider = ({
  components = defaultComponents,
  children,
}: {
  components?: any;
  children: React.ReactNode;
}) => {
  const { notify, notificationsToShow } = useNotifications();
  const notificationRoot = useCreateDomElement();
  const { Notification }: any = { ...defaultComponents, ...components };

  return (
    <>
      <NotificationContext.Provider
        value={{
          notify,
        }}
      >
        {children}
      </NotificationContext.Provider>
      {notificationRoot &&
        createPortal(
          <Container>
            <AnimatePresence>
              {notificationsToShow.map((notification: INotification) => (
                <NotificationContainer key={notification.id}>
                  <Notification key={notification.id} {...notification} />
                </NotificationContainer>
              ))}
            </AnimatePresence>
          </Container>,
          notificationRoot
        )}
    </>
  );
};

export default NotificationProvider;

const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
`;
