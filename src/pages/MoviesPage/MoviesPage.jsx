import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieBySort } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import SortBar from '../../components/SortBar/SortBar';
import { SearchOptionContainer, PageContainer } from './MoviesPage.styled';
import PaginationList from 'components/Pagination/Pagination';
import { SearchBtn } from 'components/SearchBar/SearchBar.styled';
import { ImSearch } from 'react-icons/im';
import { IconContext } from 'react-icons';

const MoviesPage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('?').slice(2).join('').split('=')[1]) || 1
  );
  const [totalPage, setTotalPage] = useState(1);
  const [sortOption, setSortOption] = useState(
    location.search?.split('?').slice(1, 2).join('').split('=')[1] || ''
  );

  searchParams.get('sort');

  const handleChangeSelect = e => {
    setSearchParams({ sort: e.target.value });
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    setLoading(true);
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
      })
      .finally(setLoading(false));
  }, [sortOption, currentPage]);

  const paginate = num => setCurrentPage(num);

  return (
    <PageContainer>
      <SearchOptionContainer>
        <SortBar onChange={handleChangeSelect} />

        <SearchBtn>
          <Link to={`/movies/search`} state={{ from: location }}>
            <IconContext.Provider value={{ color: 'aliceblue', size: '2em' }}>
              <div>
                <ImSearch />
              </div>
            </IconContext.Provider>
          </Link>
        </SearchBtn>
      </SearchOptionContainer>

      {loading && <Loader />}
      {movies && <MoviesGalery movies={movies} />}

      <PaginationList
        totalPage={totalPage}
        paginate={paginate}
        currentPage={currentPage}
        searchParams={`?sort=${sortOption}`}
      />
    </PageContainer>
  );
};
export default MoviesPage;
