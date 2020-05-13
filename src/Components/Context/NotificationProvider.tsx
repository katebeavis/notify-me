import React, { useState, useCallback } from 'react';
import { v1 } from 'uuid';

import NotificationContext from './NotificationContext';
import { INotification, INotificationCallbackProps } from '../../Types';

const useNotifications = () => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const notify = useCallback(
    (notificationPayload: INotificationCallbackProps) => {
      const id = v1();

      const removeNotification = () => {
        setNotifications((notifications) =>
          notifications.filter((n) => n.id !== id)
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
  const { notify } = useNotifications();

  return (
    <NotificationContext.Provider
      value={{
        notify,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
