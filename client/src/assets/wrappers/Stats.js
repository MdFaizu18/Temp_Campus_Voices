import styled from 'styled-components';


const Wrapper = styled.div`
.body{
  background:rgb(245, 247, 248);
 }
  .stats-heading{
    display:flex;
    justify-content:center;
    padding:2% 0;
  }
  .stats-heading h2{
    font-size:40px;
  }
  .stats-container{
     height:12vh;
     display:grid;
     justify-content:center;
     align-items:center;
    border:1px solid black;
  }
  .stats-container-box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 20px; 
  padding:10px 15%;
 
}
.box-one, .box-two {
    display:flex;
  justify-content:space-around;
  grid-column: span 2;
  font-size:20px;
  font-weight:bold;
  color:navy;
   ${'' /* background:rgb(255, 251, 235); */}
   background:white;
   border-bottom:5px solid orange;
}
/* Style the first, second, fifth, and ninth boxes to span two columns */
.box-three,.box-four,.box-five,.box-six{
  border-bottom:5px solid teal;
  font-weight:bold;
  font-size:1.2rem;
  display:flex;
    background:white;
   ${'' /* background:rgb(255, 251, 235); */}
  justify-content:space-around;
}

.box-depart01{
  background:white;
  border-bottom:5px solid navy;
   font-size:1.2rem;
}
.box-depart02{
   background:white;
    font-size:1.2rem;
  border-bottom:5px solid navy;
}
.stat-headcount{
  color:orange;
  font-size:30px;
}
  @media (max-width: 992px) {
 .stats-container-box {
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 10px;
  padding:10px 5%;

}
  .stats-container{
    padding-bottom:5%;
  }
   .stats-heading{
    padding-top:5%;
   }
  }


`;

export default Wrapper;