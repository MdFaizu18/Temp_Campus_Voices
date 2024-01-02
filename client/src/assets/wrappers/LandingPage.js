import styled from 'styled-components';
import BackImg from '../images/backimg03.png';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh; /* Adjust the height as needed */
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
`;

export default Wrapper;
