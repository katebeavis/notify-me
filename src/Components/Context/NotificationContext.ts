import { createContext } from 'react';

const NotificationContext = createContext({
  notify: (notificationPayload: any) => notificationPayload,
});

export default NotificationContext;
