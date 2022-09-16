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
  MovieOverview,
  AdditionalInformation,
  Cont,
  LinkBack,
  MovieInfo,
  MovieVote,
} from './MovieDetalisPage.styled';
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
          data: { poster_path, title, name, overview, vote_average, genres },
        } = data;

        setMovie({
          poster: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : imageNotFound,
          title,
          name,
          overview: overview ? overview : 'There is no overview',
          vote_average,

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
    <>
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
                {/* <p>{movie.release_date}</p> */}
                <MovieVote>
                  <MdOutlineStarRate />
                  {Math.floor(movie.vote_average * 100) / 100}
                </MovieVote>
                <p>{movie.genresValues}</p>
                <MovieOverview>Overview:</MovieOverview>
                <p>{movie.overview}</p>
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
              <Outlet />
            </MovieInfo>
          </Cont>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
