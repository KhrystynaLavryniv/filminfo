import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundImg from '../../images/imgpreview.jpg';

export const NotFoundPageContainer = styled.div`
  min-height: 100vh;
  background-image: url(${NotFoundImg});
  background-repeat: no-repeat;
  background-size: 100%;
`;
export const GoBackButton = styled.button`
  cursor: pointer;
  display: flex;
  background: transparent;
  border: none;
  font-size: 30px;
`;
export const LinkBack = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  font-weight: 900;
  color: #000;
  text-shadow: -5px -1px 2px rgba(0, 255, 255, 1);
  font-size: 48px;
  margin-left: 10px;
  &.active,
  &:hover {
    color: #fff;
  }
`;
