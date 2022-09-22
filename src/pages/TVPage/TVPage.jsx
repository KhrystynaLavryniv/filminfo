import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchTVBySort } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import MoviesGalery from '../../components/MoviesGalery/MoviesGalery';
import SortBar from '../../components/SortBar/SortBar';
import { SearchOptionContainer } from '../MoviesPage/MoviesPage.styled';
import { PageContainer } from 'pages/MoviesPage/MoviesPage.styled';
import PaginationList from 'components/Pagination/Pagination';
import { ImSearch } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { SearchBtn } from 'components/SearchBar/SearchBar.styled';

const TVPage = () => {
  const location = useLocation();
  const [tvepisodes, setTvepisodes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState(
    location.search?.split('?').slice(1, 2).join('').split('=')[1] || ''
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(location.search?.split('?').slice(2).join('').split('=')[1]) || 1
  );
  const [totalPage, setTotalPage] = useState(1);
  searchParams.get('sort');

  const handleChangeSelect = e => {
    setSearchParams({ sort: e.target.value });
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    setLoading(true);
    fetchTVBySort(sortOption, currentPage)
      .then(data => {
        const {
          data: { results, total_pages },
        } = data;
        setTvepisodes(results);
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
          <Link to={`/tvepisodes/search`} state={{ from: location }}>
            <IconContext.Provider value={{ color: 'aliceblue', size: '2em' }}>
              <div>
                <ImSearch />
              </div>
            </IconContext.Provider>
          </Link>
        </SearchBtn>
      </SearchOptionContainer>

      {loading && <Loader />}

      {tvepisodes && (
        <MoviesGalery pathName={'/tvepisodes'} movies={tvepisodes} />
      )}
      <PaginationList
        totalPage={totalPage}
        paginate={paginate}
        currentPage={currentPage}
        searchParams={`?sort=${sortOption}`}
      />
    </PageContainer>
  );
};
export default TVPage;
