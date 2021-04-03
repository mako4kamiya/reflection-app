import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Public from "./components/Public";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import AddReflection from "./components/AddReflection";

// import UserLogin from "./components/UserComponent/UserLogin";
// import AddUser from "./components/UserComponent/AddUser";
// import User from "./components/UserComponent/User";
// import UsersList from "./components/UserComponent/UsersList";
// import Reflection from "./components/ReflectionComponent/Reflection";

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">

      {currentUser ? (
        <Link to={"/user"} className="navbar-brand">
          Reflection App
        </Link>
      ) : (
        <Link to={"/"} className="navbar-brand">
          Reflection App
        </Link>
      )}

      <div className="navbar-nav mr-auto">
      {showModeratorBoard && (
        <li className="nav-item">
          <Link to={"/mod"} className="nav-link">
            Moderator Board
          </Link>
        </li>
      )}

      {showAdminBoard && (
        <li className="nav-item">
          <Link to={"/admin"} className="nav-link">
            Admin Board
          </Link>
        </li>
      )}
      </div>

      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              {currentUser.name}
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Reflection
            </Link>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link" onClick={logOut}>
              LogOut
            </a>
          </li>
        </div>
      ) : (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              Sign Up
            </Link>
          </li>
        </div>
      )}
      </nav>

      <Button />

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/public"]} component={Public} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/add" component={AddReflection} />
        </Switch>
      </div>
    </div>
  );
};
export default App;