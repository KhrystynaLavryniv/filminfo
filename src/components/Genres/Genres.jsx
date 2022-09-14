import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchGenres, fetchMovies } from 'services/api';
import toast from 'react-hot-toast';
import {
  TrandingList,
  TrandingLink,
  MovieImg,
  TrandingItem,
} from '../TrandingMovies/TrandingMovies.styled';
import { GanreBtn, MovieByGanreItem, MovieByGanreList } from './Genres.styled';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchGenres()
      .then(data => {
        const {
          data: { genres },
        } = data;
        setGenres(genres);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, []);
  console.log(genre);
  useEffect(() => {
    fetchMovies()
      .then(data => {
        const {
          data: { results },
        } = data;
        setMovies(results);
      })
      .catch(error => {
        return toast.error('Sorry, something went wrong, try again');
      });
  }, []);
  let newarr = [];

  return (
    <>
      {genres && (
        <div>
          <MovieByGanreList>
            {genres.map(genre => (
              <MovieByGanreItem key={genre.id}>
                <GanreBtn
                  type="button"
                  name={genre.name}
                  value={genre.id}
                  onClick={e => {
                    setGenre(e.currentTarget.value);
                    movies.forEach(movie => {
                      if (movie.genre_ids.includes(genre.id)) {
                        newarr.push(movie);
                      }
                    });
                    setMovieByGenre([...newarr]);
                    if (newarr.length === 0) {
                      toast.error('Did not find a movie of this genre');
                    }
                  }}
                >
                  {genre.name}
                </GanreBtn>
              </MovieByGanreItem>
            ))}
          </MovieByGanreList>
        </div>
      )}

      {movieByGenre.length > 0 && (
        <div>
          <TrandingList>
            {movieByGenre.map(
              ({
                id,
                title,
                name,
                poster_path,
                genre_ids,
                vote_average,
                overview,
                genresValues,
              }) => (
                <TrandingItem key={id}>
                  <TrandingLink to={`/movies/${id}`} state={{ from: location }}>
                    <MovieImg
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title ? title : name}
                    />
                  </TrandingLink>
                  <p>{Math.floor(vote_average * 100) / 100}</p>
                  <p>{title}</p>
                </TrandingItem>
              )
            )}
          </TrandingList>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Genres;
