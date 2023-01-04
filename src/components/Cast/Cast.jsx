import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCast } from 'servises/API';
import noImage from '../../images/no-image.jpg';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    getCast(id).then(resp => setCast(resp.cast));
  }, [id]);
  if (!cast) return;

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        listStyle: 'none',
      }}
    >
      {cast.map(({ cast_id, profile_path, name, character }) => (
        <li style={{ color: 'black' }} key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : noImage
            }
            alt={name}
            width={100}
            height={150}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
