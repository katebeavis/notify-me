import React, { useContext, createContext, useState, useCallback } from 'react';
import { v1 } from 'uuid';

const useNotifications = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  const notify = useCallback((notificationPayload) => {
    console.log('called');
    const id = v1();

    const removeNotification = () => {
      setNotifications((notifications) =>
        notifications.filter((n) => n.id !== id)
      );
    };

    setNotifications((notifications) => [
      ...notifications,
      { id, onClose: removeNotification, ...notificationPayload },
    ]);

    setTimeout(removeNotification, 2000);
  }, []);

  return { notify, notifications };
};

export const NotifyContext = createContext({
  notify: (notificationPayload: any) => notificationPayload,
  notifications: [''],
});

export const useNotify = () => useContext(NotifyContext);

const NotificationProvider = ({ children }: any) => {
  const { notify, notifications } = useNotifications();
  console.log(notifications);
  return (
    <NotifyContext.Provider
      value={{
        notify,
        notifications,
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};

export default NotificationProvider;
