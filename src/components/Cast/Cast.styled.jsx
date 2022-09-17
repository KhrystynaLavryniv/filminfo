import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const CastItem = styled.li`
  width: calc(100% / 7 - 10px);
  margin-bottom: 30px;
  text-align: center;
  border-radius: 5px;
`;
export const CastImg = styled.img`
  display: block;
  width: 100%;
  height: 75%;
  border-radius: 5px;
`;
export const CastCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
