import FilmsList from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/getMovie';
import * as SC from '../Home/Home.styled'

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingMovies('').then(setMovies);
      }, []);
    
      return (
        <>
          <SC.Title>Trending today</SC.Title>
          <FilmsList movies={movies} />
        </>
      );
}

export default Home