import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTVByQuery, fetchTVBySort } from '../../services/api';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import SortBar from '../../components/SortBar/SortBar';
import { SearchOptionContainer } from './TVPage.styled';
import { PageContainer } from 'pages/MoviesPage/MoviesPage.styled';

const TVPage = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState('');

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
    fetchTVByQuery(searchQuery)
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
    fetchTVBySort(sortOption)
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
    </PageContainer>
  );
};
export default TVPage;
