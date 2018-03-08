import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <div>
            <h1>Page Not Found</h1>
            <p>Whoops! Sorry, there is nothing to see here.</p>
            <p><Link to="/">Back to Home</Link></p>
        </div>
    </div>
  )
};

export default NotFoundPage;
