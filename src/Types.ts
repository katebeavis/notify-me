export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export interface INotification {
  id: string;
  type: NotificationType;
  title: string;
  text: string;
  onClose: () => void;
  onMore?: () => void;
}

export interface INotificationCallbackProps {
  type: NotificationType;
  title: string;
  text: string;
  onMore?: () => void;
}
