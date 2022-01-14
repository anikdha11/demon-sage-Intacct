import React from 'react';
import Slider from "react-slick";
import "../../Footer/Footer.css"

const HomeSection2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='mb-5'>
            <h1 className='text-start ms-5 mb-4'>See what’s popular</h1>
            <Slider className='w-75 mx-auto h-100 border rounded mb-5 shadow-lg'  {...settings}>
                <div className='bg-secondary p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='bg-warning p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='bg-success p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='bg-warning p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='bg-danger p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
                <div className='bg-primary p-5 link'>
                    <h3> FEATURED WEBINAR:</h3>
                    <br />
                    <p>5 Signs Your Nonprofit Has Outgrown QuickBooks</p>
                    <br />
                    <p>Thursday, January 20, 2022, 11:00 am PT</p>
                    <a href="#a">Register <i class="fas fa-arrow-right"></i></a>
                </div>
            </Slider>

            <div className='text-start ms-5 mb-5'>
                <span className='mt-5 fw-normal border-bottom border-2 border-dark'>View all accounting and financials resources</span>
            </div>

            <hr style={{ marginTop: '6rem' }} className='w-75 mx-auto' />
            <p className='w-75 mx-auto'>1. Gartner, Inc., “Critical Capabilities for Cloud Core Financial Management Suites for Midsize, Large, and Global Enterprises”; Robert Anderson, John Van Decker, Greg Leiter; May 11, 2021 (ID: G00733936) (In the 2017 report Sage Intacct was recognized as “Intacct”)</p>
        </div>
    );
};

export default HomeSection2;