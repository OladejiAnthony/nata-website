import React from 'react'
import "./LeadersSections.scss"
import leader1 from "../../assets/images/leader-1.png"
import leader2 from "../../assets/images/leader-2.png"
import leader3 from "../../assets/images/leader-3.png"
import leader4 from "../../assets/images/leader-4.png"
import leader5 from "../../assets/images/leader-5.png"
import leader6 from "../../assets/images/leader-6.png"
import leader7 from "../../assets/images/leader-7.png"



const LeadersSection = () => {
  return (
    <div className='leaders__section'>
      <div className="heading">
          <h2>Meet Our Leaders</h2>
      </div>
      <div className='leaders__images'>
        <div className='leader_image'>
          <img src={leader1} alt='leader1'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader2} alt='leader2'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader3} alt='leader3'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader4} alt='leader4'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader5} alt='leader5'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader6} alt='leader6'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
        <div className='leader_image'>
          <img src={leader7} alt='leader7'  />
          <h3>John Doe</h3>
          <p>Director</p>
        </div>
      </div>
    </div>
  )
}

export default LeadersSection;

