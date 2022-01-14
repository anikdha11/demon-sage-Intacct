import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../Footer/Footer.css"
const HomeSection1 = () => {
    return (
        <div className='mt-5 text-start p-4'>
            <Container className='shadow-lg'>
                <Row>
                    <Col sm={4} className='border-end border-2 link p-4'>
                        <h5>See Sage Intacct in action</h5>
                        <p>Learn what Sage Intacct can offer you with a live demo followed by Q&A.</p>
                        <a href="#a">Sign up now <i class="fas fa-arrow-right"></i></a>
                    </Col>
                    <Col sm={4} className='border-end border-2 link p-4'>
                        <h5>#1 for the 5th year in a row</h5>
                        <p>Once again, Sage Intacct received the highest product score in core financials for the lower midsize enterprises use case from Gartner_1.</p>
                        <a href="#a">Read report <i class="fas fa-arrow-right"></i></a>

                    </Col>
                    <Col sm={4} className='link p-4'>
                        <h5>Outgrowing QuickBooks?</h5>
                        <p>Find out why thriving organizations say goodbye to QuickBooks and partner with Sage Intacct to power their growth.</p>
                        <a href="#a">Learn Why <i class="fas fa-arrow-right"></i></a>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeSection1;