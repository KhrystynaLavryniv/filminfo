import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import CastList from './CastList';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';

function Cast() {
  const [castInfo, setCastInfo] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieCredits(movieId)
      .then(data => {
        const {
          data: { cast },
        } = data;

        setCastInfo(cast);

        if (cast.length === 0) {
          return toast.error(
            "We don't have any information about the cast for this movie"
          );
        }
      })
      .catch(error => {
        return toast.error(
          "We don't have any information about the cast for this movie"
        );
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}

      {castInfo && <CastList castInfo={castInfo} />}
    </>
  );
}
export default Cast;
