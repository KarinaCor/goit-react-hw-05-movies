import * as SC from '../MovieDetails/MovieDetails.styled'
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/getMovie';

import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constans';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movie, setMovie } = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById()
  }, [movieId]);

  return (
    <>
      <SC.GoBackLink>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </SC.GoBackLink>
      <SC.FilmWrapper>
        <SC.FilmImg
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="get"
        />
        <div>
          <SC.FilmTitle>{movie.original_title}</SC.FilmTitle>
          <SC.FilmSubTitle>Rating: {Math.round(movie.vote_average)}</SC.FilmSubTitle>
          <SC.FilmSubTitle>Overview</SC.FilmSubTitle>
          <SC.FilmDescr>{movie.overview}</SC.FilmDescr>
          <SC.FilmSubTitle>Genres</SC.FilmSubTitle>
          <SC.StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </SC.StyledListDescr>
        </div>
      </SC.FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <SC.StyledList>
          <SC.ListItem>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </SC.ListItem>
          <SC.ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </SC.ListItem>
        </SC.StyledList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;
