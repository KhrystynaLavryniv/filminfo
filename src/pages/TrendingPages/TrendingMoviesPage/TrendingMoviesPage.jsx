import React from 'react';
import { PageContainer } from '../../MoviesPage/MoviesPage.styled';
import MoviesGalery from '../../../components/MoviesGalery/MoviesGalery';
import { TrendindTitle } from 'pages/TrendingPages/TrendingTVPage/TrendingTVPage.styled';
import PaginationList from 'components/Pagination/Pagination';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const TrendingMoviePage = ({ movies, totalPage, paginate, currentPage }) => {
  return (
    <PageContainer>
      <GoBackBtn />
      <TrendindTitle>Trending movies today</TrendindTitle>

      {movies && (
        <MoviesGalery
          pathName={'/movies'}
          movies={movies}
          totalPage={totalPage}
          paginate={paginate}
        />
      )}
      <PaginationList
        totalPage={totalPage}
        paginate={paginate}
        currentPage={currentPage}
        searchParams={``}
      />
    </PageContainer>
  );
};
export default TrendingMoviePage;
