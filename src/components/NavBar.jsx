import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import { BsHouseDoorFill, BsFillArchiveFill } from "react-icons/bs";


const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <BsHouseDoorFill />
                    <Navbar.Brand href="#home">Proyecto E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Catalogo</Nav.Link>
                            <NavDropdown title="Beneficios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Primicias</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Perdón</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Redención</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Hijo de Dios</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                    <BsFillArchiveFill />
                    <CartWidget />

            </Navbar>
            </>
    )
}

export default NavBar
