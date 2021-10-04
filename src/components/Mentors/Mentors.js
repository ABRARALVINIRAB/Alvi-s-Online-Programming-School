import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import mentor1 from '../../images/mentor-1.jpg'
import mentor2 from '../../images/mentor-2.jpg'
import mentor3 from '../../images/mentor-3.jpg'
import mentor4 from '../../images/mentor-4.jpg'
import './Mentor.css'

const Mentors = () => {
    return (
        <div className='container'>
            <div className="header">
                <h1> Our Top Online Mentors</h1>
                <h3>A mentor is a person or friend who guides a less experienced person by building trust and modeling positive behaviors</h3>
            </div>
            <Row xs={1} md={4} className="g-4 mentor-container">

                <Col className="single-card shadow p-3 mb-5 bg-body rounded p-2" >
                    <img className="images" src={mentor1} alt="" />
                    <h1>Jhon</h1>
                    <h3>Web Teacher</h3>
                </Col>
                <Col className="p-3 mb-5">
                    <img className="images" src={mentor2} alt="" />
                    <h1>Nairobi</h1>
                    <h3>Ui/Ux Teacher</h3>
                </Col>
                <Col className="shadow p-3 mb-5 bg-body rounded">
                    <img className="images" src={mentor3} alt="" />
                    <h1>Masab</h1>
                    <h3>Programming Teacher</h3>
                </Col>
                <Col className=" p-3 mb-5">
                    <img className="images" src={mentor4} alt="" />
                    <h1>Leo</h1>
                    <h3>Algorithom Teacher</h3>
                </Col>

            </Row>

        </div>
    );
};

export default Mentors;