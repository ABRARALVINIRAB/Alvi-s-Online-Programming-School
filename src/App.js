import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Mentors from './components/Mentors/Mentors';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AllService from './components/AllService/AllService';
import AllServices from './components/AllServices/AllServices';
import About from './components/About/About';
import Error from './components/Error/Error';


function App() {
  return (
    <div className="App whole-container">
      <Router>
        <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/mentors">

            <Mentors></Mentors>

          </Route>
          <Route path='/services'>
            <AllServices></AllServices>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
