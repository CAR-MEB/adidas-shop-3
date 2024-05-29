import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import adidas_logo from '../../assets/msg689684673-74665.jpg';
import cart_logo from '../../assets/msg689684673-74670.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

        <div className="header-container">
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand  href="/"><img id='logo_img' src={adidas_logo} alt="adidas-logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/home' className='item'>Home</Link>
                        <Link to='/man' className='item'>Man</Link>
                        <Link to='/women' className='item'>Women</Link>
                        <Link to='/kids' className='item'>Kids</Link>
                        <Link to='/cart' ><img id='cart_lg' src={cart_logo} alt="" /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <div className="header-spacer"></div>

        </>
    );
}

export default Header;