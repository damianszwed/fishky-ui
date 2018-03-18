import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Author Damian Szwed</span>
          <div className="float-right">
            <Link to="not-implemented" className="text-muted">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
