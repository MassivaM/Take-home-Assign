import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact'
import Request from './Request'
import Info from './Info'
import {Route, Link} from "react-router-dom";
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Contact} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/request" component={Request} />
    </div>
  );
}

export default App;
