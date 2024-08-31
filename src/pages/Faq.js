import React from "react";
import "../styles/FAQ.scss";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="faq__page">
      <div className="faq__bg">
        <h2>Frequently asked Questions</h2>
        <p>
          We hope we have answered your questions. For further assistance,
          kindly check the contact us page to get more information.
        </p>
      </div>
      <ol className="faq__text">
        <li>
          <h3>1. What is the National Association of Auto Technicians (NATA)?</h3>
          <p>
            NATA is a professional organization dedicated to advancing the
            skills, knowledge, and professionalism of auto technicians in Lagos
            State. We provide resources, training, and support to enhance the
            expertise of our members and elevate industry standards.
          </p>
        </li>
        <li>
          <h3>2. What types of training programs does NATA offer?</h3>
          <p>
          NATA offers a wide range of training programs, including basic and advanced automotive repair courses, certification programs, and workshops on the latest automotive technologies. Check our Service Page for more details.
          </p>
        </li>
        <li>
          <h3>3. Does NATA offer certification for auto technicians? </h3>
          <p>
          Yes, NATA offers various certification programs to ensure that auto technicians have the necessary skills and knowledge to perform high-quality repairs. Our certification programs are recognized industry-wide and help enhance career opportunities.
          </p>
        </li>

        <li>
          <h3> 4. How can I stay updated on NATA events and news?</h3>
          <p>
          Stay updated by following us on our social media platforms: Facebook, and Twitter. You can also check our Events Page for the latest news and upcoming events.
          </p>
        </li>
        <li>
          <h3>5. What benefits do NATA members receive?</h3>
          <p>
          NATA members enjoy numerous benefits, including access to exclusive training programs, networking opportunities, industry resources, certification programs, and advocacy support. 
          </p>
        </li>
        <li>
          <h3> 6. How can I contact NATA for support or inquiries? </h3>
          <p>
          You can contact us through our <Link to="/contact">Contact Page</Link>, where you'll find our phone numbers, email addresses, and a contact form. We’re here to help with any questions or concerns you may have.
          </p>
        </li>

        <li>
          <h3>7. Where is NATA located? </h3>
          <p>
          Our main office is located at 14, Jakande street, Lagos Nigeria. You can find directions and view our location on the <Link to="/contact">Contact Page</Link>.
          </p>
        </li>
        <li>
          <h3>8. What are NATA's office hours? </h3>
          <p>
          Our office hours are Monday to Friday, 9:00 AM to 5:00 PM, and Saturday, 10:00 AM to 2:00 PM. We are closed on Sundays. 
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Faq;
