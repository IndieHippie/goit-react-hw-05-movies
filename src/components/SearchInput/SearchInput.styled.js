import styled from 'styled-components';

export const SearchForm = styled.form`
  padding-top: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: left;
`;

export const SearchBtn = styled.button`
cursor: pointer;
  color: black;
  padding: 8px;
  background-color: #babdba;
  border-radius: 5px;
  border-style: none;

  transition-duration: 250ms;

  color: #010101;
  background-color: #f5f4fa;
  border-radius: 10px;
  border: none;
  transition-duration: 250ms;
  &:hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  :last-child {
    margin-left: 20px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  :hover {
    border-color: rgb(52, 26, 195);
  }
`;
