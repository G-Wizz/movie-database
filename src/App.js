import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1 id="main-title">Movie Database</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
