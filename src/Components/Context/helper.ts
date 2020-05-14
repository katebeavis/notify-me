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
    (a: any, b: any) => sortByObject[a['type']] - sortByObject[b['type']]
  );
};
