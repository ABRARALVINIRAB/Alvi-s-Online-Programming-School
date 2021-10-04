import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    console.log(props.service)
    const { name, img, price } = props.service;
    return (
        <div>

            <Col>
                <Card className='card-container'>
                    <Card.Img className='h-50' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Course name: {name}</Card.Title>
                        <Card.Text>
                            Price:$ {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;