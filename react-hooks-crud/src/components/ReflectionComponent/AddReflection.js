import React, { useState } from "react";
import ReflectionDataService from "../../services/ReflectionService";


const AddReflection = () => {
  const initialReflectionState = {
    id: null,
    first_condition: "",
    realization: "",
    action: "",
    last_condition:"",
    user_id:""
  };
  const [reflection, setReflection] = useState(initialReflectionState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setReflection({ ...reflection, [name]: value });
  };

  const saveReflection = () => {
    var data = {
        first_condition: reflection.first_condition,
        realization: reflection.realization,
        action: reflection.action,
        last_condition:reflection.last_condition,
        user_id:reflection.user_id
    };

    ReflectionDataService.create(data)
      .then(response => {
        setReflection({
          id: response.data.id,
          first_condition: response.data.first_condition,
          realization: response.data.realization,
          action: response.data.action,
          last_condition:response.data.last_condition,
          user_id:response.data.user_id
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newReflection = () => {
    setReflection(initialReflectionState);
    setSubmitted(false);
  };

  return (
  
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newReflection}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="first_condition">first_condition</label>
            <input
              type="text"
              className="form-control"
              id="first_condition"
              required
              value={reflection.first_condition}
              onChange={handleInputChange}
              name="first_condition"
            />
          </div>
          <div className="form-group">
            <label htmlFor="realization">realization</label>
            <input
              type="text"
              className="form-control"
              id="realization"
              required
              value={reflection.realization}
              onChange={handleInputChange}
              name="realization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="action">action</label>
            <input
              type="text"
              className="form-control"
              id="action"
              required
              value={reflection.action}
              onChange={handleInputChange}
              name="action"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_condition">last_condition</label>
            <input
              type="text"
              className="form-control"
              id="last_condition"
              required
              value={reflection.last_condition}
              onChange={handleInputChange}
              name="last_condition"
            />
          </div>
          <button onClick={saveReflection} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>

  );
};

export default AddReflection;