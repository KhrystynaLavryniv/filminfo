import styled from 'styled-components';

export const SearchOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    align-items: baseline;
  }
  @media screen and (min-width: 1200px) {
    align-items: baseline;
  }
`;
export const PageContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px;
  }
`;
