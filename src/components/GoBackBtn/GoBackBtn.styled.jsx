import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackButton = styled.button`
  cursor: pointer;
  display: flex;
  background: transparent;
  border: none;
  font-size: 40px;
`;
export const LinkBack = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-weight: 500;
  color: aliceblue;
  font-size: 28px;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
`;
