import * as React from 'react';

import {
  Wrapper,
  TextContainer,
  ButtonContainer,
  Title,
  Text,
  Button,
} from './Notification.styles';
import { INotification } from '../../Types';

const Notification = ({ title, text, onClose, onMore }: INotification) => {
  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.8, x: 300 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 300 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }}
      positionTransition
    >
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
      <ButtonContainer>
        {onClose && <Button onClick={onClose}>Close</Button>}
        {onMore && <Button onClick={onMore}>More...</Button>}
      </ButtonContainer>
    </Wrapper>
  );
};

export default Notification;
