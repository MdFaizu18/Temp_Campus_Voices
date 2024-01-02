import Wrapper from '../assets/wrappers/Stats';
import React from "react";

const StatsContainer = () => {
  return (
    <Wrapper>
          <div className='stats-container'>
          
          </div>
    </Wrapper>
  )
}

export default StatsContainer;



// const Stats = () => {


//   //* Getting year wise counts

  // const yearMapping = (year) => {
  //   return (
  //     <div key={year._id}>
  //       {year._id} : {year.count} Feedbacks
  //     </div>
  //   );
  // };

//   //* Getting Department wise counts

//   const departmentMapping = (dept) => {
//     return (
//       <div key={dept._id}>
//         {dept._id} : {dept.count} Feedbacks
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h4> Total Users : {totalUsers} </h4>
//       <h4> Total FeedBacks : {totalFeedbacks} </h4>
//       <div>
//         FeedBack Count By Year
//         {feedbackCountByYear.map(yearMapping)}
//       </div>
//       <div>
//         FeedBack Count By Department
//         {feedbackCountByDepartment.map(yearMapping)}
//       </div>
//     </div>
//   );
// };

// export default Stats;
