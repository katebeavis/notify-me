import { INotification, NotificationType } from '../../Types';

const sortBy = [
  NotificationType.NEEDED,
  NotificationType.SUCCESS,
  NotificationType.ERROR,
  NotificationType.PROMOTIONAL,
];

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

export const getNotificationsToShow = (notificationsArr: INotification[]) => {
  const needed = neededNotifications(notificationsArr);
  const notifications =
    needed.length >= 1
      ? removePromotionalNotifications(notificationsArr)
      : notificationsArr;
  return firstThreeNotifications(notifications);
};

const neededNotifications = (notifications: INotification[]) =>
  notifications.filter(
    (notification: INotification) =>
      notification.type === NotificationType.NEEDED
  );

const removePromotionalNotifications = (notifications: INotification[]) =>
  notifications.filter(
    (notification: INotification) =>
      notification.type !== NotificationType.PROMOTIONAL
  );

const firstThreeNotifications = (notifications: INotification[]) => {
  const needed = neededNotifications(notifications);
  return needed.length >= 3 ? needed : notifications.slice(0, 3);
};
