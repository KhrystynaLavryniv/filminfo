import styled from 'styled-components';

export const TrailerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const TrailerItem = styled.li`
  margin-bottom: 15px;
  width: 100%;

  & iframe {
    width: 100%;
    height: auto;
    @media screen and (min-width: 768px) {
      width: 100%;
      height: 400px;
    }
    @media screen and (min-width: 1200px) {
      width: 100%;
      height: 500%;
    }
  }
`;
