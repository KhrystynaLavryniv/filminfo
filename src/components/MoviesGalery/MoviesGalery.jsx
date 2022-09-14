import React from 'react';
import { MdOutlineStarRate } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import imageNotFound from '../../images/nf.jpg';

import {
  MovieList,
  MovieItem,
  MovieTitle,
  MovieLink,
  MovieRate,
  MovieImg,
  MovieVote,
} from './MoviesGalery.styled';

const MoviesGalery = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(
        ({
          id,
          title,
          name,
          poster_path,
          genre_ids,
          vote_average,
          popularity,
        }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : imageNotFound
                }
                alt={title ? title : name}
              />
              <MovieRate>
                <MovieVote>
                  <MdOutlineStarRate />
                  <p>{Math.floor(vote_average * 100) / 100}</p>
                </MovieVote>
                <MovieTitle>{title ? title : name} </MovieTitle>
              </MovieRate>
            </MovieLink>
          </MovieItem>
        )
      )}
    </MovieList>
  );
};

export default MoviesGalery;
