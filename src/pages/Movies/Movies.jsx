import { getMovieByQuery } from 'services/getMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import FilmsList from 'components/FilmList/FilmList';



const Movies = () => {
    const [movies, setMovies] = useState([])
    const [seachParams, setSeachParams] = useSearchParams()

    useEffect (() => {
        const currentQuery = seachParams.get('query')
        if (!currentQuery) return

        const fetchMovieByQuery = async () => {
            try {
                const movieByQuery = await getMovieByQuery(currentQuery)
                setMovies(movieByQuery)
            }
            catch(e) {
                console.log(e);
            }
        }
        fetchMovieByQuery()
    },[seachParams])

    return (
        <>
          <Form setSearchParams={setSeachParams} />
          {movies.length > 0 && <FilmsList movies={movies} />}
        </>
      );
}

export default Movies;