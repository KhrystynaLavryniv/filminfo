import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import { AppContainer, Container } from './App.styled';
import { fetchTrendingMovies, fetchTrendingTVEpisodes } from 'services/api';
import { useEffect, useState } from 'react';
import TVCast from './Cast/TvCast';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const TrendingMoviePage = lazy(() =>
  import('../pages/TrendingPages/TrendingMoviesPage/TrendingMoviesPage')
);
const TrendingTVPage = lazy(() =>
  import('../pages/TrendingPages/TrendingTVPage/TrendingTVPage')
);

const MoviesSearch = lazy(() =>
  import('../pages/SearchPages/MoviesSearch/MoviesSearch')
);
const TVPage = lazy(() => import('../pages/TVPage/TVPage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const TVSearchPage = lazy(() =>
  import('pages/SearchPages/TVSearchPage/TVEpisodesSearchPage')
);

const MovieDetailsPage = lazy(() =>
  import('../pages/DetalisPages/MovieDetalisPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/MovieCast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const ReviewsTV = lazy(() => import('./Reviews/ReviewsTv'));

const SimilarMovie = lazy(() => import('./Similar/SimilarMovie'));
const SimilarTV = lazy(() => import('./Similar/SimilarTV'));

const MovieTrailer = lazy(() => import('./Trailer/MovieTrailer'));
const TVTrailer = lazy(() => import('./Trailer/TVTrailer'));

const TVDetalisPage = lazy(() =>
  import('../pages/DetalisPages/TVDetalisPage/TVDetalisPage')
);

const NotFound = lazy(() => import('../pages/NotFoundPage/NotFound'));

export const App = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [tvepisodes, setTvepisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('?').slice(1).join('').split('=')[1]) || 1
  );
  const [totalPage, setTotalPage] = useState(1);

  const handleClick = e => {
    setCurrentPage(1);
  };
  useEffect(() => {
    fetchTrendingMovies(currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;
        setMovies(results);
        setTotalPage(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, [currentPage]);

  useEffect(() => {
    fetchTrendingTVEpisodes(currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;
        setTvepisodes(results);
        setTotalPage(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, [currentPage]);
  const paginate = num => setCurrentPage(num);
  return (
    <AppContainer>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exect path="/" element={<Layout />}>
              <Route
                index
                element={
                  <HomePage
                    movies={movies}
                    tvepisodes={tvepisodes}
                    onClick={handleClick}
                  />
                }
              />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="tvepisodes" element={<TVPage />} />
              <Route
                path="movies/trending"
                element={
                  <TrendingMoviePage
                    movies={movies}
                    totalPage={totalPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                }
              />
              <Route
                path="tvepisodes/trending"
                element={
                  <TrendingTVPage
                    tvepisodes={tvepisodes}
                    totalPage={totalPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                }
              />
              <Route path="movies/search" element={<MoviesSearch />} />
              <Route path="tvepisodes/search" element={<TVSearchPage />} />

              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="trailer" element={<MovieTrailer />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="similar" element={<SimilarMovie />} />
              </Route>

              <Route path="tvepisodes/:tvepisodeId" element={<TVDetalisPage />}>
                <Route path="cast" element={<TVCast />} />
                <Route path="trailer" element={<TVTrailer />} />
                <Route path="reviews" element={<ReviewsTV />} />
                <Route path="similar" element={<SimilarTV />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Suspense>
      </Container>
    </AppContainer>
  );
};
