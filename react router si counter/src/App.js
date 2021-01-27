import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Login from "./Router/Login";
import Todo from "./Router/Todo";


function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;