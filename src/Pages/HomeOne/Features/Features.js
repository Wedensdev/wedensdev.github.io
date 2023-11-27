import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';



const Features = () => {
    const featuresData = [
      {
        title: 'UI/UX Designing',
        subtitle: 'Business',
        imgUrl: 'assets/img/features-1.jpg',
        href: '/portfolio-details',
      },
      {
        title: 'Branding Strategy',
        subtitle: 'Design strategy',
        imgUrl: 'assets/img/features-2.jpg',
        href: '/portfolio-details',
      },
      {
        title: 'Product Design',
        subtitle: 'Creative',
        imgUrl: 'assets/img/features-3.jpg',
        href: '/portfolio-details',
      },
      {
        title: 'SEO Optimisation',
        subtitle: 'Finance',
        imgUrl: 'assets/img/features-4.jpg',
        href: '/portfolio-details',
      },
    ];
    const [active, setActive] = useState(1);
    const handelActive = index => {
      setActive(index);
    };

    return (
        <div className="features__area">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <Swiper
                            slidesPerView={4}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                640: {
                                    slidesPerView: 2
                                },
                                991: {
                                    slidesPerView: 3
                                },
                                1400: {
                                    slidesPerView: 4
                                },
                            }}
                            className="features-slider"
                        >
                            {featuresData.map((item, index) => (
                                <SwiperSlide                                
                                    className={`features__area-item ${active === index ? 'active' : ''}`}
                                    key={index}
                                    onMouseEnter={() => handelActive(index)}
                                >
                                    <img src={item.imgUrl} alt="" />
                                    <div className="features__area-item-content">
                                        <div className="features__area-item-content-icon">
                                            <Link to={item.href}><i className="fal fa-plus"></i></Link> 
                                        </div>
                                        <h3><Link to={item.href}>{item.title}</Link></h3>                                    
                                        <p>{item.subtitle}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;