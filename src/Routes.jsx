import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomepageDeveloperPortfolioHub from "pages/homepage-developer-portfolio-hub";
import TechnicalPortfolioCaseStudies from "pages/technical-portfolio-case-studies";
import AboutDevelopmentPhilosophy from "pages/about-development-philosophy";
import ProfessionalContactCollaboration from "pages/professional-contact-collaboration";
import SkillsTechnicalExpertise from "pages/skills-technical-expertise";
import ResumeProfessionalCredentials from "pages/resume-professional-credentials";
import NotFound from "pages/NotFound";
import ContactMethods from "pages/professional-contact-collaboration/components/ContactMethods";
const Routes = () => {
  return (
    <BrowserRouter >
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageDeveloperPortfolioHub />} />
        <Route path="/homepage-developer-portfolio-hub" element={<HomepageDeveloperPortfolioHub />} />
        <Route path="/technical-portfolio-case-studies" element={<TechnicalPortfolioCaseStudies />} />
        <Route path="/about-development-philosophy" element={<AboutDevelopmentPhilosophy />} />
        <Route path="/professional-contact-collaboration" element={<ProfessionalContactCollaboration />} />
        <Route path="/skills-technical-expertise" element={<SkillsTechnicalExpertise />} />
        <Route path="/resume-professional-credentials" element={<ResumeProfessionalCredentials />} />
        <Route path="/contact-methods" element={<ContactMethods />} />


        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;