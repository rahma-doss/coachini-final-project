import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import {connect} from 'react-redux'
// import {logout} from '../'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <MDBNavbar className={this.props.bg ? "secondary-nav" : "nav"} dark expand="md">
                    <MDBContainer>

                        <div>
                            <MDBNavbarBrand href="/">
                                <h6>Coachi-INI</h6>
                            </MDBNavbarBrand>
                        </div>

                        <div>
                            <MDBNavbarToggler onClick={this.onClick} />
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem >
                                        <MDBNavLink to="/Coachs"><strong>Coachs sportifs</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Activités"><strong>Spécialités</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Boutique"><strong>La boutique</strong></MDBNavLink>
                                    </MDBNavItem> <MDBNavItem>
                                        <MDBNavLink to="/Blog"><strong>Blog</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><strong>Connexion</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/register"><strong>Register</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/login"><strong>Login</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/logout"><strong>logout</strong></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </div>

                    </MDBContainer>
                </MDBNavbar>

            </div>
        );
    }
}

export default Navbar;

