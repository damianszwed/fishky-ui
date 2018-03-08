import React from 'react'
import { Link } from 'react-router-dom'

const App = () => (
    <div>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <Link to="notFound" className="btn btn-default">Example of not found</Link>
        <Link to="example" className="btn btn-default">Example</Link>
    </div>
);

export default App;
