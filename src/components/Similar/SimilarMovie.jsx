import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSimilarMovie } from '../../services/api';
import toast from 'react-hot-toast';
import { SimilarMovieContainer } from './Similar.styled';
import MoviesGalery from 'components/MoviesGalery/MoviesGalery';
import PaginationList from 'components/Pagination/Pagination';

const SimilarMovie = () => {
  const [similarMovie, setSimilarMovie] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetchSimilarMovie(movieId, currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;

        setSimilarMovie(results);
        setTotalPages(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [movieId, currentPage]);
  const paginate = num => setCurrentPage(num);

  return (
    <SimilarMovieContainer>
      {loading && <p>Loading...</p>}
      {similarMovie && (
        <>
          <h3>Similar Movie:</h3>
          <MoviesGalery movies={similarMovie} />
          <PaginationList
            movies={similarMovie}
            totalPage={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </SimilarMovieContainer>
  );
};

export default SimilarMovie;
