import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Card, TextField, Button, Alert} from 'ui-neumorphism';

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
        <div className="alert" role="alert">
            <Alert type='error' flat>
                This field is required!
            </Alert>
        </div>
        );
    }
};

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(name, password).then(
            () => {
                props.history.push("/user");
                window.location.reload();
            },
            (error) => {
            const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            setLoading(false);
            setMessage(resMessage);
            }
        );
        } else {
            setLoading(false);
        }
    };


    return (
        <div id="Login">
            <Card className="cardForm">
                <Form onSubmit={handleLogin} ref={form}>
                    <div className="input">
                        <Input className="_U6nBC _2nHt_ " placeholder="Name" type="text" name="name" value={name} onChange={onChangeName} validations={[required]} />
                    </div>
                    <div className="input">
                        <Input className="_U6nBC _2nHt_ " placeholder="Password" type="password" name="password" value={password} onChange={onChangePassword} validations={[required]}/>
                    </div>
                    <Button className="button" disabled={loading}>
                        {loading && (
                            <span></span>
                        )}
                        <span>Login</span>
                    </Button>

                    {message && (
                        <div>
                            <div className="alert" role="alert">
                                <Alert type='error' flat>
                                    {message}
                                </Alert>
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Card>
        </div>
    );
};

export default Login;