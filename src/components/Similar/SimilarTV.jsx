import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSimilarTV } from '../../services/api';
import toast from 'react-hot-toast';
import { SimilarMovieContainer } from './SimilarMovie.styled';
import MoviesGalery from 'components/MoviesGalery/MoviesGalery';
import PaginationList from 'components/Pagination/Pagination';

const SimilarTV = () => {
  const [similarTV, setSimilarTV] = useState([]);
  const { tvepisodeId } = useParams();
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);

    fetchSimilarTV(tvepisodeId, currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;

        setSimilarTV(results);
        setTotalPages(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [tvepisodeId, currentPage]);
  const paginate = num => setCurrentPage(num);

  return (
    <SimilarMovieContainer>
      {loading && <p>Loading...</p>}
      {similarTV && (
        <>
          <h3>Similar Movie:</h3>
          <MoviesGalery movies={similarTV} />
          <PaginationList
            movies={similarTV}
            totalPage={totalPages}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </SimilarMovieContainer>
  );
};

export default SimilarTV;
