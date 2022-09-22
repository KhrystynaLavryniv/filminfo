import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled.p`
  font-size: 14px;
  display: none;
  text-align: center;
  :hover {
    display: block;
  }
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
  width: calc(100% / 2 - 20px);
  height: auto;
  margin: 10px;
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

  @media screen and (min-width: 768px) {
    width: calc(100% / 4 - 20px);
    margin: 15px 10px;
  }
  @media screen and (min-width: 1200px) {
    width: calc(100% / 5 - 20px);
    margin: 15px 10px;
  }
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  :hover p {
    display: block;
  }
  :hover span {
    display: none;
  }
`;
export const MovieRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px 2px 10px;
  text-align: center;

  height: 25px;
  color: aliceblue;
  font-size: 12px;
  @media screen and (min-width: 1200px) {
    padding: 10px 10px 0 10px;
    font-size: 14px;
  }
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
