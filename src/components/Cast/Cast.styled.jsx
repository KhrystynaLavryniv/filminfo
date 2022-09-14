import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CastItem = styled.li`
  width: calc(100% / 6 - 20px);
  margin-bottom: 30px;
  border-radius: 5px;
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px;
`;
export const CastCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
