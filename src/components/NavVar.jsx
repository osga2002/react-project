import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { BsFillArchiveFill } from "react-icons/bs";

const NavVar = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="/logo.svg" width="30" height="30" className="d-inline-block align-top"
                            alt="React Bootstrap logo" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
                <CartWidget />
            </Navbar>
            </>
    )
}

export default NavVar
