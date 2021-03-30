import React, { useState, useEffect } from "react";
import ReflectionService from "../services/reflection.service";
import UserService from "../services/user.service";

const BoardUser = () => {
    const [content, setContent] = useState("");
    const [reflections, setReflections] = useState([]);
    const [currentReflection, setCurrentReflection] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );

        ReflectionService.getAll().then(
            (response) => {
                setReflections(response.data);
                console.log(response.data);
            },
            (error) => {
                const _reflections =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                setContent(_reflections);
            }
        );

    },[]);

    const setActiveReflection = (reflection, index) => {
        setCurrentReflection(reflection);
        setCurrentIndex(index);
    };

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>

            <ul className="list-group">
            {reflections &&
                reflections.map((reflection, index) => (
                <li
                    className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveReflection(reflection, index)}
                    key={index}
                >
                    {reflection.updatedAt}
                </li>
                ))}
            </ul>

            <div className="col-md-6">
                {currentReflection ? (
                    <div>
                        <h4>Reflection</h4>
                        <div>
                            <label><strong>First Condition:</strong></label>{" "}{currentReflection.first_condition}
                        </div>
                        <div>
                            <label><strong>Realization:</strong></label>{" "}{currentReflection.realization}
                        </div>
                        <div>
                            <label><strong>Last Condition:</strong></label>{" "}{currentReflection.last_condition}
                        </div>
                    </div>
                    ) : (
                    <div>
                        <br />
                        <p>Please click on a Reflection...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BoardUser;