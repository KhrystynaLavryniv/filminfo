import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { PageContainer } from '../MoviesPage/MoviesPage.styled';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import { GiFilmSpool, GiFilmStrip } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import {
  SeeMoreBtn,
  SeeMoreBtnDesk,
  SeeMoreLink,
  TitleContainer,
  TitleText,
  Title,
  IconScale,
} from './HomePage.styled';

const HomePage = ({ movies, tvepisodes, onClick }) => {
  const location = useLocation();

  return (
    <PageContainer>
      <TitleContainer>
        <Title>
          <IconContext.Provider
            value={{
              color: 'aliceblue',
              size: '2em',
              transform: ' scale(-1, 1)',
            }}
          >
            <IconScale>
              <GiFilmSpool />
            </IconScale>
          </IconContext.Provider>
          <TitleText>Trending movies today</TitleText>
          <IconContext.Provider value={{ color: 'aliceblue', size: '2em' }}>
            <div>
              <GiFilmSpool />
            </div>
          </IconContext.Provider>
        </Title>
        <SeeMoreBtnDesk onClick={onClick}>
          <SeeMoreLink to={`/movies/trending`} state={{ from: location }}>
            See more
          </SeeMoreLink>
        </SeeMoreBtnDesk>
      </TitleContainer>
      {movies && (
        <>
          <MoviesGalery pathName={'/movies'} movies={movies.slice(0, 4)} />
          <SeeMoreBtn onClick={onClick}>
            <SeeMoreLink to={`/movies/trending`} state={{ from: location }}>
              See more
            </SeeMoreLink>
          </SeeMoreBtn>
        </>
      )}

      <TitleContainer>
        <Title>
          <IconContext.Provider
            value={{
              color: 'aliceblue',
              size: '2em',
              transform: ' scale(-1, 1)',
            }}
          >
            <GiFilmStrip />
          </IconContext.Provider>
          <TitleText>Trending TVEpisodes today</TitleText>
          <IconContext.Provider value={{ color: 'aliceblue', size: '2em' }}>
            <GiFilmStrip />
          </IconContext.Provider>
        </Title>
        <SeeMoreBtnDesk onClick={onClick}>
          <SeeMoreLink to={`/tvepisodes/trending`} state={{ from: location }}>
            See more
          </SeeMoreLink>
        </SeeMoreBtnDesk>
      </TitleContainer>
      {tvepisodes && (
        <>
          <MoviesGalery
            pathName={'/tvepisodes'}
            movies={tvepisodes.slice(0, 4)}
          />
          <SeeMoreBtn onClick={onClick}>
            <SeeMoreLink to={`/tvepisodes/trending`} state={{ from: location }}>
              See more
            </SeeMoreLink>
          </SeeMoreBtn>
        </>
      )}
      <Outlet />
    </PageContainer>
  );
};

export default HomePage;
