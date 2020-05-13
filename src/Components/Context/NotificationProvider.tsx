import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v1 } from 'uuid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import NotificationContext from './NotificationContext';
import useCreateDomElement from './Portal';
import Notification from '../Notification/Notification';
import { INotification, INotificationCallbackProps } from '../../Types';

const useNotifications = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const notify = useCallback(
    (notificationPayload: INotificationCallbackProps) => {
      const id = v1();

      const removeNotification = () => {
        setNotifications((notifications) =>
          notifications.filter((n: INotification) => n.id !== id)
        );
      };

      setNotifications((notifications: INotification[]) => [
        ...notifications,
        { id, onClose: removeNotification, ...notificationPayload },
      ]);

      setTimeout(removeNotification, 2000);
    },
    []
  );

  return { notify, notifications };
};

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const { notify, notifications } = useNotifications();
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
              {notifications.map((notification: INotification) => (
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
