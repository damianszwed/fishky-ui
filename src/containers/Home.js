import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link><br />
        <Link to="notFound" className="btn btn-default">Example of not found</Link><br />
        <Link to="example" className="btn btn-default">Example</Link>
    </div>
);

export default Home;
