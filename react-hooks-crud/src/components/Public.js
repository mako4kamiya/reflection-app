import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AyumiAvatar from "../img/ayumi.avater.png";
import { Card, CardContent, Avatar, Body1, H5, H6, IconButton, Button } from 'ui-neumorphism';
import {Icon} from '@mdi/react';
import { mdiInstagram } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';

// import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const Public = () => {
    // const [content, setContent] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        // UserService.getPublicContent().then(
        //     (response) => {
        //         setContent(response.data);
        //     },
        //     (error) => {
        //         const _content =
        //         (error.response && error.response.data) ||
        //         error.message ||
        //         error.toString();
        //         setContent(_content);
        //     }
        // );

        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <div id="Public">
            <div class="contents-left">
                <Card bordered className="cardContents">
                    <CardContent>
                        <H5>ayu | デジタル×広報戦略</H5>
                        <Body1>
                            <br />▷Marketing×Branding
                            <br />▷広報戦略企画立案
                            <br />▷リスタート事業支援
                            <br />▷新しい価値を創造
                            <br />▷想いと思考の通訳・翻訳士
                            <br />▷ヒト・モノ・情報を紡ぐ人
                            <br />▷北欧式コーチング歴16年
                            <br />▷Radio型インスタLive(土)23:00〜
                            <br />▷Marketing team @a/B lab代表🌷
                        </Body1>
                        <div className="sns">
                            <a href="https://www.instagram.com/fuku.ayu.okinawa/">
                                <IconButton rounded text={false}>
                                    <Icon path={mdiInstagram} size={1} />
                                </IconButton>
                            </a>
                            <a href="https://www.facebook.com/ayumi.fukuhara.14">
                                <IconButton rounded text={false}>
                                    <Icon path={mdiFacebook} size={1} />
                                </IconButton>
                            </a>
                            <a href="https://twitter.com/cocoro_este8">
                                <IconButton rounded text={false}>
                                    <Icon path={mdiTwitter} size={1} />
                                </IconButton>
                            </a>
                        </div>
                    </CardContent>
                </Card>
                <Card bordered inset className="cardAvatar">
                    <Avatar className="ayumiAvatar" alt="fuku.ayu.okinawa" src={AyumiAvatar}/>
                </Card>
            </div>
            {currentUser ? (
            <div class="contents-right">
                <Card bordered className="cardContents">
                    <CardContent>
                        <H6>たまかつ 毎週金曜日 19:00〜</H6>
                        <Body1>
                            <br />当日zoomリンクをお知らせします
                        </Body1>
                    </CardContent>
                </Card>
            </div>
            ):(
            <div class="contents-right">
                <Card bordered className="cardContents">
                    <CardContent>
                        <H6>たまかつ 毎週金曜日 19:00〜</H6>
                        <Body1>
                            <br />グループの方
                        </Body1>
                            <Link to={"/login"}><Button>Login</Button></Link>
                        <Body1>
                            <br />登録がお済みでない方
                        </Body1>
                            <Link to={"/signup"}><Button>Sign Up</Button></Link>
                    </CardContent>
                </Card>
            </div>
            )}
        </div>
    );
};

export default Public;