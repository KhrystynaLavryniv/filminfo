import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { PaginationContainer } from './Pagination.styled';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, MemoryRouter, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
  },
});
const PaginationList = ({ totalPage, currentPage, paginate }) => {
  return (
    <PaginationContainer>
      <ThemeProvider theme={theme}>
        <Pagination
          showFirstButton
          showLastButton
          count={totalPage}
          page={currentPage}
          color="primary"
          shape="rounded"
          variant="outlined"
          onChange={(_, num) => {
            paginate(num);
          }}
          renderItem={item => (
            <PaginationItem
              component={Link}
              to={`?page=${item.page}`}
              {...item}
            />
          )}
        />
      </ThemeProvider>
    </PaginationContainer>
  );
};

export default PaginationList;

export function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<PaginationList />} />
      </Routes>
    </MemoryRouter>
  );
}
