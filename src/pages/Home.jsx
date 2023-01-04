import { getFetchMovies } from 'servises/API';
import { useState, useEffect } from 'react';
import { lazy } from 'react';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getFetchMovies().then(data => setMoviesList(data));
  }, []);

  return (
    <main>
      <h1
        style={{
        margin_left: '20px',
          margin_bottom: '20px',
      }}>Trending today</h1>
      <MoviesList movies={moviesList}></MoviesList>
    </main>
  )
};


export default Home;