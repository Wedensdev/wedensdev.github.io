import React from 'react';
import FooterOne from '../../Footer/FooterOne';
import HeaderOne from '../../Header/HeaderOne';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Video from '../Video/Video';
import bannerBg from '../../../assets/img/video.jpg';
import Work from '../Work/Work';
import { pageTitle } from '../../PageTitle';

const HomeOne = () => {
    pageTitle('Metier');
    return (
        <>
            <HeaderOne></HeaderOne>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Video bannerBg={bannerBg}></Video>
            <Work></Work>
            <FooterOne></FooterOne>
        </>
    );
};

export default HomeOne;