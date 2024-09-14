// src/pages/ServicesDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ServicesDetails.scss';
import { serviceData } from './serviceData';

const ServicesDetails = () => {
  const { category } = useParams(); // Get category from URL params
  const service = serviceData.find((item) => item.category.toLowerCase().replace(/\s+/g, "-") === category);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="services__details">
      {/* Overview */}
      <Section title={service.overview.title} content={service.overview.content} />

      {/* Mission */}
      <Section title={service.mission.title} content={service.mission.content} />

      {/* Services Offered */}
      <Section title={service.services.title} content={service.services.content}>
        <ul>
          {service.services.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Training and Certification */}
      <Section title={service.training.title} content={service.training.content} />

      {/* Membership Benefits */}
      <Section title={service.membership.title} content={service.membership.content}>
        <ul>
          {service.membership.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

const Section = ({ title, content, children }) => (
  <div className="section">
    <div className="heading">
      <div className="header__box">
        <div className="upper_line"></div>
        <h2>{title}</h2>
        <div className="lower_line"></div>
      </div>
    </div>
    <div className="content">
      <p>{content}</p>
      {children}
    </div>
  </div>
);

export default ServicesDetails;
