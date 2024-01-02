import React from 'react';
import FeedbackStuff from './FeedbackStuff';
import { useAllFeedsContext } from '../pages/Stuffs';
import NoFeedbackImg from './NoFeedbackImg';

const UserStuffs = () => {
    const { data } = useAllFeedsContext();
    const { feeds } = data;
    if (feeds.length === 0) {
        return (
            <div>
            <NoFeedbackImg/>
                <h2 className='stuff-img-bottom-header'>No Feedbacks to display...</h2>
            </div>
        );
    }
    return (
        <>
        <div className="stuff-header">
            <h1>My Response</h1>
        </div>
        <div className="stuff-main-boxes">
            {feeds.map((feed) => {
                return <FeedbackStuff key={feed._id} {...feed} />;
            })}
        </div>

        </>
    );
};

export default UserStuffs;




