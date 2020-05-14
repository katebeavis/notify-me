export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  NEEDED = 'NEEDED',
  PROMOTIONAL = 'WARNING',
}

export interface INotification extends INotificationCallbackProps {
  id: string;
  onClose?: () => void;
}

export interface INotificationCallbackProps {
  type: NotificationType;
  title: string;
  text: string;
  onMore?: () => void;
}
