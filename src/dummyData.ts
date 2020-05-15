import { INotificationCallbackProps, NotificationType } from './Types';

export const actionRequired = {
  type: NotificationType.ACTION_REQUIRED,
  title: 'Action required notification',
  text: "This is an action required notification and can't be dismissed",
  onMore: () => alert('An action'),
};

export const info = {
  type: NotificationType.INFO,
  title: 'Info notification',
  text: "This is an info notification and can't be dismissed",
  onMore: () => alert('An action'),
};

export const success = {
  type: NotificationType.SUCCESS,
  title: 'Success notification',
  text: 'This is a success notification',
  onMore: () => alert('An action'),
};

export const error = {
  type: NotificationType.ERROR,
  title: 'Error notification',
  text: 'This is an error notification',
  onMore: () => alert('An action'),
};

export const promo = {
  type: NotificationType.PROMOTIONAL,
  title: 'Promotional notification',
  text:
    'This is a promotional notification and should not be displayed when action required or info are present',
  onMore: () => alert('An action'),
};

const actionRequiredNotifications: INotificationCallbackProps[] = [
  actionRequired,
  actionRequired,
];

const infoNotifications: INotificationCallbackProps[] = [info];

const successNotifications: INotificationCallbackProps[] = [success, success];

const errorNotifications: INotificationCallbackProps[] = [error];

const promoNotifications: INotificationCallbackProps[] = [promo];

export const dummyData = [
  ...actionRequiredNotifications,
  ...infoNotifications,
  ...successNotifications,
  ...errorNotifications,
  ...promoNotifications,
];

export const dummyDataExclActionRequired = [
  ...successNotifications,
  ...errorNotifications,
  ...promoNotifications,
];
