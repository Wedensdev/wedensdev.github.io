import React from "react";
import FooterThree from "../../Footer/FooterThree";
import HeaderOne from "../../Header/HeaderOne";
import { pageTitle } from "../../PageTitle";
import PortfolioFilter from "../../Portfolio/PortfolioFilter";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Skill from "../Skill/Skill";
import AboutMe from "../AboutMe/AboutMe";

const HomeThree = () => {
  pageTitle("Metier");
  return (
    <>
      <HeaderOne />
      <Banner />
      <AboutMe />
      <Skill />
      <PortfolioFilter />
      <Reviews />
      <FooterThree />
    </>
  );
};

export default HomeThree;
