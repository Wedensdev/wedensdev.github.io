import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const ProjectStyleTwoData = [
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/landing-page-ui.jpg",
    language: "Landing Page UI",
    description: "Treatment Center",
    category: "design",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/skin-appeal.png",
    language: "React/Bootstrap 5",
    description: "Skinappeal",
    category: "design",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/business-dashboard.jpg",
    language: "React/Bootstrap 5",
    description: "Business Dashboard",
    category: "marketing",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/restaurant-platform.jpg",
    language: "Next/Tailwind Css",
    description: "Restaurant Platform",
    category: "design",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/fast-food-platform.jpg",
    language: "React/Bootstrap 5",
    description: "Fast Food Platform",
    category: "design",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/e-commerce-dashboard.jpg",
    language: "React/Node",
    description: "Ecommerce Dashboard",
    category: "development",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/job-portal-webapp.jpg",
    language: "Next/Sass",
    description: "Job Portal Wepapp",
    category: "development",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/visualization.jpg",
    language: "Next/TypeScript",
    description: "Visualization",
    category: "development",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/social-media-manager.png",
    language: "React/Material UI",
    description: "Social Media Mangement",
    category: "marketing",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/showcase.jpg",
    language: "React/Bootstrap 5",
    description: "Instant Showcase",
    category: "marketing",
  },
  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/e-learning.jpg",
    language: "React/Styled Component",
    description: "E-learning Portal",
    category: "branding",
  },

  {
    id: uuidv4(),
    image: "../../assets/img/portfolio/ads.jpg",
    language: "React/Bootstrap 5",
    description: "Ads Platform",
    category: "branding",
  },
];

const ProjectStyleTwoItem = ({ portfolio }) => {
  return (
    <>
      <div className="col-xl-3 col-sm-6 col-md-4  portfolio-item mt-30">
        <div className="portfolio__area-two-item">
          <img className="img__full" src={portfolio.image} alt="" />
          <div className="portfolio__area-two-item-content">
            <span>{portfolio.language}</span>
            <h5>
              <Link
                // to="/portfolio-details"
                to="#"
              >
                {portfolio.description}
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
const CategoryBtn = ({ name, handleSetCategory, label, className }) => {
  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => handleSetCategory(name)}
      >
        {label}
      </button>
    </>
  );
};

const PortfolioFilter = () => {
  const [category, setCategory] = useState("all");
  const [projectStyleTwoItem, setProjectStyleTwoItem] = useState([]);
  useEffect(() => {
    category === "all"
      ? setProjectStyleTwoItem(ProjectStyleTwoData)
      : setProjectStyleTwoItem(
          ProjectStyleTwoData.filter((data) => data.category === category)
        );
  }, [category]);
  return (
    <section name="portfolio">
      <div className="portfolio__area-two section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mb-30">
              <div className="portfolio__area-two-title">
                <h2>Portfolio</h2>
              </div>
              <div className="portfolio__area-two-btn">
                <CategoryBtn
                  className={category === "all" ? "active" : null}
                  name="all"
                  label="Show All"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "design" ? "active" : null}
                  name="design"
                  label="Design"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "development" ? "active" : null}
                  name="development"
                  label="Development"
                  handleSetCategory={setCategory}
                />
                <CategoryBtn
                  className={category === "marketing" ? "active" : null}
                  name="marketing"
                  label="Marketing"
                  handleSetCategory={setCategory}
                />

                <CategoryBtn
                  className={category === "branding" ? "active" : null}
                  name="branding"
                  label="Branding"
                  handleSetCategory={setCategory}
                />
              </div>
            </div>
          </div>
          <div className="row">
            {projectStyleTwoItem.map(
              (item, length) =>
                length <= "12" && (
                  <ProjectStyleTwoItem key={item.id} portfolio={item} />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;
