import { useLocation, Link } from 'react-router-dom';

import * as SC from '../FilmList/FilmList.styled'

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <SC.List>
      {movies.map(({ id, original_title }) => (
        <SC.Item key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </SC.Item>
      ))}
    </SC.List>
  );
};

export default FilmsList;