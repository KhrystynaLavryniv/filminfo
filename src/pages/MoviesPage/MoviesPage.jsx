import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery, fetchMovieBySort } from '../../services/api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import SortBar from '../../components/SortBar/SortBar';
import { SearchOptionContainer, PageContainer } from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('');
  // const [sortedMovies, setSortedMovies] = useState([]);

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
    fetchMovieByQuery(searchQuery)
      .then(data => {
        const {
          data: { results },
        } = data;

        if (results.length === 0) {
          return toast.error(
            'Sorry, there are no movies with that title, try again'
          );
        }

        setMovies(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      })
      .finally(setLoading(false));
  }, [searchQuery]);

  useEffect(() => {
    fetchMovieBySort(sortOption)
      .then(data => {
        const {
          data: { results },
        } = data;
        setMovies(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, [sortOption]);
  return (
    <PageContainer>
      <SearchOptionContainer>
        <SortBar onChange={handleChangeSelect} />
        <SearchBar onSubmit={handleSubmit} />
      </SearchOptionContainer>

      {loading && <Loader />}
      {movies && <MoviesGalery movies={movies} />}
      {/* {movies ? (
        <MoviesGalery movies={movies} />
      ) : (
        <MoviesGalery movies={sortedMovies} />
      )} */}
    </PageContainer>
  );
};
export default MoviesPage;
