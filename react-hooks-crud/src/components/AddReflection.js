import React, { useState } from "react";
import ReflectionService from "../services/reflection.service";
import { TextArea, H1, H2, H5, Button, Alert} from 'ui-neumorphism';
import {Icon} from '@mdi/react';
import { mdiCheckCircle } from '@mdi/js';

const AddReflection = () => {
  const initialReflectionState = {
    id: null,
    first_condition: "",
    realization: "",
    action: "",
    last_condition:"",
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
    };
    // console.log(data);
    ReflectionService.create(data)
      .then(response => {
        setReflection({
          first_condition: response.data.first_condition,
          realization: response.data.realization,
          action: response.data.action,
          last_condition:response.data.last_condition,
        });
        setSubmitted(true);
        // console.log(response.data);
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
  
    <div id="AddReflection">
      <H1>Add Reflection</H1>
      {submitted ? (
        <section>
          <Alert type='success' icon={<Icon path={mdiCheckCircle} size={1} />}>
              You submitted successfully! Please back to home.
          </Alert>
        </section>
      ) : (
        <section>
          <div className="item">
            <H5>
              <label htmlFor="first_condition">①.最初の状態</label>
            </H5>
            <textarea
              className="_U6nBC _2nHt_ "
              placeholder="最初の状態"
              type="text"
              id="first_condition"
              required
              value={reflection.first_condition}
              onChange={handleInputChange}
              name="first_condition"
            />
          </div>
          <div className="item">
            <H5>
              <label htmlFor="action">③.24時間以内に取り組む第一歩</label>
            </H5>
            <textarea
              className="_U6nBC _2nHt_ "
              placeholder="24時間以内に取り組む第一歩"
              type="text"
              id="action"
              required
              value={reflection.action}
              onChange={handleInputChange}
              name="action"
            />
          </div>
          <div className="item">
            <H5>
              <label htmlFor="realization">②.気づき・発見</label>
            </H5>
            <textarea
              className="_U6nBC _2nHt_ "
              placeholder="気づき・発見"
              type="text"
              id="realization"
              required
              value={reflection.realization}
              onChange={handleInputChange}
              name="realization"
            />
          </div>
          <div className="item">
            <H5>
              <label htmlFor="last_condition">④.結果の状態</label>
            </H5>
            <textarea
              className="_U6nBC _2nHt_ "
              placeholder="結果の状態"
              type="text"
              id="last_condition"
              required
              value={reflection.last_condition}
              onChange={handleInputChange}
              name="last_condition"
            />
          </div>
          <div class="item">
            <Button onClick={saveReflection}>
              Submit
            </Button>
          </div>
        </section>
      )}
    </div>

  );
};

export default AddReflection;