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
  // align-items: center;
  // justify-content: space-between;
  font-size: 18px;
`;
export const IconScale = styled.div`
  transform: scale(-1, 1);
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // padding: 0 20px;
`;
export const SeeMoreBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: #404040;
  padding: 10px;
  border-radius: 5px;

  color: aliceblue;
  -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  :focus,
  :hover {
    scale: 1.1;
    // border-radius: 5px;
    outline: none;
    -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  }
`;
export const SeeMoreLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  color: aliceblue;
  font-size: 14px;
  //   &.active,
  //   &:hover {
  //     color: #7dc2fa;
  //   }
`;
