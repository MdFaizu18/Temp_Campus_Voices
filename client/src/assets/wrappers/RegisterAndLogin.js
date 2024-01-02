import styled from 'styled-components';

const Wrapper = styled.section`

min-height: 100vh;
 display: grid;
  place-items: center;
  background-color: var(--background-color-101);
  .logo {
    height: 80px;
    width:100px;
    display: block;
    margin: 0 auto;
   
  }
  .form-row{
    width:80%;
    font-size:1rem;
  }
  .form {
    padding: 20px 20px;
    width: 420px;
    border-top: 10px solid var(--primary-103);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4),
      0px 7px 13px -3px rgba(0, 0, 0, 0.3),
      inset 0px -3px 0px rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    grid-gap: 8px;
  }
  .register-form{
    margin-top:2%;
    margin-bottom:2%;
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
    font-size:35px;
  }
  p {
    text-align: center;
    line-height: 0.5;
    font-size:1rem;
  }
  .btn {
    background-color: var(--primary-103);
    color: white;
    font-size:18px;
  }
  .member-btn {
    color: var(--secondary-101);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.35rem;
  }
  @media screen and (max-width:992px){
    .form {
    padding: 20px 40px;
    width:350px;
  }
   .logo {
    height: 90px;
    width:110px;

  }
  h4 {
    margin-bottom: 1rem;
    font-size:38px;
  }
  p {
    text-align: center;
    line-height: 0.5;
    font-size:1rem;
  }
  .form-row{
    width:100%;
    font-size:1rem;
  }
  }
`;
export default Wrapper;