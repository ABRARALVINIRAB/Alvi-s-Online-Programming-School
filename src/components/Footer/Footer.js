import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";


import logo from '../../images/alv.png'



const Footer = () => {
    return (

        <div className="footer-container">
            <div className="row">
                <div className="col-md-4">
                    <div className="first-container shadow p-3 mb-5 bg-body rounded h-75">
                        <h1>Alvi's Online Programming School</h1>
                        <h3>Contact</h3>
                        <div className="call-container d-flex justify-content-center">
                            <div className="call-container-part-one ">
                                <FontAwesomeIcon className='mt-2' icon={faAddressBook} />
                            </div>
                            <div className="call-container-part-two ms-2">
                                <h3>01742916158</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="second-container shadow p-3 mb-5 bg-body rounded h-75 ">
                        <h1>Courses</h1>
                        <h3>Web Design</h3>
                        <h3>Web development</h3>
                        <h3>Ui/ux</h3>

                    </div>

                </div>
                <div className="col-md-4 ">
                    <div className="third-container shadow p-3 mb-5 bg-body rounded h-75">
                        <h1>Sign up for Updates</h1>
                        <input type="email" name="" id="" placeholder="give email" />
                        <br />
                        <button className="mt-3 ">Submit</button>

                    </div>

                </div>


            </div>
            <div className="small">
                <div className="icons-container mt-5 d-flex justify-content-center text-center ">
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                </div>
                <p className="">
                    <small className=''> Copyright © Alvi Nir's</small>
                </p>
            </div>

            {/* 
            <div className="row ">
                <div className="col-md-4 ">
                    <div className="first-container shadow p-3 mb-5 bg-body rounded h-75">
                        <h1>Alvi's Online Programming School</h1>
                        <h3>Contact</h3>
                        <div className="call-container d-flex justify-content-center">
                            <div className="call-container-part-one ">
                                <FontAwesomeIcon className='mt-2' icon={faAddressBook} />
                            </div>
                            <div className="call-container-part-two ms-2">
                                <h3>01742916158</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 ">
                    <div className="second-container shadow p-3 mb-5 bg-body rounded h-75 ">
                        <h1>Courses</h1>
                        <h3>Web Design</h3>
                        <h3>Web development</h3>
                        <h3>Ui/ux</h3>

                    </div>


                </div>
                <div className="col-md-4 ">
                    <div className="third-container shadow p-3 mb-5 bg-body rounded h-75">
                        <h1>Sign up for Updates</h1>
                        <input type="email" name="" id="" placeholder="give email" />
                        <br />
                        <button className="mt-3">Submit</button>

                    </div>

                </div>


            </div>
            <div>
                <p className="mt-5 mb-5">
                    <small className='small'> Copyright © Alvi Nir's</small>
                </p>
            </div> */}

        </div>


    );
};

export default Footer;