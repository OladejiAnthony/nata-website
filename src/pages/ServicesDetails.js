import React from "react";
import "../styles/ServicesDetails.scss";

const ServicesDetails = () => {
  return (
    <div className="services__details">
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Overview</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="overview">
        <p>Auto mechanics play a crucial role in ensuring the safety, efficiency, and longevity of vehicles. As vital members of the automotive industry, they are skilled professionals who diagnose, repair, and maintain various types of vehicles. At the National Association of Autotechnicians in Lagos State, we recognize and support the significant contributions of auto mechanics to the transportation sector.</p>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Mission</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="overview">
        <p>Our mission is to provide a platform that connects auto mechanics with resources, training, and opportunities for professional growth. We aim to uphold high standards of service and craftsmanship, ensuring that all our members are equipped with the latest skills and knowledge in automotive technology.</p>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Services Offered</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="services">
        <p>Auto mechanics affiliated with our association offer a wide range of services, including:</p>
        <ul>
            <li>Diagnostic Services: Identifying issues with engine performance, electrical systems, and more.</li>
            <li>Maintenance Services: Regular upkeep such as oil changes, tire rotations, and brake inspections.</li>
            <li>Repair Services: Addressing problems with engines, transmissions, brakes, and other critical systems.</li>
            <li>Customization: Enhancing vehicle performance and aesthetics according to customer preferences.</li>
        </ul>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Training and certification</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="overview">
        <p>We provide access to ongoing training and certification programs to ensure our members stay updated with the latest advancements in automotive technology. Our goal is to maintain a workforce of highly skilled and certified professionals ready to meet the evolving needs of the automotive industry.</p>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Membership Benefits</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="services">
        <p>Members of our association enjoy numerous benefits, including:</p>
        <ul>
            <li>Networking Opportunities: Connect with other professionals in the industry.</li>
            <li>Access to Resources: Obtain industry news, technical manuals, and best practices.</li>
            <li>Discounts on Tools and Equipment: Exclusive deals with suppliers.</li>
            <li>Professional Development: Workshops, seminars, and certification courses.</li>
        </ul>
      </div>

      
    </div>
  );
};

export default ServicesDetails;


