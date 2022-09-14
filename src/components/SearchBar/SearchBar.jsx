import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder=""
        />
        <SearchBtn type="submit">
          <IconContext.Provider value={{ color: 'aliceblue', size: '2em' }}>
            <div>
              <ImSearch />
            </div>
          </IconContext.Provider>
        </SearchBtn>
      </SearchForm>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
