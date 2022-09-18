import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import { AppContainer, Container } from './App.styled';
import { fetchTrandingMovies, fetchTrandingTVEpisodes } from 'services/api';
import { useEffect, useState } from 'react';
import TrandingTVPage from 'pages/TrandingTVPage/TrandingTVPage';
import MoviesSearch from './MoviesSearch/MoviesSearch';
const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetalisPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const TVPage = lazy(() => import('../pages/TVPage/TVPage'));
const SimilarMovie = lazy(() => import('./SimilarMovie/SimilarMovie'));
const VideoPage = lazy(() => import('./Trailer/Trailer'));
const TrandingMoviePage = lazy(() =>
  import('../pages/TrandingMoviesPage/TrandingMoviesPage')
);
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [tvEpisodes, setTvEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('?').slice(1).join('').split('=')[1]) || 1
  );
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    fetchTrandingMovies(currentPage)
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
    fetchTrandingTVEpisodes(currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;
        setTvEpisodes(results);
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
                element={<HomePage movies={movies} tvEpisodes={tvEpisodes} />}
              />
              <Route path="movies" element={<MoviesPage />} />
              <Route
                path="movies/trending"
                element={
                  <TrandingMoviePage
                    movies={movies}
                    totalPage={totalPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                }
              />
              <Route path="movies/search" element={<MoviesSearch />} />
              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="trailer" element={<VideoPage />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="similar" element={<SimilarMovie />} />
              </Route>
              <Route path="tvepisodes" element={<TVPage />} />
              <Route
                path="tvepisodes/trending"
                element={
                  <TrandingTVPage
                    tvEpisodes={tvEpisodes}
                    totalPage={totalPage}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<PaginationList />} /> */}
          </Routes>
          <Toaster />
        </Suspense>
      </Container>
    </AppContainer>
  );
};
