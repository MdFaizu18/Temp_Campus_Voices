import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 1rem;
    margin-top: -2rem;
  }
  .imported-icon{
    margin-right:5px;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  .search-box-form-reg p{
        font-size:19px;
        margin-bottom:6px;
  }
  .search-box-border{
    ${'' /* border:1px solid black; */}
    box-shadow:1px 1px 2px black;
    padding:40px 30px;
    border-radius:5px;
    margin-top:-20px;
    background:#f8fafc;
    ${'' /* background-color:rgb(12, 19, 79); */}
  }
  .search-box-form{
        width: 100%;
        padding: .5rem .5rem;
        border-radius:5px;
        background:rgb(255, 225, 123);
           ${'' /* background:rgb(246, 241, 233); */}
        ${'' /* border: 1px solid var(--primary-103); */}
        color: black;
        ${'' /* margin-bottom: 30px;                                                                                                 */}
        font-size: 18px;
         box-shadow:1px 1px 2px black;
}
  .search-box-form-reg{
        width: 100%;
        height: 95px;
        padding: .5rem .5rem;
        border-radius: 5px;
         background:rgb(255, 225, 123);
         ${'' /* background:rgb(246, 241, 233); */}
        ${'' /* border: 1px solid var(--primary-103); */}
        color: black;
        margin-top: 4px;
        margin-bottom: 5px;
       box-shadow:1px 1px 2px black;
        font-size: 18px;
}
  .search-box-form-reg input{
        width: 100%;
        height: 48%;
        ${'' /* border-radius: var(--border-radius); */}
        border: 1px solid var(--primary-103);
        padding: .1rem .5rem;
        margin-top: 5px;
}
.form-btn{
    border-radius:5rem;
    border: 1px solid black;
    margin:0px 40% 5px 0%;
    padding:15px;
    color:white;
    background:teal;
    ${'' /* box-shadow:0px 0px 3px white; */}
    font-size:1.1rem;
}
  @media (max-width: 992px) {
    .form-btn{
    margin:0px 4px 4px 0;
    padding:10px 15px;
    color:white;
  
    background:teal;
    ${'' /* box-shadow:0px 0px 3px white; */}
    font-size:1rem;
      
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem; 
}

  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }

  }
`;

export default Wrapper;