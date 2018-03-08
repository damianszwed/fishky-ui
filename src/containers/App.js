import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu'
import {MenuItem} from "react-bootstrap"
import ProductsAndCartContainer from './ProductsAndCartContainer'
import NotFoundPage from '../components/NotFoundPage'
import Home from './Home'
import '../components/react-burger-menu.css';

export default class App extends Component {

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Menu pageWrapId={ "page-wrap" } >
                    <MenuItem bsStyle="success" eventKey="1">Action</MenuItem>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                </Menu>
                <main id="page-wrap">
                    <header>I am a fixed header!</header>
                    <h2>Fishky</h2>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/example" component={ProductsAndCartContainer}/>
                        <Route path="*" exact={true} component={NotFoundPage}/>
                    </Switch>
                </main>
            </div>
        );
    }
}


/**
<main id="outer-container">

</main>
<Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >



</Menu>

 **/