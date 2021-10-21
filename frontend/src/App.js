import './App.css';
import React from 'react';
import { Navigation, Home, Interactions, Result, Footer } from "./components";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/interactions" exact component={() => <Interactions />} />
            <Route path="/result" exact component={() => <Result />} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Router>
    </div>
  );
}

export default App;