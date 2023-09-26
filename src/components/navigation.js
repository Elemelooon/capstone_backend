import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigationbar = () => {
    return ( 
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Trial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/Recipelist">Recipes</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/RandomRecipe">Random Recipes</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/RandomRec">Random Recipes2</Link>
            </Nav.Link>
            <NavDropdown title="Add to Database" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/Addrecipe">Add Recipe</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Addingredient">Add Ingredient</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Adddisplay">Add Display</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Addinstruction">Add Instruction</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Addfilter">Add Filter</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
     );
}
 
export default Navigationbar;