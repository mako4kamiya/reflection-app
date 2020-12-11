import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import UserLogin from "./components/UserComponent/UserLogin";
import AddUser from "./components/UserComponent/AddUser";
import User from "./components/UserComponent/User";
import UserList from "./components/UserComponent/UsersList";
import AddReflection from "./components/ReflectionComponent/AddReflection";
import Reflection from "./components/ReflectionComponent/Reflection";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/signup" component={AddUser} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/add" component={AddReflection} />
          <Route exact path="/reflections/:id" component={Reflection} />
        </Switch>
      </div>
    </div>
  );
}

export default App;