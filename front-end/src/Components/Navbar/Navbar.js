import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
// import ModalInscrire from '../modal/modalUser/ModalInscrire'
// import MoodalIdentifier from '../modal/modalUser/MoodalIdentifier'

class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <header>
                <MDBNavbar className="nav" dark expand="md">
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
                                        <MDBNavLink to="#"><strong>Objectifs</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/Boutique"><strong>La boutique</strong></MDBNavLink>
                                    </MDBNavItem> <MDBNavItem>
                                        <MDBNavLink to="/Blog"><strong>Blog</strong></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><strong>Connexion</strong></MDBNavLink>
                                    </MDBNavItem>

                                </MDBNavbarNav>
                            </MDBCollapse>
                        </div>

                    </MDBContainer>
                </MDBNavbar>

            </header>

        );
    }
}

export default FullPageIntroWithNonFixedTransparentNavbar;

