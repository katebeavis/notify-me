import styled from 'styled-components';

export const ButtonContainer = styled.div`
  background-color: #808080;
  border-radius: 0 4px 4px 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  & > button:not(:first-child) {
    border-top: 1px solid #5a5a5a;
  }
`;

export const Button = styled.button`
  pointer-events: all;
  transition: background-color 0.15s ease-in-out;
  flex: 1;
  padding: 8px;
  background-color: rgb(255, 255, 255, 0.05);
  outline: 0;
  border: 0;
  color: white;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;
