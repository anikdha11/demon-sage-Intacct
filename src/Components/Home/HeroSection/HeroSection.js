import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from "../../../image/demo-sange.jpg"
const HeroSection = () => {
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row className='align-items-start'>
                    <Col className='text-start' sm={6}>
                        <h1 >
                            The Leader in Accounting and Financial Management Software
                        </h1>
                        <p>Whether you’re a growing startup or an established public company, we’re the right partner for your long-term success.</p>
                        <Button variant="outline-success">Watch Demo</Button>{' '}

                    </Col>
                    <Col sm={6}>
                        <img className='border border-1 rounded img-fluid h-75 shadow' src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;