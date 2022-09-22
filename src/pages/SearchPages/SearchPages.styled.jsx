import styled from 'styled-components';

export const MoviesSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 52px - 52px - 16px);
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 68px - 68px - 36px);
    padding: 20px;
  }
  @media screen and (min-width: 1200px) {
    min-height: calc(100vh - 68px - 68px - 36px);
    padding: 20px;
  }
`;
