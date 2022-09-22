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
export const MovieDetalisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 52px - 52px - 40px);
    padding: 20px;
  }
  @media screen and (min-width: 1200px) {
    min-height: calc(100vh - 68px - 68px - 40px);
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 20px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
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
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 40px;
  }
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
export const MovieDetailsText = styled.div`
  display: flex;
  padding: 0;
  margin-top: 10px;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-end;
  }
  @media screen and (min-width: 1200px) {
    align-items: flex-end;
  }
`;
export const MovieDetailsOption = styled.p`
  width: 140px;
`;
export const MovieDetailsOverview = styled.h3`
  margin-top: 10px;
`;

export const AdditionalInformation = styled.ul`
  display: flex;
  flex-direction: row;
  border-top: 1px black solid;
  border-bottom: 1px black solid;
`;
