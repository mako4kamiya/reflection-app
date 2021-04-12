import React, { useState, useEffect } from "react";
import ReflectionService from "../services/reflection.service";
// import UserService from "../services/user.service";
import { H1, H5, H6, Card, CardContent, Body1, ListItem, ListItemGroup } from 'ui-neumorphism';

const BoardUser = () => {
    const [content, setContent] = useState("");
    const [reflections, setReflections] = useState([]);
    const [currentReflection, setCurrentReflection] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        // UserService.getUserBoard().then(
        //     (response) => {
        //         setContent(response.data);
        //         console.log(response.data);
        //     },
        //     (error) => {
        //         const _content =
        //         (error.response &&
        //             error.response.data &&
        //             error.response.data.message) ||
        //         error.message ||
        //         error.toString();
        //         setContent(_content);
        //     }
        // );

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
        <div id="BoardUser">
            <H1>Reacentry Reflections</H1>
            <section>
                <Card bordered  className="contents">
                    <CardContent>
                        <H5>Reflection</H5>
                        <ul>
                        {reflections &&
                            reflections.map((reflection, index) => (
                            <li
                                className={"" + (index === currentIndex ? "active" : "")}
                                onClick={() => setActiveReflection(reflection, index)}
                                key={index}
                            >
                                {reflection.updatedAt.split("-").[1] + "月" + reflection.updatedAt.split("-").[2].split("T").[0] + "日 の振り返り"}
                            </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card bordered  className="contents">
                    <CardContent>
                        {currentReflection ? (
                        <div>
                            <H6>最初の状態</H6>
                            <p>{currentReflection.first_condition}</p>
                            <H6>気づき・発見</H6>
                            <p>{currentReflection.realization}</p>
                            <H6>24時間以内に取り組む第一歩</H6>
                            <p>{currentReflection.action}</p>
                            <H6>結果の状態</H6>
                            <p>{currentReflection.last_condition}</p>
                        </div>
                        ) : (
                        <div>
                            <br />
                            <p>Please click on a Reflection...</p>
                        </div>
                        )}
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};

export default BoardUser;