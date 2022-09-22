import styled from 'styled-components';
export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: black;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 10px 30px;
  }
`;
