import React, { useState } from "react";
import UserDataService from "../../services/UserService";

const AddUser = () => {
  const initialUserState = {
    id: null,
    name: "",
    password: "",
    vocation: "",
    meaning:""
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: user.name,
      password: user.password,
      vocation: user.vocation,
      meaning:user.meaning
    };

    UserDataService.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          password: response.data.password,
          vocation: response.data.vocation,
          meaning:response.data.meaning
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
  
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vocation">Vocation</label>
            <input
              type="text"
              className="form-control"
              id="vocation"
              required
              value={user.vocation}
              onChange={handleInputChange}
              name="vocation"
            />
          </div>
          <div className="form-group">
            <label htmlFor="meaning">Meaning</label>
            <input
              type="text"
              className="form-control"
              id="meaning"
              required
              value={user.meaning}
              onChange={handleInputChange}
              name="meaning"
            />
          </div>
          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>

  );
};

export default AddUser;