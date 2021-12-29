import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import "./navbar.css"
const NavBar = () => {
    return (
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Dawson</Navbar.Brand>
                <Container className="justify-content-md-center">
                    <Nav className="m-auto ">
                        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="#features">About</Nav.Link>
                        <Nav.Link className="nav-link" href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default NavBar;