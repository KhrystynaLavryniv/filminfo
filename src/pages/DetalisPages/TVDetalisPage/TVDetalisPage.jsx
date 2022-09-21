import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchTVById } from '../../../services/api';
import Loader from '../../../components/Loader/Loader';
import toast from 'react-hot-toast';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from '../../../components/Navigation/Navigation.styled';
import imageNotFound from '../../../images/nf.jpg';
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
} from './TVDetalisPage.styled';
import { MdOutlineStarRate } from 'react-icons/md';
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText';

const TVDetalisPage = () => {
  const { tvepisodeId } = useParams();
  const [tvEpisode, setTVEpisode] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const path = useRef(location);

  useEffect(() => {
    setLoading(true);
    fetchTVById(tvepisodeId)
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
            seasons,
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
          seasons,
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
  }, [tvepisodeId]);
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
                  <MovieDetailsOption>Seasons count:</MovieDetailsOption>
                  {tvEpisode.seasons.length}
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Episodes:</MovieDetailsOption>
                  {tvEpisode.number_of_episodes}
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Genres:</MovieDetailsOption>
                  {tvEpisode.genresValues}
                </MovieDetailsText>
                <MovieDetailsText>
                  <MovieDetailsOption>Run time :</MovieDetailsOption>
                  {tvEpisode.episode_run_time}
                </MovieDetailsText>

                <MovieDetailsText>
                  <MovieDetailsOption>Language:</MovieDetailsOption>
                  {tvEpisode.original_language}
                </MovieDetailsText>
                <MovieDetailsOverview> Overview:</MovieDetailsOverview>

                {/* <MovieDetailsText>{tvEpisode.overview}</MovieDetailsText> */}
                {/* <MovieTitle>{tvEpisode.overview} </MovieTitle> */}
                <EllipsisText text={tvEpisode.overview} length={500} />
              </MovieDetails>
              {/* <ol>
                {tvEpisode.seasons.map(({ id, name, episode_count }) => (
                  <li key={id}>
                    <h4>{name}:</h4>
                    <p>episode_count:{episode_count}</p>
                  </li>
                ))}
              </ol> */}
              <div>
                <AdditionalInformation>
                  <li>
                    <Link to={`/tvepisodes/${tvepisodeId}/cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`/tvepisodes/${tvepisodeId}/trailer`}>
                      Trailer
                    </Link>
                  </li>
                  <li>
                    <Link to={`/tvepisodes/${tvepisodeId}/reviews`}>
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to={`/tvepisodes/${tvepisodeId}/similar`}>
                      Similar
                    </Link>
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
export default TVDetalisPage;
