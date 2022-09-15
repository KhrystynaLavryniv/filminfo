import React from 'react';
import { Pagination } from '@mui/material';
import { PaginationContainer } from './Pagination.styled';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    // common: {
    //   black: '#000',
    // },
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
        />
      </ThemeProvider>
    </PaginationContainer>
  );
};
// const Pagination = ({ totalPage, paginate }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPage; i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <>
//       <ul className="pagination justify-content-center">
//         <li class="page-item disabled">
//           <button class="page-link">Previous</button>
//         </li>
//         {pageNumbers.map(number => (
//           <li key={number} className="page-item">
//             <button
//               className="page-link"
//               onClick={() => {
//                 paginate(number);
//               }}
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//         <li class="page-item">
//           <button class="page-link">Next</button>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default Pagination;
export default PaginationList;
