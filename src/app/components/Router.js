import React from 'react'
import Home from './Home'
import {Route, Switch, withRouter} from "react-router-dom";
import FlashcardFoldersContainer from '../../folders/containers/FlashcardFoldersContainer'
import FlashcardFolderContainer from "../../folders/containers/FlashcardFolderContainer";
import FlashcardDeleteFolderContainer from '../../folders/containers/FlashcardDeleteFolderContainer'
import ChoiceFlashcardFolderLearningContainer from "../../learning/containers/ChoiceFlashcardFolderLearningContainer";
import ChoiceModeLearningContainer from "../../learning/containers/ChoiceModeLearningContainer";
import LibraryContainer from "../../library/containers/LibraryContainer";
import LibraryCopyFolderContainer from "../../library/containers/LibraryCopyFolderContainer";
import LibraryFolderContainer from "../../library/containers/LibraryFolderContainer";
import StartLearningContainer from '../../learning/containers/StartLearningContainer'
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
          <Route path="/login/callback" component={LoginCallback}/>
          <SecureRoute exact={true} path="/flashcardFolders" component={FlashcardFoldersContainer}/>
          <SecureRoute path="/flashcardFolders/:flashcardFolderId/delete" component={FlashcardDeleteFolderContainer}/>
          <SecureRoute path="/flashcardFolders/:flashcardFolderId" component={FlashcardFolderContainer}/>
          <SecureRoute path="/learning/:flashcardFolderId/mode/:mode" component={StartLearningContainer}/>
          <SecureRoute path="/learning/:flashcardFolderId" component={ChoiceModeLearningContainer}/>
          <SecureRoute path="/learning" component={ChoiceFlashcardFolderLearningContainer}/>
          <SecureRoute path="/search" component={FlashcardFoldersContainer}/>
          <SecureRoute path="/academy/:flashcardFolderId/copy" component={LibraryCopyFolderContainer}/>
          <Route path="/academy/:flashcardFolderId" component={LibraryFolderContainer}/>
          <Route exact={true} path="/academy" component={LibraryContainer}/>
          <Route path="/not-implemented" component={NotImplementedYet}/>
          <Route path="/about" component={About}/>
          <Route path="*" exact={true} component={NotFoundPage}/>
        </Switch>
      </main>
    </div>
  )
};

export default withRouter(Router);
