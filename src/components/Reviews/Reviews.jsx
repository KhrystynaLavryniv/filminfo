import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieReviews(movieId)
      .then(data => {
        const {
          data: { results },
        } = data;

        setReviews(results);

        if (results.length === 0) {
          toast.error("We don't have any reviews for this movie");
        }
      })
      .catch(error => {
        return toast.error("We don't have any reviews for this movie");
      })
      .finally(setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
