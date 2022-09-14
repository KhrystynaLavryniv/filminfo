import React from 'react';
import { Container } from './Footer.styled';
import { LogoLink, LogoText } from '../Navigation/Navigation.styled';
import { GiFilmProjector } from 'react-icons/gi';
const Footer = () => {
  return (
    <Container>
      <LogoLink to="/">
        <GiFilmProjector />
        <LogoText>filminfo</LogoText>
      </LogoLink>
    </Container>
  );
};

export default Footer;
