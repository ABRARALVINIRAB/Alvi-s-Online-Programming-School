import React from 'react';
import Header from '../Header/Header';
import './Banner.css'
import video from '../../video/hero-video.mp4'

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <Header></Header>
                    <div className="col-md-6 first-container">
                        <h1 className="title">
                            Learn New Skills Online Find Best Courses & Become Master
                        </h1>
                        <p className="text-white text-center mt-3">

                        </p>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;