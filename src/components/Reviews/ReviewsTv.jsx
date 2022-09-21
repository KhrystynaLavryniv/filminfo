import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTvReviews } from '../../services/api';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { ReviewContainer, ReviewItem } from './Reviews.styled';

const ReviewsTv = () => {
  const [reviews, setReviews] = useState([]);
  const { tvepisodeId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchTvReviews(tvepisodeId)
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
  }, [tvepisodeId]);

  return (
    <>
      {loading && <Loader />}
      {reviews && (
        <ReviewContainer>
          <h4>Total reviews: {reviews.length}</h4>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <h4>{author}:</h4>
                <p>{content}</p>
              </ReviewItem>
            ))}
          </ul>
        </ReviewContainer>
      )}
    </>
  );
};
export default ReviewsTv;
