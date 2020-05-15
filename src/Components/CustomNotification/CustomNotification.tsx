import * as React from 'react';

import { INotification, NotificationType } from '../../Types';
import { ButtonContainer, Button } from './CustomNotifcation.styles';

const CustomNotification = ({
  type,
  title,
  text,
  onClose,
  onMore,
}: INotification) => (
  <div
    style={{ background: type === NotificationType.ERROR ? 'red' : 'green' }}
  >
    <p>{title}</p>
    <p>{text}</p>
    <ButtonContainer>
      {onClose && <Button onClick={onClose}>Close</Button>}
      {onMore && <Button onClick={onMore}>More...</Button>}
    </ButtonContainer>
  </div>
);

export default CustomNotification;
