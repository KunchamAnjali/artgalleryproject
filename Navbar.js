import React from "react";
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <img className="logo" src="https://images-platform.99static.com//xo_KBiNX3tSwqoXl9thaypP-BhM=/0x0:2000x2000/fit-in/500x500/99designs-contests-attachments/94/94229/attachment_94229970"></img>
                <Link to="/home" className="title">Art Gallery</Link>
            </div>
            <ul>
                <li><Link to="home/">Home</Link></li>
                <li><Link to="display/">Collections</Link></li>
                <li><Link to="newarts/">New Arts</Link></li>
                <li><Link to="exhibitions/">Exhibitions</Link></li>
                <li><Link to="about/">About</Link></li>
                <li>
                    <Link to="profile/">
                    <i className="fas fa-user"></i>
                    </Link>
                </li>
                <li><Link to="cart/"><i class="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar