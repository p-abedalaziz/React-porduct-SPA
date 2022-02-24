import React from "react";
import { Nav, Container } from 'react-bootstrap';

const NavBar=(props)=>{
    return(
        <>
            <Nav className="navbar  navbar-expand-md   bg-dark mb-5">
                <Container className="container-fluid">
                    <a className='navbar-brand'>
                        <img class="img-fluid" src="./amazon.jpg" width="100PX" />
                    </a>
                </Container>
            </Nav>
        </>
    )
}
export default NavBar;