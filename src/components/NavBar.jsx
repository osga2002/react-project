import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import { BsHouseDoorFill, BsFillCartCheckFill, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom"
//import { BsFillCartCheckFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <BsHouseDoorFill />
                    <Link exact to='/'>
                    <Navbar.Brand href="#home">Proyecto E-commerce Choho</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link exact to='/'><Nav.Link href="#home">Inicio</Nav.Link></Link>
                            <Nav.Link href="#link">Catalogo</Nav.Link>
                            <NavDropdown title="Categoria" id="basic-nav-dropdown">
                                <Nav.Link href="/categoria/kits">Kits</Nav.Link>
                                <Nav.Link href="/categoria/cadenas">Cadenas</Nav.Link>
                                <Nav.Link href="/categoria/filtros">Filtros</Nav.Link>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/categoria/baterias">Baterias</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                    
                    <Link exact to='/cart'>
                        <BsFillCartCheckFill />
                        {/* <BsFillCartCheckFill /> */}
                    </Link>

            </Navbar>
            </>
    )
}

export default NavBar
