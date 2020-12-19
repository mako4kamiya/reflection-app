import React, { useState, useEffect } from "react";
import UserDataService from "../../services/UserService";

const User = props => {
  const initialUserState = {
    id: null,
    name: String,
    password: String,
    vocation: String,
    meaning: String
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");

  const getUser = id => {
    UserDataService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updateUser = () => {
    UserDataService.update(currentUser._id, currentUser)
      .then(response => {
        console.log(response.data);
        setMessage("The user was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UserDataService.remove(currentUser._id)
      .then(response => {
        console.log(response.data);
        props.history.push("/users");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={currentUser.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vocation">vocation</label>
              <input
                type="text"
                className="form-control"
                id="vocation"
                name="vocation"
                value={currentUser.vocation}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="meaning">meaning</label>
              <input
                type="text"
                className="form-control"
                id="meaning"
                name="meaning"
                value={currentUser.meaning}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteUser}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a User...</p>
        </div>
      )}
    </div>

  );
};

export default User;