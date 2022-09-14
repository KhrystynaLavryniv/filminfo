import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSimilarMovie } from '../../services/api';
import { useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  SimilarMovieList,
  SimilarMovieItem,
  SimilarMovieImg,
} from './SimilarMovie.styled';

const SimilarMovie = () => {
  const [similarMovie, setSimilarMovie] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    fetchSimilarMovie(movieId)
      .then(data => {
        const {
          data: { results },
        } = data;

        setSimilarMovie(results.slice(0, 8));
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {similarMovie && (
        <SimilarMovieList>
          {similarMovie.map(
            ({
              id,
              title,
              name,
              poster_path,
              genre_ids,
              vote_average,
              overview,
              genresValues,
            }) => (
              <SimilarMovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <SimilarMovieImg
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title ? title : name}
                  />
                </Link>
              </SimilarMovieItem>
            )
          )}
        </SimilarMovieList>
      )}
    </>
  );
};

export default SimilarMovie;
