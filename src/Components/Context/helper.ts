import { INotification, NotificationType } from '../../Types';

const sortBy = [
  NotificationType.ACTION_REQUIRED,
  NotificationType.INFO,
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

export const getNotificationsToShow = (notifications: INotification[]) => {
  const requiredNotifications = getNotificationByType({
    notifications,
    requiredTypes: [NotificationType.ACTION_REQUIRED],
  });
  const notificationsToShow =
    requiredNotifications.length >= 1
      ? removeNotificationByType({
          notifications,
          requiredTypes: [NotificationType.PROMOTIONAL],
        })
      : notifications;
  return firstThreeNotifications(notificationsToShow);
};

const getNotificationByType = ({
  notifications,
  requiredTypes,
}: {
  notifications: INotification[];
  requiredTypes: NotificationType[];
}) =>
  notifications.filter((notification: INotification) =>
    requiredTypes.includes(notification.type)
  );

const removeNotificationByType = ({
  notifications,
  requiredTypes,
}: {
  notifications: INotification[];
  requiredTypes: NotificationType[];
}) =>
  notifications.filter(
    (notification: INotification) => !requiredTypes.includes(notification.type)
  );

const firstThreeNotifications = (notifications: INotification[]) => {
  const requiredNotifications = getNotificationByType({
    notifications,
    requiredTypes: [NotificationType.ACTION_REQUIRED],
  });
  return requiredNotifications.length >= 3
    ? requiredNotifications
    : notifications.slice(0, 3);
};
