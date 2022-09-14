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

export const Cont = styled.div`
  display: flex;
  padding: 20px 20px;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const MovieImg = styled.img`
  display: block;
  width: 280px;
  height: 100%;
  border-radius: 5px;
  margin-right: 40px;
`;

export const MovieTitle = styled.h2`
  padding: 0;
  margin-bottom: 10px;
`;
export const MovieVote = styled.div`
  width: max-content;
  background-color: #7dc2fa;
  border-radius: 5px;
  padding: 0 5px;
  display: flex;
`;
export const MovieOverview = styled.p`
  padding: 0;
  margin-top: 10px;
`;

export const AdditionalInformation = styled.ul`
  display: flex;
  flex-direction: row;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
`;
export const CastList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
