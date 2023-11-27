import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner__area" style={{backgroundImage: `url('assets/img/banner.png')`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="banner__area-content">
                            <h1>Create your <span>Portfolio</span></h1> 
                            <Link className="theme-btn" to="/portfolio-three">All Project <i className="fal fa-long-arrow-right"></i></Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner__area-bottom">
                <div className="banner__area-bottom-icon">
                    <ul>
                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                        <li><Link to=""><i className="fab fa-behance"></i></Link></li>
                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;