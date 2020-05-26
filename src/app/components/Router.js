import React from 'react'
import Home from './Home'
import {Route, Switch, withRouter} from "react-router-dom";
import FlashcardsContainer from '../../flashcard/containers/FlashcardsContainer'
import FlashcardSetsContainer from '../../sets/containers/FlashcardSetsContainer'
import FlashcardSetContainer from "../../sets/containers/FlashcardsSetContainer";
import FlashcardDeleteSetContainer from '../../sets/containers/FlashcardDeleteSetContainer'
import ChoiceFlashcardSetLearningContainer from "../../learning/containers/ChoiceFlashcardSetLearningContainer";
import ChoiceModeLearningContainer from "../../learning/containers/ChoiceModeLearningContainer";
import StartLearningContainer from '../../learning/containers/StartLearningContainer'
import Login from "../../security/containers/Login";
import securityConfig from '../../security/securityConfiguration';
import {LoginCallback, SecureRoute} from '@okta/okta-react';
import NotFoundPage from './NotFoundPage'
import NotImplementedYet from './NotImplementedYet'
import About from "./About";

const Router = () => {
  return (
    <div className="mt-5 pt-5">
      <main role="main" className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/login' render={() => <Login securityConfiguration={securityConfig}/>}/>
          <Route path="/implicit/callback" component={LoginCallback}/>
          <SecureRoute path="/flashcards" component={FlashcardsContainer}/>
          <SecureRoute exact={true} path="/flashcardSets" component={FlashcardSetsContainer}/>
          <SecureRoute path="/flashcardSets/:flashcardSetId/delete" component={FlashcardDeleteSetContainer}/>
          <SecureRoute path="/flashcardSets/:flashcardSetId" component={FlashcardSetContainer}/>
          <SecureRoute path="/learning/:flashcardSetId/mode/:mode" component={StartLearningContainer}/>
          <SecureRoute path="/learning/:flashcardSetId" component={ChoiceModeLearningContainer}/>
          <SecureRoute path="/learning" component={ChoiceFlashcardSetLearningContainer}/>
          <Route path="/not-implemented" component={NotImplementedYet}/>
          <Route path="/about" component={About}/>
          <Route path="*" exact={true} component={NotFoundPage}/>
        </Switch>
      </main>
    </div>
  )
};

export default withRouter(Router);
