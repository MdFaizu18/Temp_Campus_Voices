import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoHome } from "react-icons/io5";

import { BsPersonVcardFill, BsFillCollectionFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import LoginUser from './LoginUser';



function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
            <Container fluid className='navbar-main'>
                <Navbar.Brand href="/dashboard-student" className='head-font head-color'> <span style={{ color:'rgb(255, 128, 0)' }}>Campus</span> Voices</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="margin-center my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/dashboard-student" className='medium-font white-font padding-center'>
                        <IoHome className='imported-icons'/>
                        Home
                        </Nav.Link>
                        <div className="border-right"></div>
                        <Nav.Link href="/dashboard-student/stuffs" className='medium-font white-font padding-center'>
                        <BsFillCollectionFill className='imported-icons'/>
                        Stuffs</Nav.Link>
                        <div className="border-right"></div>
                        <Nav.Link href="/dashboard-student/about" className='medium-font white-font padding-center'>
                        <BsPersonVcardFill className='imported-icons'/>
                       About</Nav.Link>
                        
                    </Nav>
                    <Form className="d-flex">
                    <div>

                        <LoginUser className="user-name"/>
                    </div>
                        <h4 className='white-font'><Nav.Link href='/'><IoMdLogOut className='imported-icons-log'/>Logout</Nav.Link></h4>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;