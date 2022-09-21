import React from 'react';
import { PageContainer } from '../../MoviesPage/MoviesPage.styled';
import MoviesGalery from '../../../components/MoviesGalery/MoviesGalery';
import Pagination from 'components/Pagination/Pagination';
import { TrendindTitle } from './TrendingTVPage.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const TrendingTVPage = ({ tvepisodes, totalPage, paginate, currentPage }) => {
  return (
    <PageContainer>
      <GoBackBtn />
      <TrendindTitle>Trending tvepisodes today</TrendindTitle>
      {tvepisodes && (
        <MoviesGalery movies={tvepisodes} pathName={'/tvepisodes'} />
      )}
      <Pagination
        totalPage={totalPage}
        paginate={paginate}
        currentPage={currentPage}
        searchParams={``}
      />
    </PageContainer>
  );
};
export default TrendingTVPage;
