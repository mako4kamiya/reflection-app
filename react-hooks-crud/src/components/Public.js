import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { Card, CardContent, Button, Avatar, H5 } from 'ui-neumorphism';

const Public = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (
        <div id="Public">
            <div class="contents-left">
                <Card bordered inset>
                    <CardContent>
                    <Avatar 
                        alt="fuku.ayu.okinawa"
                        src='https://lh3.googleusercontent.com/a-/AAuE7mBL0Hh_wKgNlXtZks9XqIU3uv-j3COoKuYysLS_Svg'
                    />
                    </CardContent>
                </Card>
                <Card bordered>
                    <CardContent>
                        <H5>{content}</H5>
                    </CardContent>
                </Card>
            </div>
            <div class="contents-right">
                <Card bordered>
                    <CardContent>
                        <H5>{content}</H5>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Public;