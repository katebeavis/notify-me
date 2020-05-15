import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v1 } from 'uuid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import NotificationContext from './NotificationContext';
import useCreateDomElement from './Portal';
import Notification from '../Notification/Notification';
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

  return { notify, notificationsToShow };
};

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const { notify, notificationsToShow } = useNotifications();
  const notificationRoot = useCreateDomElement();

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
          <NotificationsContainer>
            <AnimatePresence>
              {notificationsToShow.map((notification: INotification) => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </NotificationsContainer>,
          notificationRoot
        )}
    </>
  );
};

export default NotificationProvider;

const NotificationsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
`;
