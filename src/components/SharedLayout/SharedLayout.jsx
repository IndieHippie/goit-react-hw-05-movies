import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledLink, NavWraper } from './SharedLayot.styled';
// import { GlobalStyle } from 'GlobalStyle';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <NavWraper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavWraper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* <GlobalStyle /> */}
      </Container>
    </>
  );
};
