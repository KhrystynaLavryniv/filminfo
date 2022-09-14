import styled from 'styled-components';
import Back from '../images/back.jpeg';

export const AppContainer = styled.div`
  padding: 40px 0;
  background-color: #2b405e;
  width: 100%;
  min-height: 100%;
  background-image: url(${Back});
  background-size: 100%;
`;
export const Container = styled.div`
  max-width: 1000px;
  background-color: #404040;

  margin: 0 auto;
  // border: 1px solid white;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
`;
