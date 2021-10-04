import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css'
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <div className='container'>
            <h1>About Us</h1>
            <div className="row">
                <div className="col-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                    <h1>Offices</h1>
                    <div>
                        <h3>Head Office</h3>
                        <h4>Location: Toranto,Canada</h4>
                    </div>
                    <div>

                        <h3>Sub Office</h3>
                        <h4>Location: Dhanmondi,Dhaka</h4>
                    </div>

                </div>
                <div className="col-md-4 ">
                    <h1 className="mt-2">Our Social Media's Link</h1>
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
                </div>
                <div className="col-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                    <h1> Official Emails</h1>
                    <div className="mt-5">
                        <h3>alvisonlineschool@gmail.com</h3>
                        <h3>abraronlineschool@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;