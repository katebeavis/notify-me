import * as React from 'react';

import {
  Wrapper,
  TextContainer,
  ButtonContainer,
  Title,
  Text,
  Button,
} from './DefaultNotification.styles';
import { INotification } from '../../Types';

const DefaultNotification = ({
  title,
  text,
  onClose,
  onMore,
}: INotification) => {
  return (
    <Wrapper>
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

export default DefaultNotification;
