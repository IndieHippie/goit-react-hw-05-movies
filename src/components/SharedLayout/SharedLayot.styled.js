import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  color: black;
  padding: 12px;
  border-radius: 5px;

  transition-duration: 250ms;

  :last-child {
    margin-left: 20px;
  }
  :hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
  &.active {
    color:  #188ce8;
  }

  &.active:hover {
    color: #fff;
  }
`;

export const NavWraper = styled.nav`
  height: 100px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: left;
  border-bottom: 2px solid;
`;