import React from 'react';
import {Route} from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './App.css';
import Hero01 from './components/Heroes/Hero01';

const App = () => {
    return (
        <>
            <Route exact path='/'>
                <div className="main-page-wrapper">
                    <div className="main-page-inner">
                        <img src={logo} className="main-page-img" alt="logo"/>
                        <h1 className="main-page-title">BRIGHT KIT</h1>
                    </div>
                </div>
            </Route>
            <Route path='/hero' render={() => <Hero01 />}/>
        </>
    );
}

export default App;
