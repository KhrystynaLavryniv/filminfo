import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const TitleText = styled.h2`
  text-align: center;
  @media screen and (min-width: 768px) {
  }
`;
export const IconScale = styled.div`
  transform: scale(-1, 1);
`;
// export const Div = styled.div`
//   display: flex;
//   flex-direction: row;
//   font-size: 18px;
// `;
export const SeeMoreBtnDesk = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;

    cursor: pointer;
    border: none;
    background-color: #212c39;
    padding: 10px;
    border-radius: 5px;
    color: aliceblue;
    :focus,
    :hover {
      scale: 1.1;
      outline: none;
      -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
      -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
      box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    }
  }
`;
export const SeeMoreBtn = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid aliceblue;
  background-color: #212c39;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 5px;
  color: aliceblue;
  :focus,
  :hover {
    scale: 1.1;
    outline: none;
    -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const SeeMoreLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  color: aliceblue;
  font-size: 14px;
`;
