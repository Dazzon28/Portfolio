import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import "./navbar.css"
const NavBar = () => {
    return (
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Dawson</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default NavBar;