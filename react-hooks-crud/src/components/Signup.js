import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Card, TextField, Button, Alert} from 'ui-neumorphism';

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
        <div className="alert" role="alert">
            <Alert type='error' flat dense>
                This field is required!
            </Alert>
        </div>
        );
    }
};

const vEmail = (value) => {
    if (!isEmail(value)) {
        return (
        <div className="alert" role="alert">
            <Alert type='error' flat dense>
                This is not a valid email.
            </Alert>
        </div>
        );
    }
};

const vname = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
        <div className="alert" role="alert">
            <Alert type='error' flat dense>
                The name must be between 3 and 20 characters.
            </Alert>
        </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
        <div className="alert" role="alert">
            <Alert type='error' flat dense>
            The password must be between 6 and 40 characters.
            </Alert>
        </div>
        );
    }
};

const Signup = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleSignup = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.signup(name, email, password).then(
                (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                },
                (error) => {
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
                }
            );
        }
    };


    return (
        <div id="Signup">
            <Card className="cardForm">
                <Form onSubmit={handleSignup} ref={form}>
                    {!successful && (
                        <div>
                            <div className="input">
                                <Input className="_U6nBC _2nHt_ " placeholder="Name" type="text" name="name" value={name} onChange={onChangeName} validations={[required, vname]} />
                            </div>
                            <div className="input">
                                <Input className="_U6nBC _2nHt_ " placeholder="Email" type="text" name="email" value={email} onChange={onChangeEmail} validations={[required, vEmail]} />
                            </div>
                            <div className="input">
                                <Input className="_U6nBC _2nHt_ " placeholder="Password" type="password" name="password" value={password} onChange={onChangePassword} validations={[required, vpassword]} />
                            </div>
                            <Button className="button">
                                <span>Sign Up</span>
                            </Button>
                        </div>
                    )}

                    {message && (
                        <div>
                            <div className="alert" role="alert">
                            { successful ? (
                                <Alert className="alertSuccess" type='success' flat dense>
                                    {message}<br/><br/>please lonin.
                                </Alert>
                            ):(
                                <Alert type='error' flat dense>
                                    {message}
                                </Alert>
                            )}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Card>
        </div>
    );
};
export default Signup;