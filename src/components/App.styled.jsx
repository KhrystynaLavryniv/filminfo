import styled from 'styled-components';
import Back from '../images/back.jpeg';

export const AppContainer = styled.div`
  background-color: #2b405e;
  width: 100%;
  min-height: 100vh;
  background-image: url(${Back});
  background-size: 100%;
`;
export const Container = styled.div`
  max-width: 1100px;
  background-color: #212c39;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  -moz-box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
  box-shadow: 5px 5px 12px 0px rgba(196, 232, 241, 1);
`;
