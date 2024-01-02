import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo1';



const LandingPage = () => {
    return (
        <Wrapper>
            <div className='container-grid'>
            <Logo/>
                <h1>Students feedback survey</h1>
                <h3>we would love to know what would you think about our college <br /> through Campus Voices</h3>
                <Link to="/login" className="button">Let's Start</Link>
            </div>
        </Wrapper>
    );
};

export default LandingPage;



