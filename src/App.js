import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactHighcharts from 'react-highcharts';
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import Highlight from 'react-highlight';


import AnalysisComponent from './components/analysis'
import HomeComponent from './components/home'
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'


class App extends Component {

  render() {


    return (
      <div className="App">
        {
        /*  <div>

            </div>! */

            }
            <HeaderComponent/>
            <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={HomeComponent}/>
                  <Route exact path='/aboutus' component={AnalysisComponent}/>
                </Switch>
            </BrowserRouter>
            <FooterComponent/>
      </div>
    );
  }
}

export default App;
