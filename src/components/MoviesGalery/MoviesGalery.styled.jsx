import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled.div`
  font-size: 14px;
  text-align: center;
`;
export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-right: -10px;
`;
export const MovieItem = styled.li`
  position: relative;
  width: calc(100% / 5 - 20px);
  height: auto;
  margin: 15px 10px;
  border-radius: 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  :hover {
    scale: 1.05;

    -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
    -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
    box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
export const MovieRate = styled.div`
  padding: 10px;
  color: aliceblue;
  font-size: 14px;
`;
export const MovieVote = styled.div`
  width: max-content;
  background-color: #7dc2fa;
  border-radius: 5px;
  padding: 0 5px;
  display: flex;
  position: absolute;
  top: 2px;
  left: 2px;
`;
export const MovieImg = styled.img`
  display: block;
  width: 100%;
  height: 85%;
  border-radius: 5px 5px 0 0;
`;
