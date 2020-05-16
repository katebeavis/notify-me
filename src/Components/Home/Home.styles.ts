import styled from 'styled-components';

import { LARGE } from '../../Constants';

const pink = '#f98ca4';
const darkblue = '#2f3e9c';

export const Header = styled.h1`
  text-align: center;
  font-size: 15vw;
  margin: 0;
  text-transform: uppercase;
  color: #52d9da;
  letter-spacing: 5px;
  text-shadow: -1px -1px 0 ${darkblue}, 1px -1px 0 ${darkblue},
    -1px 1px 0 ${darkblue}, 1px 1px 0 ${darkblue}, 1px 0px 0px ${pink},
    0px 1px 0px ${pink}, 2px 1px 0px ${pink}, 1px 2px 0px ${pink},
    3px 2px 0px ${pink}, 2px 3px 0px ${pink}, 4px 3px 0px ${pink},
    3px 4px 0px ${pink}, 5px 4px 0px ${pink}, 3px 5px 0px ${darkblue},
    6px 5px 0px ${darkblue}, -1px 2px 0 black, 0 3px 0 ${darkblue},
    1px 4px 0 ${darkblue}, 2px 5px 0px ${darkblue}, 2px -1px 0 ${darkblue},
    3px 0 0 ${darkblue}, 4px 1px 0 ${darkblue}, 5px 2px 0px ${darkblue},
    6px 3px 0 ${darkblue}, 7px 4px 0 ${darkblue}, 10px 10px 4px #45a3a3;
  @media screen and (min-width: ${LARGE}) {
    font-size: 5vw;
  }
`;

export const Header2 = styled.h2`
  margin-top: 0;
`;

export const Header3 = styled.h3``;

export const Ul = styled.ul``;

export const Li = styled.li`
  margin-bottom: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: ${LARGE}) {
    padding-top: 2em;
  }
`;

export const RulesContainer = styled.div`
  padding: 0 1em;
  @media screen and (min-width: ${LARGE}) {
    flex: 4;
    padding: 0 2em;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2em;
  @media screen and (min-width: ${LARGE}) {
    flex: 1;
    margin: 0 5em;
    justify-content: space-around;
    padding-top: 0;
  }
`;

export const Button = styled.button`
  padding: 1em;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background-color: ${darkblue};
  border-radius: 10px;
  margin-bottom: 2em;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 0, 0, 0.25);
  }
`;
