import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import HomeOne from "./Pages/HomeOne/HomeOne/HomeOne";
import HomeThree from "./Pages/HomeThree/HomeThree/HomeThree";
import HomeTwo from "./Pages/HomeTwo/HomeTwo/HomeTwo";
import NewsDetails from "./Pages/News/NewsDetails";
import NewsStandard from "./Pages/News/NewsStandard";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioDetails from "./Pages/Portfolio/PortfolioDetails";
import PortfolioDetailsTwo from "./Pages/Portfolio/PortfolioDetailsTwo";
import PortfolioThree from "./Pages/Portfolio/PortfolioThree";
import PortfolioTwo from "./Pages/Portfolio/PortfolioTwo";
import Preloader from "./Pages/Preloader/Preloader";
import ScrollTop from "./Pages/ScrollTop/ScrollTop";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import ServicesPage from "./Pages/Services/ServicesPage";
import CustomCursor from "./Pages/CustomCursor/CustomCursor";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <>
      {loader && <Preloader />}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeThree />} />
          <Route exact path="/home-three" element={<HomeOne />} />
          <Route exact path="/home-two" element={<HomeTwo />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/services-details" element={<ServicesDetails />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/portfolio-two" element={<PortfolioTwo />} />
          <Route exact path="/portfolio-three" element={<PortfolioThree />} />
          <Route
            exact
            path="/portfolio-details"
            element={<PortfolioDetails />}
          />
          <Route
            exact
            path="/portfolio-details-two"
            element={<PortfolioDetailsTwo />}
          />
          <Route exact path="/news" element={<NewsStandard />} />
          <Route exact path="/news-details" element={<NewsDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
      <ScrollTop />
      <CustomCursor />
    </>
  );
}

export default App;
