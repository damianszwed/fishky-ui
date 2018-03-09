import React from 'react'
import Home from '../components/Home'
import {Route, Switch} from "react-router-dom";
import ProductsAndCartContainer from '../containers/ProductsAndCartContainer'
import NotFoundPage from '../components/NotFoundPage'

const Main = () => {
    return (
        <div>
            <main role="main" className="container">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/example" component={ProductsAndCartContainer}/>
                    <Route path="*" exact={true} component={NotFoundPage}/>
                </Switch>
            </main>
        </div>
    )
};

export default Main;
