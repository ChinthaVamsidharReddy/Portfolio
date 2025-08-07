import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SkillsMatrix from './components/SkillsMatrix';
import DownloadResume from './components/DownloadResume';

const ResumeProfessionalCredentials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Resume & Academic Credentials - Alex Johnson | Fresh Graduate Developer</title>
        <meta 
          name="description" 
          content="Comprehensive resume and academic credentials of Alex Johnson, fresh Computer Science graduate. View education, internship experience, projects, and download resume." 
        />
        <meta name="keywords" content="Alex Johnson Resume, Fresh Graduate Resume, Computer Science Resume, Entry Level Developer CV, Academic Credentials, Download Resume" />
        <meta property="og:title" content="Resume & Academic Credentials - Alex Johnson" />
        <meta property="og:description" content="Comprehensive resume and academic credentials showcasing fresh graduate qualifications and project experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/resume-professional-credentials" />
        <link rel="canonical" href="/resume-professional-credentials" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-16">
          <ProfessionalSummary />
          <WorkExperience />
          <Education />
          <Certifications />
          <SkillsMatrix />
          <DownloadResume />
        </main>
      </div>
    </>
  );
};

export default ResumeProfessionalCredentials;