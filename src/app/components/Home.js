import React from 'react'
import SecurityButton from "../../security/containers/SecurityButton";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h1 className="display-4">Flashcards</h1>
      <p className="lead">The secret to memorization when study time is limited.</p>
      <hr className="my-4"/>
      <p>Do you find that memorizing a list of topics, definitions or concepts is not effective after a long day? Do you
        need more time to study? </p>
      <SecurityButton className="lead btn btn-primary btn-lg" signInText="Sign up!"/>
    </div>
  </div>
);

export default Home;
