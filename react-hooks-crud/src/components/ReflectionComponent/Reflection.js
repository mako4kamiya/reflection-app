import React, { useState, useEffect } from "react";
import ReflectionDataService from "../../services/ReflectionService";

const Reflection = props => {
  const initialReflectionState = {
    id: null,
    first_condition: "",
    realization: "",
    action: "",
    last_condition:"",
    user_id:""
  };
  const [currentReflection, setCurrentReflection] = useState(initialReflectionState);
  const [message, setMessage] = useState("");

  const getReflection = id => {
    ReflectionDataService.get(id)
      .then(response => {
        setCurrentReflection(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReflection(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentReflection({ ...currentReflection, [name]: value });
  };

  const updateReflection = () => {
    ReflectionDataService.update(currentReflection._id, currentReflection)
      .then(response => {
        console.log(response.data);
        setMessage("The reflection was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteReflection = () => {
    ReflectionDataService.remove(currentReflection._id)
      .then(response => {
        console.log(response.data);
        props.history.push("/reflections");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div>
      {currentReflection ? (
        <div className="edit-form">
          <h4>Reflection</h4>
          <form>
            <div className="form-group">
              <label htmlFor="first_condition">first_condition</label>
              <input
                type="text"
                className="form-control"
                id="first_condition"
                name="first_condition"
                value={currentReflection.first_condition}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="realization">realization</label>
              <input
                type="text"
                className="form-control"
                id="realization"
                name="realization"
                value={currentReflection.realization}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="action">action</label>
              <input
                type="text"
                className="form-control"
                id="action"
                name="action"
                value={currentReflection.action}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_condition">last_condition</label>
              <input
                type="text"
                className="form-control"
                id="last_condition"
                name="last_condition"
                value={currentReflection.last_condition}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteReflection}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateReflection}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Reflection...</p>
        </div>
      )}
    </div>

  );
};

export default Reflection;