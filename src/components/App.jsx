import { Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { lazy, Suspense } from 'react';
import { AppContainer, Container } from './App.styled';
import { fetchTrandingMovies, fetchTrandingTVEpisodes } from 'services/api';
import { useEffect, useState } from 'react';
import TrandingTVPage from 'pages/TrandingTVPage/TrandingTVPage';
const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetalisPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const TVPage = lazy(() => import('../pages/TVPage/TVPage'));
// const Genres = lazy(() => import('./Genres/Genres'));
const SimilarMovie = lazy(() => import('./SimilarMovie/SimilarMovie'));
const VideoPage = lazy(() => import('./Trailer/Trailer'));
const TrandingMoviePage = lazy(() =>
  import('../pages/TrandingMoviesPage/TrandingMoviesPage')
);
export const App = () => {
  const [movies, setMovies] = useState([]);
  const [tvEpisodes, setTvEpisodes] = useState([]);

  useEffect(() => {
    fetchTrandingMovies()
      .then(data => {
        const {
          data: { results },
        } = data;
        setMovies(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, []);

  useEffect(() => {
    fetchTrandingTVEpisodes()
      .then(data => {
        const {
          data: { results },
        } = data;
        setTvEpisodes(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, []);

  return (
    <AppContainer>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<HomePage movies={movies} tvEpisodes={tvEpisodes} />}
              />
              <Route path="movies" element={<MoviesPage />} />
              <Route
                path="movies/trending"
                element={<TrandingMoviePage movies={movies} />}
              />

              <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="trailer" element={<VideoPage />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="similar" element={<SimilarMovie />} />
              </Route>
              <Route
                path="tvepisodes"
                element={<TVPage tvEpisodes={tvEpisodes} />}
              />
              <Route
                path="tvepisodes/trending"
                element={<TrandingTVPage tvEpisodes={tvEpisodes} />}
              />
            </Route>
          </Routes>
          <Toaster />
        </Suspense>
      </Container>
    </AppContainer>
  );
};