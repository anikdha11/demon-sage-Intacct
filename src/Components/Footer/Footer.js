import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div style={{ marginTop: "6rem" }}>
            <div className='d-flex justify-content-center mb-5 icon'>
                <span> <i class="fab fa-facebook-f fb"></i></span>
                <span><i class="fab fa-linkedin-in ms-2 me-2 linkedin"></i></span>
                <span><i class="fab fa-twitter twitter"></i></span>
                <span><i class="fab fa-youtube ms-2 me-2 youtube"></i></span>
                <span><i class="fab fa-instagram instagram"></i></span>
                <span><i class="fab fa-google-wallet ms-2 google"></i></span>
            </div>

            <Container>
                <Row>
                    <Col sm={6} >
                        <div className='d-flex flex-wrap'>
                            <div className='d-flex flex-column link'>
                                <h6>Products</h6>
                                <a href="#contact">Core Financials</a>
                                <a href="#Customer Meetups">Dashboard and Reporting</a>
                                <a href="#Sage Transform">  Billing</a>
                                <a href="#User Groups"> Planning</a>
                                <a href="#Recommend Sage Intacct">Sage Intacct Platform</a>
                                <a href="#Free 30-day Trial"> Advanced Functionality</a>
                            </div>
                            <div className='d-flex flex-column link ms-3'>
                                <h6>Services</h6>
                                <a href="#contact">Support</a>
                                <a href="#Customer Meetups">Training</a>
                                <a href="#Sage Transform">Community</a>
                                <a href="#User Groups">Professional Services</a>
                            </div>
                            <div className='d-flex flex-column link ms-3'>
                                <h6>Products</h6>
                                <a href="#contact">Contact</a>
                                <a href="#Customer Meetups">Customer Meetups</a>
                                <a href="#Sage Transform">Sage Transform</a>
                                <a href="#User Groups">User Groups</a>
                                <a href="#Recommend Sage Intacct">Recommend Sage Intacct</a>
                                <a href="#Free 30-day Trial">Free 30-day Trial</a>
                            </div>
                        </div>
                        <div className='d-flex flex-warp mt-4'>
                            <div className='d-flex flex-column link'>
                                <h6>Why Sage Intacct</h6>
                                <a href="#contact">Industries</a>
                                <a href="#Customer Meetups"> Customer Case Studies</a>
                                <a href="#Sage Transform">Customer Videos</a>
                                <a href="#User Groups">Considering QuickBooks?</a>
                                <a href="#User Groups">Considering Blackbaud?</a>
                                <a href="#User Groups">Considering Acumatica?</a>
                                <a href="#User Groups">Considering Abila MIP Fund Accounting?</a>
                                <a href="#User Groups">Considering MS Dynamics 365 Business Central?</a>
                                <a href="#User Groups">Considering MS Dynamics GP?</a>
                            </div>
                            <div className='d-flex flex-column link ms-3'>
                                <h6>Partners</h6>
                                <a href="#contact">ValueAdded-Resellers</a>
                                <a href="#Customer Meetups">Outsourcing Partners</a>
                                <a href="#Sage Transform">Marketplace Partners</a>
                                <a href="#User Groups"> Become a Partner</a>
                            </div>
                            <div className='d-flex flex-column link ms-3'>
                                <h6>Company</h6>
                                <a href="#contact">Careers</a>
                                <a href="#Customer Meetups">About Us</a>
                                <a href="#Sage Transform">Newsroom</a>
                                <a href="#User Groups">Events</a>
                                <a href="#User Groups">Trust</a>
                            </div>
                        </div>

                    </Col>
                    <Col sm={2}>
                        <div className='d-flex flex-column link'>
                            <h6>Quick Links</h6>
                            <a href="#contact">Contact</a>
                            <a href="#Customer Meetups">Customer Meetups</a>
                            <a href="#Sage Transform">Sage Transform</a>
                            <a href="#User Groups">User Groups</a>
                            <a href="#Recommend Sage Intacct">RecommendSageIntacct</a>
                            <a href="#Free 30-day Trial">Free 30-day Trial</a>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='text-start'>
                            <h4 className='fw-bolder'> <span className='text-success'>Sage</span> Intacct</h4>
                            <h5>Sage Intacct</h5>
                            <p>300 park Avenue, Suite 1400  San Jose, CA 95110</p>
                            <h5>Sales Inquires</h5>
                            <p>877-437-7765</p>
                            <h5>Customer Support</h5>
                            <div>
                                <span> North America: 877-704-3700 (US toll free) or 408-785-7340</span>
                                <br />
                                <span>United Kingdom: +44 (0)19 1479 5990</span>
                                <br />
                                <span>Australia:+61 1300 729 330</span>
                                <br />
                                <span>South Africa: +27 (0)11 304 3220</span>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='d-flex justify-content-evenly mt-4'>
                <span >
                    <span className='fw-bold me-4'> Also of Interest:</span>What is an ERP system?
                </span>
                <span>Inventory Management System</span>
                <span>Purchase Order Software</span>
            </div>
            <div className='mt-2'>
                <span>© Copyright 2022 Sage Intacct, Inc. | Privacy Policy | Cookie Notice | Responsible Disclosure | Customer Terms | Site Map</span>
            </div>

        </div>
    );
};

export default Footer;