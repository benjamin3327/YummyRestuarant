/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import {Link} from "react-router-dom";

import '../assets/responsive.css';
import '../assets/slicknav.min.css';
import '../assets/style.css';
import './navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top">Yummy Restaurant</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a to="/home" className="nav-link js-scroll active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a to="/about" className="nav-link js-scroll">About</a>
                            </li>
                            <li className="nav-item">
                                <a to="/shop" className="nav-link js-scroll">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a to="/contact" className="nav-link js-scroll">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
