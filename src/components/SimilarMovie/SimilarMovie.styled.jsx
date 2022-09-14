import styled from 'styled-components';

export const SimilarMovieList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const SimilarMovieItem = styled.li`
  width: calc(100% / 4 - 10px);
  margin: 10px 5px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  :hover {
    scale: 1.05;

    -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
    -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
    box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  }
`;
export const SimilarMovieImg = styled.img`
  display: blok;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
