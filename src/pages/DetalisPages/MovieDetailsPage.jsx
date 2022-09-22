import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from '../../components/Navigation/Navigation.styled';
import imageNotFound from '../../images/nf.jpg';
import {
  GoBackButton,
  MovieImg,
  MovieDetails,
  MovieTitle,
  MovieDetailsText,
  AdditionalInformation,
  MovieDetalisContainer,
  Cont,
  LinkBack,
  MovieInfo,
  MovieVote,
  MovieDetailsOption,
  MovieDetailsOverview,
} from './DetalisPage.styled';
import { MdOutlineStarRate } from 'react-icons/md';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const path = useRef(location);

  useEffect(() => {
    setLoading(true);
    fetchMovieById(movieId)
      .then(data => {
        const {
          data: {
            poster_path,
            title,
            name,
            overview,
            original_language,
            release_date,
            vote_average,
            genres,
            vote_count,
          },
        } = data;

        setMovie({
          poster: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : imageNotFound,
          title,
          name,
          original_language,
          vote_count,
          overview: overview ? overview : 'There is no overview',
          vote_average,
          release_date,

          genresValues:
            genres.length === 0
              ? 'Unknown genre'
              : genres.map(({ name }) => [name]).join(', '),
        });
        // console.log(movie);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })

      .finally(setLoading(false));
  }, [movieId]);

  return (
    <MovieDetalisContainer>
      {loading && <Loader />}

      {movie && (
        <>
          <Cont>
            <GoBackButton type="button">
              <LinkBack
                to={path.current?.state?.from ?? `/`}
                state={{ from: path.current }}
              >
                <BsArrowLeftShort />
              </LinkBack>
            </GoBackButton>
            <MovieImg
              src={movie.poster}
              alt={movie.title ? movie.title : movie.name}
            />

            <MovieInfo>
              <MovieDetails>
                <MovieTitle>
                  {movie.title ? movie.title : movie.name}
                </MovieTitle>
                <MovieVote>
                  <MdOutlineStarRate />
                  {Math.floor(movie.vote_average * 100) / 100}
                </MovieVote>

                {/* <MovieDetailsText>
                  <MovieDetailsOption>Vote count:</MovieDetailsOption>
                  <MovieDetailsQty>"{movie.vote_count}"</MovieDetailsQty>
                </MovieDetailsText> */}
                <MovieDetailsText>
                  <MovieDetailsOption>Genres:</MovieDetailsOption>
                  {movie.genresValues}
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Release date:</MovieDetailsOption>
                  {movie.release_date}
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Original language:</MovieDetailsOption>
                  {movie.original_language}
                </MovieDetailsText>
                <MovieDetailsOverview> Overview:</MovieDetailsOverview>

                <MovieDetailsText>{movie.overview}</MovieDetailsText>
              </MovieDetails>
              <div>
                <AdditionalInformation>
                  <li>
                    <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${movieId}/trailer`}>Trailer</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${movieId}/similar`}>Similar</Link>
                  </li>
                </AdditionalInformation>
              </div>
            </MovieInfo>
          </Cont>

          <div>
            <Outlet />
          </div>
        </>
      )}
    </MovieDetalisContainer>
  );
};
export default MovieDetailsPage;
