import { NavContainer, Link, LogoLink, LogoText } from './Navigation.styled';
import { GiFilmProjector } from 'react-icons/gi';

export const Navigation = () => {
  return (
    <>
      <NavContainer>
        <LogoLink to="/">
          <GiFilmProjector />
          <LogoText>filminfo</LogoText>
        </LogoLink>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvepisodes">TVEpisodes</Link>
        <Link to="/">Log in</Link>
      </NavContainer>
    </>
  );
};
