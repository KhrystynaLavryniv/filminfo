import styled from 'styled-components';

export const MovieByGanreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  justify-content: center;
`;
export const MovieByGanreItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const GanreBtn = styled.button`
border-radius: 5px;
border-color: aliceblue;
color:aliceblue;
background-color: transparent;
    :hover {
    cursor: pointer;
    scale: 1.05;
    background-color: #7dc2fa;
  
`;
