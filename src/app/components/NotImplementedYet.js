import React from 'react'
import {Link} from 'react-router-dom'

const NotImplementedYet = () => {
  return (
    <div>
      <div>
        <h1>Not implemented yet</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    </div>
  )
};

export default NotImplementedYet;
