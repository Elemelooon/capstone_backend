import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AdminNav = () => {
    let navigate = useNavigate();

    let logoutSubmit = () => {
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully");
        navigate("/AdminLogin/iXez7pmIiKnfd4FUKVPgXkmeU4loEw");

    }
    let user = localStorage.getItem('user');
    return ( 
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/Addrecipe">Add Recipe</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Addingredient">Add Ingredient</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Adddisplay">Add Display</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Addinstruction">Add Instruction</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Addfilter">Add Filter</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Addlocation">Add Location</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Addrestaurant">Add Restaurant</Link>
            </Nav.Link>
            <button className='btn btn-outline-dark' onClick={logoutSubmit}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
     );
}
 
export default AdminNav;