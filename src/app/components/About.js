import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-header">
            About
          </div>
          <div className="card-body">
            <h5 className="card-title">Non-Commercial Project</h5>
            <p className="card-text">Powered by open-source software </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Engineer - Damian Szwed</li>
              <li className="list-group-item">Product Owner, Tester - Joanna Szwed</li>
              <li className="list-group-item">Frontend - React, Redux, Bootstrap, NPM</li>
              <li className="list-group-item">Backend - Java 17, Gradle, Spring Boot (WebFlux, Security OAuth2, Data), MongoDB, ElasticSearch, Docker, Kubernetes</li>
            </ul>
            <a href="https://www.linkedin.com/in/damian-szwed/" className="card-link">Damian on LinkedIn</a>
            <a href="https://www.linkedin.com/in/" className="card-link">Joanna on LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
