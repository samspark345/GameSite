import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function MyNav(){
//     style={{
//         color : "white", 
//         backgroundColor:"black", 
//         borderRadius: "5px"
// }}
    return ( 
        <Navbar className="navbar-dark" bg="" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand 
                  style={{
                    color : "white"
            }}>Game Home</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/discoverGames">Discover Games</Link>
                        <Link to="/rateGames">Rate Games</Link>
                        <Link to="/aboutUs">About Us</Link>
                        <Link to="/contactUs">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default MyNav;