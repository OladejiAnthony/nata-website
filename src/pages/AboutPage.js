import React from "react";
import "../styles/AboutPage.scss";
import contact1 from "../assets/images/contact1.png";
import contact2 from "../assets/images/contact2.png";
import contact3 from "../assets/images/contact3.png";
import training from "../assets/icons/training.png";
import QA from "../assets/icons/QA.png";
import networking from "../assets/icons/network.png";
import advocacy from "../assets/icons/advocacy.png";

const AboutPage = () => {
  return (
    <div className="about__page">
      <div className="about_pics">
        <img src={contact1} alt="contact1" />
        <img src={contact2} alt="contact2" />
        <img src={contact3} alt="contact3" />
      </div>
      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>NATA</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="textContainer">
        <p>
          The Nigeria Automobile Technicians Association, NATA, is a national
          professional body of the micro, small and medium scale auto-repairers
          in the informal economy. Members include artisans without formal
          schooling and technicians with average formal education and belong to
          such sub-trade groups like vulcanizing, auto-electrical repairing,
          panel fixing, auto-body building, motor engine repairing and
          servicing, welding and iron bending, auto-spraying and other auto
          related works.The Nigerian Automobile Technicians association, NATA,
          with over two million members from all over the federation has an
          history that dates back to 1919. It was officially registered as a
          registered industrial union in June 2nd 1962 as Nigeria Motor Mechanic
          Association, it was re-registered in 1986 as Nigeria Motor Mechanics
          and Technicians Association when the federal government excluded all
          trade unions of self employed workers from the registered trade
          unions, it was re-registered in 1986 by the then minister for internal
          affairs, Colonel John Shagaya whose ministry was solely empowered to
          register association before the establishment of Corporate Affairs
          Commission. In june 2000, the association was re-registered at the
          Corporate Affairs Commission with a new name- Nigeria Automobile
          Technicians Association, with certificate number RC 4596. Members
          constitute over 75% of all automobile technicians in Nigeria, NATA has
          more men membership than women, about 5% of the population are women
          and they are in few states like Lagos, Anambra, oyo, Rivers, Abuja and
          Edo state
        </p>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>NATA Lagos</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="textContainer">
        <p>
          Welcome to the National Association of Auto Technicians, NATA, Lagos
          State Chapter. We are a dedicated and professional organization
          committed to advancing the skills, knowledge, and professionalism of
          auto technicians across Lagos State. Our association serves as a
          central hub for automotive professionals, providing resources,
          training, and support to enhance their expertise and elevate the
          standards of the auto repair industry.
        </p>
      </div>

      <div className="heading">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>History</h2>
          <div className="lower_line"></div>
        </div>
      </div>
      <div className="textContainer">
        <p>
          The National Association of Auto Technicians, NATA, in Lagos State has
          a rich history rooted in the passion and dedication of pioneering auto
          technicians. Established in [Year of Establishment], NATA was founded
          with the goal of uniting auto professionals, standardizing practices,
          and advocating for the advancement of the automotive repair industry.
          In its early years, NATA focused on creating a cohesive community of
          auto technicians, providing a platform for networking, knowledge
          sharing, and professional development. As the automotive industry
          evolved, so did NATA, expanding its programs and services to include
          comprehensive training, certification, and quality assurance
          initiatives. Over the years, NATA has grown to become a respected and
          influential organization within Lagos State and beyond. The
          association has played a pivotal role in enhancing the skills of auto
          technicians, promoting ethical practices, and improving service
          quality in the industry. Through partnerships with educational
          institutions, industry stakeholders, and government bodies, NATA has
          been instrumental in shaping policies and standards that benefit both
          technicians and consumers. Today, NATA continues to uphold its
          founding principles, striving to elevate the status of auto
          technicians and ensure that they are well-equipped to meet the
          challenges of a rapidly changing automotive landscape. With a focus on
          continuous learning, innovation, and community engagement, NATA
          remains committed to its mission of excellence in the automotive
          repair industry.
        </p>
      </div>

      <div className="miss__section">
        <div className="left__text">
          <div className="header__box">
            <div className="upper_line"></div>
            <h2>Mission</h2>
            <div className="lower_line"></div>
          </div>
          <p>
            At NATA, our mission is to foster a community of skilled and
            certified auto technicians who are equipped with the latest industry
            knowledge and best practices. We aim to promote excellence in auto
            repair services, ensure consumer protection, and uphold the
            integrity of the profession.
          </p>
        </div>
        <div className="right__text">
          <div className="header__box">
            <div className="upper_line"></div>
            <h2>Vision</h2>
            <div className="lower_line"></div>
          </div>
          <p>
            To be the leading professional body in Lagos State, setting the
            standard for excellence in automotive repair and maintenance, and
            empowering auto technicians with the skills, knowledge, and ethical
            practices to excel in their craft. We envision a future where every
            vehicle owner enjoys reliable, high-quality service from trusted and
            certified technicians, contributing to the safety and well-being of
            our community.
          </p>
        </div>
      </div>

      <div className="we_do">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>What we do</h2>
          <div className="lower_line"></div>
        </div>
        <div className="boxes">
          <div className="box">
            <img src={training} alt="training" />
            <h3>Training & certification:</h3>
            <p>
              We offer comprehensive training programs and certification courses
              to help auto technicians stay current with the latest technologies
              and techniques in the automotive industry.
            </p>
          </div>
          <div className="box">
            <img src={QA} alt="q-a" />
            <h3>Quality Assurance:</h3>
            <p>
              NATA is committed to setting and maintaining high standards of
              service quality. We encourage our members to adhere to ethical
              practices and provide exceptional service to their customers.
            </p>
          </div>
          <div className="box">
            <img src={networking} alt="networking" />
            <h3>Networking Opportunities:</h3>
            <p>
              NATA is committed to setting and maintaining high standards of
              service quality. We encourage our members to adhere to ethical
              practices and provide exceptional service to their customers.
            </p>
          </div>
          <div className="box">
            <img src={advocacy} alt="advocacy" />
            <h3>Advocacy and representation:</h3>
            <p>
              We advocate for the interests of auto technicians at the state and
              national levels, working closely with regulatory bodies, industry
              stakeholders, and the government to ensure a fair and supportive
              environment for our members.
            </p>
          </div>
        </div>
      </div>

      <div className="objectives">
        <div className="header__box">
          <div className="upper_line"></div>
          <h2>Objectives</h2>
          <div className="lower_line"></div>
        </div>
        <div className="list">
          <p>Some of the objectives of NATA include:</p>
          <ol>
            <li>
              To organize and unite all practicing automobile technicians in
              Nigeria into a single standard professional body.
            </li>
            <li>
              To promote, protect and advance the interests of members in the
              society
            </li>
            <li>
              {" "}
              To organize welfare and programs that could help improve the
              living condition of members and reduce poverty.
            </li>
            <li>
              To educate members on how various policies and events in their
              socio environment affect them and their work.
            </li>
            <li>
              {" "}
              To help project government objectives and policies on automobile
              technological development, education, health, economy and
              political matters.
            </li>
            <li>
              Mobilizing members for an enhanced participation in National
              development.
            </li>
            <li>
              Organizing training program through workshops, seminars and
              symposium on political, economic, health and any other societal
              matters including the trades of members for an enhance
              professionalism.
            </li>
            <li>
              To improve and regulate the training and practices of members.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
