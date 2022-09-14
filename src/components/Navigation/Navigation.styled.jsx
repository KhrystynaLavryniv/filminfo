import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: aliceblue;
  font-size: 18px;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  color: aliceblue;
  font-size: 3em;
  margin-right: 25px;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
`;
export const LinkFind = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: aliceblue;
  font-size: 1.5em;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
`;
export const LogoText = styled.p`
  font-size: 18px;
`;
