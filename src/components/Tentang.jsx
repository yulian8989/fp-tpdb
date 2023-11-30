import React from 'react';

import cucisepatu1 from '../assets/cucisepatu1.jpg';
import cucisepatu2 from '../assets/cucisepatu2.jpg';
import cucisepatu3 from '../assets/cucisepatu3.jpg';

const Tentang = () => {
  return (
    <div className="about-section">
      <h1>About Us </h1>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src={cucisepatu3} alt="Jane" className="card-img" />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={cucisepatu2} alt="Mike" className="card-img" />
            <div className="container">
              <h2>Jinn Doe</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={cucisepatu1} alt="John" className="card-img" />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
