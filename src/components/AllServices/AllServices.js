import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('./fakedata.Json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1>See Our Popular Services</h1>
            {
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <AllService service={service}
                            key={service.key}></AllService>)
                    }
                </Row>

            }

        </div>
    );
};

export default AllServices;