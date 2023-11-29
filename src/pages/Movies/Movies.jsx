import { getMovieByQuery } from 'components/services/getMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';



const Movies = () => {
    const [movies, setMovies] = useState([])
    const [seachParams, setSeachParams] = useSearchParams

    useEffect (() => {
        const fetchMovieByQuery = async () => {
            try {
                const movieByQuery = await getMovieByQuery(currentQuery)
            }
            catch(e) {
                console.log(e);
            }
        }
        fetchMovieByQuery
    },[seachParams])

    return (
        <>
          <Form setSearchParams={setSearchParams} />
          {movies.length > 0 && <FilmsList movies={movies} />}
        </>
      );
}

export default Movies;