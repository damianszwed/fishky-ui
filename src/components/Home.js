import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h1 className="mt-5">The secret to memorization when study time is limited.</h1>
        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers
            with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top:
                60px;</code> on the <code>body &gt; .container</code>.</p>
        <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
        <Link to="addAuthor" className="btn btn-light btn-block">Add Author</Link><br />
        <Link to="notFound" className="btn btn-light btn-block">Example of not found</Link><br />
        <Link to="example" className="btn btn-light btn-block">Example</Link>
    </div>
);

export default Home;
