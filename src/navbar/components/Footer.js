import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Fishky - let's learn!</span>
          <div className="float-right">
            <Link to="/about" className="text-muted">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
