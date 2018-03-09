import React from 'react'
import Home from '../components/Home'
import {Route, Switch} from "react-router-dom";
import ProductsAndCartContainer from '../containers/ProductsAndCartContainer'
import NotFoundPage from '../components/NotFoundPage'
import NotImplementedYet from '../components/NotImplementedYet'

const Main = () => {
    return (
        <div className="mt-5 pt-5">
            <main role="main" className="container">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/example" component={ProductsAndCartContainer}/>
                    <Route path="/not-implemented" component={NotImplementedYet}/>
                    <Route path="*" exact={true} component={NotFoundPage}/>
                </Switch>
            </main>
        </div>
    )
};

export default Main;
