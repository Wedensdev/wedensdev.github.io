import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { pageTitle } from "../PageTitle";
import PortfolioFilter from "./Portfolio/PortfolioFilter";
import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";
import Skill from "./Skill/Skill";
import AboutMe from "./AboutMe/AboutMe";

const Home = () => {
  pageTitle("Metier");
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Skill />
      <PortfolioFilter />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
