import { INotification, NotificationType } from '../../Types';

const sortBy = [
  NotificationType.ACTION_REQUIRED,
  NotificationType.INFO,
  NotificationType.SUCCESS,
  NotificationType.ERROR,
  NotificationType.PROMOTIONAL,
];

export const REQUIRED_TYPES = [NotificationType.ACTION_REQUIRED];
const OPTIONAL_TYPES = [NotificationType.PROMOTIONAL];

export const customSort = (notifications: INotification[]) => {
  const sortByObject = sortBy.reduce((obj, item, index) => {
    return {
      ...obj,
      [item]: index,
    };
  }, {});
  return notifications.sort(
    (a: INotification, b: INotification) =>
      sortByObject[a['type']] - sortByObject[b['type']]
  );
};

export const getNotificationsToShow = (notifications: INotification[]) => {
  const requiredNotifications = getRequiredNotifications(notifications);
  const notificationsToShow =
    requiredNotifications.length >= 1
      ? removeOptionalNotifications(notifications)
      : notifications;
  return firstThreeNotifications(notificationsToShow);
};

const getRequiredNotifications = (notifications: INotification[]) =>
  notifications.filter((notification: INotification) =>
    REQUIRED_TYPES.includes(notification.type)
  );

const removeOptionalNotifications = (notifications: INotification[]) =>
  notifications.filter(
    (notification: INotification) => !OPTIONAL_TYPES.includes(notification.type)
  );

const firstThreeNotifications = (notifications: INotification[]) => {
  const requiredNotifications = getRequiredNotifications(notifications);
  return requiredNotifications.length >= 3
    ? requiredNotifications
    : notifications.slice(0, 3);
};
