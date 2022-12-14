import {Container, Nav, Navbar} from "react-bootstrap"
import { Outlet, Link } from "react-router-dom";

function NavigationBar(){
    return(
        <Navbar as="header" class="navbar navbar-dark" expand ="lg" className="nav">
            <Container>

            </Container>
        </Navbar>
    );
}

export default NavigationBar;