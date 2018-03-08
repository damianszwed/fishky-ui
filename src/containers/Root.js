import React from 'react'
import {Route, Switch} from "react-router-dom";
import ProductsAndCartContainer from './ProductsAndCartContainer'
import NotFoundPage from '../components/NotFoundPage'
import App from './App'

const Root = () => (
    <div>
        <h2>Fishky</h2>
        <hr/>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/example" component={ProductsAndCartContainer}/>
            <Route path="*" exact={true} component={NotFoundPage}/>
        </Switch>
    </div>
);

export default Root;
