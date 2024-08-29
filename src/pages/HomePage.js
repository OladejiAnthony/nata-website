// src/pages/HomePage.js
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CallToAction from '../components/home/CallToAction';
import ImpactMetrics from '../components/home/ImpactMetrics';
import AboutSection from '../components/home/AboutSection';
import ServiceCategories from '../components/home/ServiceCategories';
import VisionMission from '../components/home/VisionMission';
import ValuesSection from '../components/home/ValuesSection';
import LeadersSection from '../components/home/LeadersSection';
import Mission from '../components/home/Mission';

const HomePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection  />
      <ServiceCategories  />
      <VisionMission  />
      <Mission  />
      <ValuesSection  />
      <LeadersSection  />
    </div>
  );
};

export default HomePage;
