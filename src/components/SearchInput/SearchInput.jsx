import { useSearchParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { getSearchMovies } from 'servises/API';
import { ToastContainer, toast } from 'react-toastify';
import { Input, SearchBtn, SearchForm } from './SearchInput.styled';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const SearchInput = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query') ?? '';

  const toastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target[0].value === '') {
      toast.info('😸Search something, pls', toastOptions);
      return;
    }
    // else {
    //   toast.success('😸Here you go', toastOptions);
    // }
    return setSearchParams({ query: e.target[0].value.toLowerCase() });
  };

  useEffect(() => { 
  const toastNothingFound = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    };
    
    if (!params) return;
    getSearchMovies(params)
      .then(response => {
        setMovies(response);
        if (response.length === 0) {
          toast.warn('👽Emmmm...nope...try something else, pls🦄', toastNothingFound);
        };
      })
      .catch(error => console.log(error))

  }, [params]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <Input type="text" name="searchName" placeholder="Search movie" />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>

      {movies.length > 0 && (
        <Suspense fallback={<Loader />}>
          <MoviesList movies={movies} />
        </Suspense>
      )}
      <ToastContainer />
    </div>
  );
};

export default SearchInput;
