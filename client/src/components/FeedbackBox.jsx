import React from 'react';
import day from "dayjs";
// import { BsCaretRight, BsCheck, FaCalendarCheck, BsCursorFill } from 'react-icons/all'; // Import your icon components
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarCheck } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { BsCursorFill } from "react-icons/bs";
import { BsCheck } from "react-icons/bs";
import { AiFillForward } from "react-icons/ai";
import { BsCaretRight,BsCaretUpFill } from "react-icons/bs";
// import { useState, useEffect } from 'react';
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);


//  for converting year words to number 
const wordToNumber = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
};

const convertToOrdinal = (number) => {
    const lastDigit = number % 10;

    switch (lastDigit) {
        case 1:
            return `${number}st Year`;
        case 2:
            return `${number}nd Year`;
        case 3:
            return `${number}rd Year`;
        case 4:
            return `${number}th Year`;
        default:
            return `${number}th Year`;
    }                               
};
const FeedbackBox = ({ _id,message,name,year,department, createdAt }) => {
    const date = day(createdAt).format("MMM Do, YYYY");

    const numericYear = wordToNumber[year];
    const formattedYear = numericYear !== undefined ? convertToOrdinal(numericYear) : year;





    return (
    <div >
      <div className="feedback-container-box">

        <div className="feedback-box-1">
            <div className='year-box' >
              <h5>
                <AiFillForward  />{formattedYear}  <br />
              </h5>

                <h5 className='year-box' >
            <BsCheck />  {department}
                </h5>
            </div>
         </div>

        <div className="feedback-box-2">
          <div className='date-box'><FaCalendarCheck className='imported-icon-form'/>{date}</div>
          <br />
          <div className='message-box'><BsCursorFill className='imported-icon-form' />{message}</div>
        </div>

        <div className="feedback-box-3">
          <h6><FaUserCircle /></h6> 
         <h6 className='name-box'>{name} </h6> 
        </div>
          </div>
        <div className="feedback-container-box-2">
              
                {/* <button type='submit' className='btn delete-btn'>
                  <MdDelete className="imported-icons" />Delete
              </button> */}
   
          </div>
    </div> 

  )
}

export default FeedbackBox
