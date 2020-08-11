import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Post from './pages/Posts';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header'

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/posts" component={Post}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
