import React from 'react'
import Home from './Home'
import {Route, Switch} from "react-router-dom";
import FlashcardsContainer from '../../flashcard/containers/FlashcardsContainer'
import FlashcardSetsContainer from '../../sets/containers/FlashcardSetsContainer'
import FlashcardSetContainer from "../../sets/containers/FlashcardsSetContainer";
import FlashcardDeleteSetContainer from '../../sets/containers/FlashcardDeleteSetContainer'
import StartLearningContainer from '../../learning/containers/StartLearningContainer'
import {ImplicitCallback, SecureRoute} from '@okta/okta-react';
import NotFoundPage from './NotFoundPage'
import NotImplementedYet from './NotImplementedYet'

const Main = () => {
  return (
    <div className="mt-5 pt-5">
      <main role="main" className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/flashcards" component={FlashcardsContainer}/>
          <SecureRoute exact={true} path="/flashcardSets" component={FlashcardSetsContainer}/>
          <SecureRoute path="/flashcardSets/:flashcardSetId/delete" component={FlashcardDeleteSetContainer}/>
          <SecureRoute path="/flashcardSets/:flashcardSetId" component={FlashcardSetContainer}/>
          <SecureRoute path="/learning" component={StartLearningContainer}/>
          <Route path="/not-implemented" component={NotImplementedYet}/>
          <Route path="*" exact={true} component={NotFoundPage}/>
        </Switch>
      </main>
    </div>
  )
};

export default Main;
