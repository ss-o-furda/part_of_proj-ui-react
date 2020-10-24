import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar>
            <Link to="/"><Navbar.Brand>Reactjs + Python + AWS</Navbar.Brand></Link>

            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link><Link to="/" style={{color: "black"}}>Main Page</Link></Nav.Link>
                    {/*<Nav.Link><Link to="/login" style={{color: "black"}}>Login</Link></Nav.Link>*/}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;