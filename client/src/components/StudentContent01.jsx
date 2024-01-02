import React from 'react';
import { Image1 } from '../components'


const StudentContent01 = () => {
  return (
    <>
          <div className="grid-two">
              <div className="main-content-right">
                  <div className="headingone" >
                      <h1><span>Campus</span> Voice's</h1>
                  </div>
                  <h1 className="headingtwo">MIT Chatter Box</h1>

                  <p className="lead">
                      It's a platform provided for students where they can easily share their opinions, suggestions, and concerns regarding different aspects of their academic journey. This might include feedback about courses, instructors, facilities, and overall campus experience.

                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <div className="contCompose">
                          <a href="/dashboard-student/feedbacks" className="composeBtn">Compose</a>
                      </div>

                  </div>
              </div>
              {/* MIT image on right side */}
              <div className="main-image-left">
                  <Image1 />
              </div>


          </div>

    </>
  )
}

export default StudentContent01;
