import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <div className="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div>
        <Link to="addAuthor" className="btn btn-light btn-block">Add Author</Link><br />
        <Link to="notFound" className="btn btn-light btn-block">Example of not found</Link><br />
        <Link to="example" className="btn btn-light btn-block">Example</Link>
    </div>
);

export default Home;
