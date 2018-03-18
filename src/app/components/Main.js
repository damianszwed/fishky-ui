import React from 'react'
import Home from './Home'
import {Route, Switch} from "react-router-dom";
import FlashcardsContainer from '../../flashcard/containers/FlashcardsContainer'
import LearningContainer from '../../learning/containers/LearningContainer'
import NotFoundPage from './NotFoundPage'
import NotImplementedYet from './NotImplementedYet'

const Main = () => {
  return (
    <div className="mt-5 pt-5">
      <main role="main" className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/flashcards" component={FlashcardsContainer}/>
          <Route path="/learning" component={LearningContainer}/>
          <Route path="/not-implemented" component={NotImplementedYet}/>
          <Route path="*" exact={true} component={NotFoundPage}/>
        </Switch>
      </main>
    </div>
  )
};

export default Main;
