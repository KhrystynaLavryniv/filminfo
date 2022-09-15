import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery, fetchMovieBySort } from '../../services/api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import SortBar from '../../components/SortBar/SortBar';
import { SearchOptionContainer, PageContainer } from './MoviesPage.styled';
import PaginationList from 'components/Pagination/Pagination';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const searchQuery = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.currentTarget.elements.query.value });
    evt.currentTarget.elements.query.value = '';
  };
  const handleChangeSelect = e => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    if (searchQuery === '') {
      return toast.error("Sorry, but you didn't enter a movie title");
    }
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    fetchMovieByQuery(searchQuery, currentPage)
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
  }, [searchQuery, currentPage]);

  useEffect(() => {
    fetchMovieBySort(sortOption, currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;
        setMovies(results);
        setTotalPage(total_pages);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, [sortOption, currentPage]);
  const paginate = num => setCurrentPage(num);
  return (
    <PageContainer>
      <SearchOptionContainer>
        <SortBar onChange={handleChangeSelect} />
        <SearchBar onSubmit={handleSubmit} />
      </SearchOptionContainer>

      {loading && <Loader />}
      {movies && <MoviesGalery movies={movies} />}

      <PaginationList
        totalPage={totalPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </PageContainer>
  );
};
export default MoviesPage;
