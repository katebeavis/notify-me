export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  ACTION_REQUIRED = 'ACTION_REQUIRED',
  INFO = 'INFO',
  PROMOTIONAL = 'PROMOTIONAL',
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
