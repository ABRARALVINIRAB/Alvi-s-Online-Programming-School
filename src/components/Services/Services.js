import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('./fakedata.Json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1>See Our Popular Services</h1>
            {
                <Row xs={1} md={4} className="g-4">
                    {
                        services.slice(0, 4).map(service => <Service service={service}
                            key={service.id}></Service>)
                    }
                </Row>

            }
        </div>
    );
};

export default Services;