import { SearchBar } from 'components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchTVByQuery } from 'services/api';
import MoviesGalery from 'components/MoviesGalery/MoviesGalery';
import PaginationList from 'components/Pagination/Pagination';
import { MoviesSearchContainer } from '../../components/MoviesSearch/MoviesSearch.styled';
import Loader from 'components/Loader/Loader';

const TVEpisodesSearchPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('?').slice(2).join('').split('=')[1]) || 1
  );
  const [totalPage, setTotalPage] = useState(1);
  const [searchString, setSearchString] = useState(
    location.search?.split('?').slice(1, 2).join('').split('=')[1] || null
  );
  searchParams.get('query');
  console.log(location);
  console.log(location.search?.split('?').slice(1, 2).join('').split('=')[1]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchString(e.currentTarget.elements.query.value);
    setCurrentPage(1);
    setSearchParams({ query: e.currentTarget.elements.query.value });
    e.currentTarget.elements.query.value = '';
  };
  useEffect(() => {
    if (searchString === '') {
      return toast.error("Sorry, but you didn't enter a movie title");
    }
    if (!searchString) {
      return;
    }

    setLoading(true);
    fetchTVByQuery(searchString, currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;

        if (results.length === 0) {
          return toast.error(
            'Sorry, there are no movies with that title, try again'
          );
        }

        setMovies(results);
        setTotalPage(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [searchString, currentPage]);

  const paginate = num => setCurrentPage(num);

  return (
    <MoviesSearchContainer>
      {loading && <Loader />}
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <>
          <MoviesGalery movies={movies} pathName={'/tvepisodes'} />
          <PaginationList
            totalPage={totalPage}
            paginate={paginate}
            currentPage={currentPage}
            searchParams={`?query=${searchString}`}
          />
        </>
      )}
    </MoviesSearchContainer>
  );
};

export default TVEpisodesSearchPage;
