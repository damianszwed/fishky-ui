import React, {Component} from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Main from '../components/Main'


export default class App extends Component {

    render() {
        return (
            <div>
                <header><Navbar/></header>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
