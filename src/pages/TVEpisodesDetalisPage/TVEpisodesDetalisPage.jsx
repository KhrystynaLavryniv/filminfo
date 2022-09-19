import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchTVEpisodesById } from '../../services/api';
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
} from './TVEpisodesDetalisPage.styled';
import { MdOutlineStarRate } from 'react-icons/md';

const TVEpisodesDetalisPage = () => {
  const { tvepisodesId } = useParams();
  const [tvEpisode, setTVEpisode] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const path = useRef(location);

  useEffect(() => {
    setLoading(true);
    fetchTVEpisodesById(tvepisodesId)
      .then(data => {
        const {
          data: {
            poster_path,
            title,
            name,
            overview,
            original_language,
            episode_run_time,
            vote_average,
            genres,
            number_of_episodes,
            vote_count,
          },
        } = data;

        setTVEpisode({
          poster: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : imageNotFound,
          title,
          name,
          original_language,
          vote_count,
          overview: overview ? overview : 'There is no overview',
          vote_average,
          episode_run_time:
            episode_run_time.length === 0
              ? 'Unknown run time'
              : `${episode_run_time} min`,
          number_of_episodes:
            number_of_episodes === null
              ? 'Unknown number of episodes'
              : number_of_episodes,
          genresValues:
            genres.length === 0
              ? 'Unknown genre'
              : genres.map(({ name }) => [name]).join(', '),
        });
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })

      .finally(setLoading(false));
  }, [tvepisodesId]);

  return (
    <MovieDetalisContainer>
      {loading && <Loader />}

      {tvEpisode && (
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
              src={tvEpisode.poster}
              alt={tvEpisode.title ? tvEpisode.title : tvEpisode.name}
            />

            <MovieInfo>
              <MovieDetails>
                <MovieTitle>
                  {tvEpisode.title ? tvEpisode.title : tvEpisode.name}
                </MovieTitle>
                <MovieVote>
                  <MdOutlineStarRate />
                  {Math.floor(tvEpisode.vote_average * 100) / 100}
                </MovieVote>

                <MovieDetailsText>
                  <MovieDetailsOption>Episodes:</MovieDetailsOption>"
                  {tvEpisode.number_of_episodes}"
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Genres:</MovieDetailsOption> "
                  {tvEpisode.genresValues}"
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Run time :</MovieDetailsOption>"
                  {tvEpisode.episode_run_time}"
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Language:</MovieDetailsOption>"
                  {tvEpisode.original_language}"
                </MovieDetailsText>
                <MovieDetailsOverview> Overview:</MovieDetailsOverview>

                <MovieDetailsText>{tvEpisode.overview}</MovieDetailsText>
              </MovieDetails>
              <div>
                <AdditionalInformation>
                  <li>
                    <Link to={`/movies/${tvepisodesId}/cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${tvepisodesId}/trailer`}>Trailer</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${tvepisodesId}/reviews`}>Reviews</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${tvepisodesId}/similar`}>Similar</Link>
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
export default TVEpisodesDetalisPage;
