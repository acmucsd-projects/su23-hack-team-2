import React from "react";
import "./style.css"
import Login from '../Login/login'

const SignInPage = () => {
    return (
        <html class = 'signInHTML'>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <div class="page">
                <img class = "imgLogo" src="https://cdn.discordapp.com/attachments/1122422275304587264/1131333980524908696/image.png?ex=652710e0&is=65149be0&hm=d13f23ce281b1ebaf35860b3019d1794477a10f866b25cbc11fa051c54d99027&"/>
                <div class="login-side">
                    <h2>Login Here</h2>
                    <Login class="login-btn"/>
                </div>
            </div>
        </html>
        
    );
};

export default SignInPage