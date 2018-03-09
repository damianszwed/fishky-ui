import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron">
            <h1 className="display-4">Flashcards</h1>
            <p className="lead">The secret to memorization when study time is limited.</p>
            <hr className="my-4"/>
                <p>Do you find that memorizing a list of topics, definitions or concepts is not effective after a long day? Do you need more time to study? </p>
                <p className="lead">
                    <Link to="not-implemented" className="btn btn-primary btn-lg">Sign up!</Link><br />
                </p>
        </div>
        <Link to="addAuthor" className="btn btn-light btn-block">Add Author</Link><br />
        <Link to="notFound" className="btn btn-light btn-block">Example of not found</Link><br />
        <Link to="example" className="btn btn-light btn-block">Example</Link>
    </div>
);

export default Home;
