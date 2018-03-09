import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import ProductsAndCartContainer from './ProductsAndCartContainer'
import NotFoundPage from '../components/NotFoundPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from './Home'

export default class App extends Component {

    render() {
        return (
            <div class="container">
                <header>
                    <Navbar/></header>
                <main role="main" className="container">
                    <h1 className="mt-5">Sticky footer with fixed navbar</h1>
                    <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers
                        with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top:
                            60px;</code> on the <code>body &gt; .container</code>.</p>
                    <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/example" component={ProductsAndCartContainer}/>
                        <Route path="*" exact={true} component={NotFoundPage}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}
