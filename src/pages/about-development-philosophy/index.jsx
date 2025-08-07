import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CareerTimeline from './components/CareerTimeline';
import DevelopmentApproach from './components/DevelopmentApproach';
import LearningJourney from './components/LearningJourney';
import ValuesSection from './components/ValuesSection';
import CallToAction from './components/CallToAction';

const AboutDevelopmentPhilosophy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Vamsidhar Reddy - Fresh Graduate Developer Journey | Fresh Dev Portfolio</title>
        <meta 
          name="description" 
          content="Discover Vamsidhar Reddy's journey as a fresh Computer Science graduate, learning philosophy, and passion for software engineering and full-stack development. Learn about his growth mindset and eagerness to contribute to innovative projects." 
        />
        <meta name="keywords" content="Vamsidhar Reddy, Fresh Graduate Developer, Computer Science Graduate, Software Engineer, full-stack development Journey, Entry Level Developer" />
        <meta property="og:title" content="About Alex Johnson - Fresh Graduate Developer Journey & Learning Philosophy" />
        <meta property="og:description" content="Discover Vamsidhar Reddy's journey as a fresh Computer Science graduate and his passion for Software Engineer
        ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about-development-philosophy" />
        <link rel="canonical" href="/about-development-philosophy" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection />
          <CareerTimeline />
          <DevelopmentApproach />
          <LearningJourney />
          <ValuesSection />
          <CallToAction />
        </main>
      </div>
    </>
  );
};

export default AboutDevelopmentPhilosophy;