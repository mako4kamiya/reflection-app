import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Public from "./components/Public";
import Profile from "./components/Profile";
import Home from "./components/Home";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

// import UserLogin from "./components/UserComponent/UserLogin";
// import AddUser from "./components/UserComponent/AddUser";
// import User from "./components/UserComponent/User";
// import UsersList from "./components/UserComponent/UsersList";
// import AddReflection from "./components/ReflectionComponent/AddReflection";
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
        <Link to={"/home"} className="navbar-brand">
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

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/public"]} component={Public} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      </div>
    </div>
  );
};
export default App;