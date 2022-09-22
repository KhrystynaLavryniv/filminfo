import styled from 'styled-components';

export const CastListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CastItem = styled.li`
  width: calc(100% / 3 - 10px);
  margin-bottom: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    width: calc(100% / 5 - 10px);
    margin-bottom: 30px;
    font-size: 12px;
  }
  @media screen and (min-width: 1200px) {
    width: calc(100% / 8 - 10px);
    margin-bottom: 30px;
    font-size: 14px;
  }
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  height: 70%;
  border-radius: 5px;
`;
export const CastCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
