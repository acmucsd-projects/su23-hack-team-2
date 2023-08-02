import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const Inbox = () => {
  return (
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Jaldi&display=swap" rel="stylesheet" />
            <link href="./style.css" rel="stylesheet" />
            <title>Document</title>
        </head>
        <div class="v8_5527">
            <div class="backgroundlefttan">
                <div class="v8_5529"></div>
                <div class="inboxrect">
                    <span class="inboxtext">Inbox</span>
                    <span class="newmessage">+</span>
                </div>
                <div class="v57_1908"></div>
            </div>
            
            <div class="inboxmessagesrect">
                <div class="v8_5532">
                    <span class="v8_5534">John Doe</span>
                    <div class="v8_5535"></div>
                    <span class="v8_5536">You: Oh yeah I’ll be there don’t w...</span>
                    <div class="v8_5537"></div>
                    <span class="v57_1933">4:26 pm</span>
                </div>
                <div class="v57_1922">
                    <span class="v57_1927">Any updates on the Figma mock...</span>
                    <span class="v57_1923">Jane Doe</span>
                    <div class="v57_1929"></div>
                    <span class="v57_1932">6:00 pm</span>
                </div>
            </div>

            <div class="incomingmessagerect">
                <div class="v8_5563"></div>
                <span class="v8_5564">Hey! I was wondering if you were coming to the meeting tomorrow. </span>
            </div>
                
            <div class="outgoingmessagerect">
                <div class="v8_5566"></div>
                <span class="v8_5567">Oh yeah I’ll be there don’t worry.</span>
            </div>

            <div class="v8_5568">
                <div class="v8_5569"></div>
                <div class="v8_5570"></div>
                <span class="v8_5571">John Doe</span>
                <div class="v8_5572"></div>
            </div>

            <div class="typemessagerect">
                <input type="text" id="typemessage" placeholder="Message..."></input>
            </div>

            <div class="searchboxrect">
                <input type="text" id="searchtype" placeholder="Search..."></input>
            </div>

            <div class="v70_1633"></div>
        </div>
    </html>
  );
};

export default Inbox;