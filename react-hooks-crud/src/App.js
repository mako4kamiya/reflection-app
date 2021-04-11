import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from 'ui-neumorphism';
import { overrideThemeVariables } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import "./css/App.css";

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

  overrideThemeVariables({
    '--light-bg': '#d9e7e8',
    '--light-bg-dark-shadow': '#7B9FA2',
    '--error': '#ec9c85'
    // '--light-bg-light-shadow': '#ffdcde',
    // '--dark-bg': '#292E35',
    // '--dark-bg-dark-shadow': '#21252a',
    // '--dark-bg-light-shadow': '#313740',
    // '--primary': '#8672FB',
    // '--primary-dark': '#4526f9',
    // '--primary-light': '#c7befd'
  })


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
      <nav>

      {currentUser ? (
        <Link to={"/user"}>
          <Button text>Reflection App</Button>
        </Link>
      ) : (
        <Link to={"/"}>
          <Button text>Reflection App</Button>
        </Link>
      )}

      <div className="nav-left">
      {showModeratorBoard && (
        <li>
          <Link to={"/mod"}>
            <Button text>Moderator Board</Button>
          </Link>
        </li>
      )}

      {showAdminBoard && (
        <li>
          <Link to={"/admin"}>
            <Button text>Admin Board</Button>
          </Link>
        </li>
      )}
      </div>

      {currentUser ? (
        <div className="nav-right">
          <li>
            <Link to={"/profile"}>
              <Button text>{currentUser.name}</Button>
            </Link>
          </li>
          <li>
            <Link to={"/add"}>
              <Button text>Add Reflection</Button>
            </Link>
          </li>
          <li>
            <a href="/login" onClick={logOut}>
              <Button text>LogOut</Button>
            </a>
          </li>
        </div>
      ) : (
        <div className="nav-right">
          <li>
            <Link to={"/login"}>
              <Button text>Login</Button>
            </Link>
          </li>

          <li>
            <Link to={"/signup"}>
              <Button text>Sign Up</Button>
            </Link>
          </li>
        </div>
      )}
      </nav>

      <main>
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
      </main>
    </div>
  );
};
export default App;