import styled from 'styled-components';
import Bi from '../../images/cinema-hall2хDes.jpg';
export const Container = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2a363b;
  padding: 60px 30px;
  background-color: #2a363b;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(${Bi});
  background-repeat: no-repeat;
  background-size: 100%;
`;
