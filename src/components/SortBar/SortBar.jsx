import React from 'react';
import PropTypes from 'prop-types';
import { SortBarOption, SortBarSelect } from './SortBar.styled';

const SortBar = ({ onChange }) => {
  return (
    <div>
      <SortBarSelect name="movies" id="movies" onChange={onChange}>
        <SortBarOption value="">-🠕🠗 sort by... 🠗🠕-</SortBarOption>

        <SortBarOption value="popularity.asc">popularity 🠕</SortBarOption>
        <SortBarOption value="popularity.desc">popularity 🠗</SortBarOption>
        <SortBarOption value="vote_average.asc">vote average 🠕</SortBarOption>
        <SortBarOption value="vote_average.desc">vote average 🠗</SortBarOption>
        <SortBarOption value="release_date.asc">release date 🠕</SortBarOption>
        <SortBarOption value="release_date.desc">release date 🠗</SortBarOption>
      </SortBarSelect>
    </div>
  );
};
SortBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SortBar;
