import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/edu.jpg'

const Header = () => {
    return (
        <div className="menuBar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        {/* <div className="logo-img">
                            <img className="w-50" src={logo} alt="" />
                        </div> */}
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/mentors" className="items">
                                    <li>Mentors</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="about" className="items">
                                    <li>About </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;