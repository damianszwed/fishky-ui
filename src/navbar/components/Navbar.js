import React from 'react'
import {Link} from 'react-router-dom'
import SecurityButton from '../../security/containers/SecurityButton'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">Fishky</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link to="/flashcardSets" className="nav-link">My flashcards</Link>
          </li>
          <li className="nav-item active">
            <Link to="/flashcards" className="nav-link">My flashcards (deprecated)</Link>
          </li>
          <li className="nav-item active">
            <Link to="/learning" className="nav-link">Learning</Link>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" placeholder="Search in my flashcards" aria-label="Search"
                 type="text"/>
          <Link to="/not-implemented" className="btn btn-outline-primary my-2 my-sm-1 mr-sm-2">Search</Link>
        </form>
        <SecurityButton className="btn btn-outline-danger" signInText="Sign in" signOutText="Sign out"/>
      </div>
    </nav>
  )
};

export default Navbar;
