import { getCastMovie } from 'services/getMovie';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as SC from '../Cast/Cast.styled'
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constans';


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
        try{
            const cast = await getCastMovie(movieId)
            setCast(cast)
        }
        catch(e) {
            console.log(e);
        }
    }
    fetchCast()
},[movieId])

return (<>
{
<SC.List>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <SC.Item key={id}>
          <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
        </SC.Item>
      ))}
    </SC.List>
}
</>
    
)
};

export default Cast;


