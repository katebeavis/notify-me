import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { v1 } from 'uuid';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import NotificationContext from './NotificationContext';
import useCreateDomElement from './Portal';
import Notification from '../Notification/Notification';
import {
  INotification,
  INotificationCallbackProps,
  NotificationType,
} from '../../Types';
import { customSort, getNotificationsToShow } from './helper';

const useNotifications = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const notify = useCallback(
    (notificationPayload: INotificationCallbackProps) => {
      const id = v1();

      const canBeClosed = notificationPayload.type !== NotificationType.NEEDED;

      const removeNotification = () => {
        setNotifications((notifications) =>
          notifications.filter((n: INotification) => n.id !== id)
        );
      };

      const notification = {
        id,
        ...(canBeClosed && { onClose: removeNotification }),
        ...notificationPayload,
      };

      setNotifications((notifications: INotification[]) => [
        ...notifications,
        notification,
      ]);
    },
    []
  );

  const notificationsToShow = getNotificationsToShow(notifications);

  const notificationsArr = customSort(notificationsToShow);

  return { notify, notificationsArr };
};

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const { notify, notificationsArr } = useNotifications();
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
              {notificationsArr.map((notification: INotification) => (
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
