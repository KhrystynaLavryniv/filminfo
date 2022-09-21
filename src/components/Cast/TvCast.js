import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTvCredits } from '../../services/api';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import CastList from './CastList';

function TvCast() {
  const [castInfo, setCastInfo] = useState([]);
  const { tvepisodeId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchTvCredits(tvepisodeId)
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
  }, [tvepisodeId]);
  return (
    <>
      {loading && <Loader />}
      {castInfo && <CastList castInfo={castInfo} />}
    </>
  );
}
export default TvCast;
