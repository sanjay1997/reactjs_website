import React from "react";
import { Nav} from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";

const Topbar = () =>{
    return (
        <Nav className="navbarrr">
            <h1 className="logo">Navbar</h1>
            <ul className="desktop-list">
                <li><Link to="/" className="lrc1">Home</Link></li>
                <li><Link to="/product" className="lrc1">Products</Link></li>
                <li><Link to="/about" className="lrc1">About Us</Link></li>
                <li><Link to="/contact" className="lrc1">Contact Us</Link></li>
                <li><Link to="/login" className="lrc"><i className="fa fa-sign-in"></i> Login</Link></li>
                <li><Link to="/register" className="lrc"><i className="fa fa-user-plus"></i> Register</Link></li>
                <li><Link to="/cart" className="lrc"><i className="fa fa-cart-plus"></i>    Cart</Link></li>
            </ul>

            <ul className="mobile-list">
                <li><i className="fa fa-list"></i></li>
                <li><i className="fa fa-cart-plus"></i></li>
                <li><Link to="/" className="lrc1"><i className="fa fa-home"></i></Link></li>
                <li><i className="fa fa-heart"></i></li>
                <li><Link to="/login" className="lrc1"><i className="fa fa-user"></i></Link></li>
            </ul>
        </Nav>
    );
};

export default Topbar;