import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <div className="about-heading">
    <h1>About this application</h1> 
    </div>
    <div className="about-main-flex">

 

      <Card border="primary" bg='primary' style={{ width: '18rem' }}>
          <Card.Header style={{ marginBottom: '3rem', }}>Feature 01</Card.Header>
        <Card.Body>
            <Card.Title style={{ marginBottom: '2rem' }}>Feedback Management:</Card.Title>
          <Card.Text>
              Once students submit their feedback, the system collects and organizes the data for administrative review. Feedback entries can be categorized and tagged for easy retrieval and analysis..
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" bg='secondary' style={{ width: '18rem' }}>
          <Card.Header style={{ marginBottom: '3rem' }}>Feature 02</Card.Header>
        <Card.Body>
            <Card.Title style={{ marginBottom: '2rem' }}>Student Feedback Submission:</Card.Title>
          <Card.Text>
              Students are provided with a platform where they can easily share their opinions, suggestions, and concerns regarding different aspects of their academic journey. This might include feedback about courses, instructors, facilities, and overall campus experience.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      
      <Card  border="primary"  bg='warning' style={{ width: '18rem' }}>
          <Card.Header style={{ marginBottom: '3rem' }}>Feature 03</Card.Header>
        <Card.Body>
            <Card.Title style={{ marginBottom: '2rem' }}>User Authentication:</Card.Title>
          <Card.Text>
              The system incorporates a secure authentication system to ensure that only authorized individuals can access specific functionalities. Students and staff members would have separate login credentials to access their respective portals.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card  border="success" bg='success' style={{ width: '18rem' }}>
          <Card.Header style={{ marginBottom: '3rem' }}>Feature 04</Card.Header>
        <Card.Body>
            <Card.Title style={{ marginBottom: '2rem' }}>Feedback Tracking:</Card.Title>
          <Card.Text>
              The system could allow administrators to track the progress of actions taken in response to specific feedback. This helps demonstrate accountability and continuous improvement.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
    <Footer/>
    </>
  );
}

export default About;
