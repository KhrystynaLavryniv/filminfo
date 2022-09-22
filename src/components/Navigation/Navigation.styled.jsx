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
  padding: 8px;
  font-weight: 500;
  color: aliceblue;
  font-size: 12px;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
  @media screen and (min-width: 768px) {
    padding: 12px;
    font-size: 18px;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  color: aliceblue;
  font-size: 2em;
  margin-right: 15px;
  &.active,
  &:hover {
    color: #7dc2fa;
  }
  @media screen and (min-width: 768px) {
    font-size: 3em;
    margin-right: 25px;
  }
`;
// export const LinkFind = styled(NavLink)`
//   display: block;
//   text-decoration: none;
//   padding: 8px;
//   font-weight: 500;
//   color: aliceblue;
//   font-size: 1.5em;
//   &.active,
//   &:hover {
//     color: #7dc2fa;
//   }
//   @media screen and (min-width: 768px) {
//     padding: 12px;
//     font-size: 1.5em;
//   }
//   @media screen and (min-width: 1200px) {
//   }
// `;
export const LogoText = styled.p`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
