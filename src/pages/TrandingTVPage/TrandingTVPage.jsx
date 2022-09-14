import React from 'react';
import { PageContainer } from '../MoviesPage/MoviesPage.styled';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import {
  GoBackButton,
  LinkBack,
} from '../MovieDetalisPage/MovieDetalisPage.styled';

const TrandingTVPage = ({ tvEpisodes }) => {
  const location = useLocation();

  const path = useRef(location);

  return (
    <PageContainer>
      <GoBackButton type="button">
        <LinkBack
          to={path.current?.state?.from ?? `/`}
          state={{ from: path.current }}
        >
          <BsArrowLeftShort />
        </LinkBack>
      </GoBackButton>
      {tvEpisodes && <MoviesGalery movies={tvEpisodes} />}
    </PageContainer>
  );
};
export default TrandingTVPage;
