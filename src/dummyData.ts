import { INotificationCallbackProps, NotificationType } from './Types';

export const actionRequired = {
  type: NotificationType.ACTION_REQUIRED,
  title: 'Action required notification',
  text: 'Action required',
  onMore: () => alert('woooooo'),
};

export const info = {
  type: NotificationType.INFO,
  title: 'Info notification',
  text: 'Info',
  onMore: () => alert('woooooo'),
};

export const success = {
  type: NotificationType.SUCCESS,
  title: 'Success notification',
  text: 'Success',
  onMore: () => alert('woooooo'),
};

export const error = {
  type: NotificationType.ERROR,
  title: 'Error notification',
  text: 'Error',
  onMore: () => alert('woooooo'),
};

export const promo = {
  type: NotificationType.PROMOTIONAL,
  title: 'Promo notification',
  text: 'Promo',
  onMore: () => alert('woooooo'),
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
