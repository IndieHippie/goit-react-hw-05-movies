import { Dna } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrap >
      <Dna  />
    </LoaderWrap>
  );
}

export default Loader;