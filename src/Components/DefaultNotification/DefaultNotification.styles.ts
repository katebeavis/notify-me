import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #676767;
  color: white;
  width: 350px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 2px;
`;

export const TextContainer = styled.div`
  padding: 20px 28px 24px 20px;
  flex: 3;
`;

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

export const Title = styled.div`
  line-height: 1.3;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Text = styled.div`
  line-height: 1.3;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
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
