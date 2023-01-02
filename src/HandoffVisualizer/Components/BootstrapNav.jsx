import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./BootstrapNav.css";

export default class BootstrapNav extends Component {
    render() {
        return (
            <div>
                <Navbar
                    bg="dark"
                    expand="md"
                    variant="dark"
                    fixed="top"
                    className="navbrand"
                >
                    <Navbar.Brand href="#home">
            
                        Wireless Network Handoff
                    </Navbar.Brand>
                    
                    
                </Navbar>
            </div>
        );
    }
}
