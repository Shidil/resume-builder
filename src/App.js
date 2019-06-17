import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          firstName="Agrima"
          lastName="KP"
          subtitle="Software Developer - Web Applications"
          address="Kozhikode, Kerala, India"
          phone="+91 9633051488 "
          email="qvistn111@gmail.com"
          linkedIn="agrima-kp"
        />
        <section className="summary">
          <h2><span className="highlight">Sum</span>mary</h2>
          <p>
            Software developer with 2+ years of experience, dedicated mainly in web applications development
            using PHP and modern web platform. I’m a sociable, responsible, optimistic, organized and proactive person with fast learning skills.
          </p>
          <h4>
            Key Skills: HTML5, PHP, SEO, JavaScript
          </h4>
        </section>
        <section className="experience">
          <h2><span className="highlight">Exp</span>erience</h2>
          <p>Software Developer for 2 years & 3 months at Cezcon solutions,
          who specializes in Web Applications development and IT Consultancy.
          </p>
          <p>
          Learned website design and development of PHP applications, Collaborated  with clients and managers across different countries and timezones
          </p>
          <ul className="projects">
            <li>
              <h3>Berry HRM <span className="epoch">2017 - Feb 2019</span></h3>
              <ul className="project-highlights">
                <li>
                  A modern Human Resource Management Web application built with PHP
                </li>
                <li>
                  Worked on the implementation of the key modules: Reports and Payroll Generation
                </li>
                <li>
                  Handled tasks for both front-end and back-end of the application
                </li>
              </ul>
            </li>
            <li>
              <h3>Qemtek <span className="epoch">2018</span></h3>
              <ul className="project-highlights">
                <li>
                  Developed a dynamic, responsive and highly scalable website that ensured high pageviews and great user experience
                </li>
                <li>
                  Optimized the website for Search Engine performance, implemented various SEO strategies and analytics
                </li>
                <li>
                  Troubleshooted page ranking issues, and optimized the pages for high ranking on google performance valuation tools
                </li>
              </ul>
            </li>
            <li>
              <h3>Cezcon Website <span className="epoch">2017</span></h3>
              <ul className="project-highlights">
                <li>
                  Company website that ensured high usability and availability
                </li>
                <li>
                  Developed on-site body content, meta descriptions and page titles in support of SEO strategies. Used google analytics
                </li>
                <li>
                  Optimize keyword use and effectiveness. Page optimization strategies
                </li>
              </ul>
            </li>
            <li>
              <h3>Flourish Real Estate <span className="epoch">2017</span></h3>
              <ul className="project-highlights">
                <li>
                  Developed a realtime search experience for a property classifieds website
                </li>
                <li>
                  Worked on a customer enquiry system
                </li>
              </ul>
            </li>
            <li>
              <h3>Asya dhow cruise - website <span className="epoch">2016</span></h3>
              <ul className="project-highlights">
                <li>
                  Designed and implemented the website for a tourism company in Dubai
                </li>
                <li>
                  Worked on SEO, and monitoring analytic performance
                </li>
                <li>
                  Improved my communication skills with foreign people and coordinated the work through different timezones
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="education">
          <h2><span className="highlight">Edu</span>cation</h2>
          <p>
            Bachelor's Engineering degree(B.Tech)  from Cochin university of science and technology.
            Developed an audio steganography by a low bit coding using wav files as part of an academic project.
          </p>
        </section>
        <section className="interests">
          <h2><span className="highlight">Int</span>erests</h2>
          <p>Apart from the my daily life I love spending some time
          Gaming and for my creative glass art crafting hobby.
          </p>
        </section>
      </div>
    );
  }
}

export default App;
