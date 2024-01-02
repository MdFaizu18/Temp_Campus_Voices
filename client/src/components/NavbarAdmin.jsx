import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar';
import { MdQueryStats } from "react-icons/md";
import React from 'react';
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
import { BsPersonVcardFill } from "react-icons/bs";
import { GrSemantics } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top">
            <Container fluid className='navbar-main'>
                <Navbar.Brand href="/dashboard-student" className='head-font head-color'> <span style={{ color: 'rgb(255, 128, 0)' }}>Campus</span> Voices</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="margin-center my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/admin" className='medium-font white-font padding-center'>
                            <MdOutlineTipsAndUpdates className='imported-icons' />
                            Updates
                            {/* <h6> <Badge bg="danger">New</Badge></h6> */}
                        </Nav.Link>
                        <div className="border-right"></div>
                        <Nav.Link href="/admin/stats" className='medium-font white-font padding-center'>
                            <MdQueryStats className='imported-icons' />
                            Stats</Nav.Link>

                        <div className="border-right"></div>
                        <Nav.Link href="/admin/about" className='medium-font white-font padding-center'>
                            <BsPersonVcardFill className='imported-icons' />
                            About</Nav.Link>
                       </Nav> 

                       
                    <Form className="d-flex">
                        <div className='admin-navbar-box'>
                            <FaUserCircle className='user-name2' /> <p className='user-name3' >Admin</p>
                        </div>
                        <h4 className='white-font'><Nav.Link href='/'><IoMdLogOut className='imported-icons-log' />Logout</Nav.Link></h4>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;