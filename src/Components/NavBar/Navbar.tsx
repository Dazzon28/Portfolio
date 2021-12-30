import { Dispatch, SetStateAction } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import { useDispatch } from "react-redux";
import { setContactView } from "../../Redux/Slices/viewContacts";
import "./navbar.css"
const NavBar = () => {
    const dispatch = useDispatch()
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home" style={{"marginLeft":"1rem"}}>Dawson</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-link" href="/about">About</Nav.Link>
                    <Nav.Link className="nav-link" href="" onClick={()=>dispatch(setContactView(true))}>Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default NavBar;