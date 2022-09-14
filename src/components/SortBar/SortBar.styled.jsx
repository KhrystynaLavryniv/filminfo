import styled from 'styled-components';

export const SortBarSelect = styled.select`
  cursor: pointer;
  border: none;
  background-color: #404040;
  padding: 10px 15px;

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
export const SortBarOption = styled.option`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
