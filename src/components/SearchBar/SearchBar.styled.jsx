import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;

  // -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  // -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  // box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
`;
export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  padding: 10px 15px;
  width: 100%;

  color: aliceblue;
  border-bottom: 1px solid rgba(196, 232, 241, 1);
  :focus {
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    -moz-box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
    box-shadow: 3px 1px 14px 0px rgba(196, 232, 241, 1);
  }
`;
export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  margin-left: -35px;
  :hover {
    scale: 1.2;
  }
`;
