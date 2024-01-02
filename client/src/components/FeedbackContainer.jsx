import React from 'react'
import { useAdminContext } from '../pages/Admin'
import FeedbackBox from './FeedbackBox';
import NoFeedbackImg from './NoFeedbackImg';
import PageBtnContainer from './PageBtnContainer';

const FeedbackContainer = () => {
  const {data} = useAdminContext();
  const { feedbacks, Totalusers, Totalfeedbacks, numOfPages, currrentFeedbacks } = data || {};
  console.log(feedbacks, Totalusers, Totalfeedbacks);
    if (feedbacks.length === 0) {
      return (
        <div>
          <h3 className='feedback-header-admin'>Feedbacks</h3>
          <NoFeedbackImg />
          <h2 className='stuff-img-bottom-header feedback-container-img'>No Feedbacks to display...</h2>
        </div>
      );
    }
  // const {user} = data2 || {};
  // const registerNo = user.registerNo;
  // console.log(registerNo);
  return (
    <div>
    <div className='flex-feedbacks'>
    <h3 className='flex-feedbacks-box one'>
         <p className='feedback-header-admin'>
         <span style={{ color: 'blue' , marginRight:'10px' }}>{currrentFeedbacks}</span>
          Feedbacks Founds
         </p>
    </h3>

    </div>
      <div className="feedback-main-container">
        <div className="feedback-sub-container">
        {feedbacks.map((feed) => {
          return <FeedbackBox key={feed._id} {...feed} />;
        })}
       </div>
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  )
}

export default FeedbackContainer
