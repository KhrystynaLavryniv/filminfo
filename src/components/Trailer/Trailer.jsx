import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrailer } from '../../services/api';
import { TrailerItem, TrailerList } from './Trailer.styled';
import { toast } from 'react-hot-toast';

const Trailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrailer(movieId)
      .then(data => {
        const {
          data: { results },
        } = data;

        setTrailer(results.splice(0, 3));
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })

      .finally(setLoading(false));
  }, [movieId]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {trailer ? (
        <TrailerList>
          {trailer.map(({ key }) => (
            <TrailerItem key={key}>
              <iframe
                width={800}
                height={500}
                src={`https://www.youtube.com/embed/${key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </TrailerItem>
          ))}
        </TrailerList>
      ) : (
        <p>Sorry, we couldn't find this video</p>
      )}
    </>
  );
};

export default Trailer;
