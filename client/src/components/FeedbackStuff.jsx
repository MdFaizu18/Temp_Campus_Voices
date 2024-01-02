import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { FaUserCircle, FaCaretRight } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import { Form } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import React from "react";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

day.extend(advancedFormat);


const FeedbackStuff = ({_id, message, createdAt }) => {
    const date = day(createdAt).format("MMM Do, YYYY");
    return (
        <>

        
        <div className="stuff-card-container">
        <div className="stuff-card-box">
            <Card border="dark" >
                        <Card.Header>  <FaCaretRight /> My Feed</Card.Header>
                      
                        <Card.Body style={{ backgroundColor: 'rgb(243, 238, 234)' }}>
                            <Card.Title>{date}</Card.Title>
                    <Card.Text>
                                <IoArrowRedoCircleSharp />    {message}
                    </Card.Text>
                            <Form method='post' action={`../delete-feed/${_id}`}>
                                <button type='submit' className='btn delete-btn'>
                                    <MdDelete className="imported-icons"/>Delete
                                </button>
                            </Form>
                </Card.Body>
            </Card>
        </div>
        <div className="stuff-card-box-admin">
            <div className="admin-response-box">
                <div>Not yet responsed</div>
            </div>
        </div>
        </div>
     
     
        </>
    );
}

export default FeedbackStuff;
