import { lazy } from "react";

const SearchInput = lazy(() => import('../components/SearchInput/SearchInput'));

const Movies = () => {
  return (
    <div>
      <SearchInput />
    </div>
  );
};

export default Movies;