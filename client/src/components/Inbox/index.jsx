import React from "react";
import "./style.css";

const Inbox = () => {
    return (
        <html>
            <head>
                <meta charset="utf-8"/>
                <link href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="style.css"/>
            </head>
        
            <body>
                <div class="e204_792">
                    <div class="pathway">
                        <span class="homepathway">Home</span>
                        <i class="arrowright"></i>
                        <span class="inboxpathway">Inbox</span>
                        </div>
                    <div class="navbardiv">
                        <div class="navbar">
                            <div class="navbarcategories">
                                <span class="academics">Academics</span>
                                <span class="furniture">Furniture</span>
                                <span class="clothing">Clothing</span>
                                <span class="more">More</span>
                                </div>
                            <div class="searchalldiv">
                                <div class="ei204_860_208_454">
                                    <div class="searchallicon"></div>
                                    <div class="searchall">
                                        <input type="text" id="searchinnavbar" placeholder="Search"></input>
                                        </div>
                                    </div>
                                </div>
                            <div class="toprighticons">
                                <div class="wishlist">
                                    <div class="wishlisticon"></div>
                                    </div>
                                <div class="profile">
                                    <div class="profileicon"></div>
                                    </div>
                                </div>
                            </div>
                        <div class="logo"></div>
                        </div>
                    <div class="searchinboxdiv">
                        <div class="searchinboxicon"></div>
                        <div class="searchinbox">
                            <input type="text" id="searchmessages" placeholder="Search Inbox"></input>
                            </div>
                        </div>
                    <div class="messages">
                        <div class="johnschatpreview">
                            <span  class="e8_5534">John Doe</span>
                            <div  class="e8_5535"></div>
                            <span  class="johnsmessagepreview">You: Are you willing to negotiate o...</span>
                            <span  class="johnmessagetimestamp">4:26 pm</span>
                        </div>
                        <div class="janeschatpreview">
                            <span  class="janemessagepreview">I’d like to purchase your listing, w...</span>
                            <span  class="e57_1923">Jane Doe</span>
                            <div  class="janedoepicture"></div>
                            <span  class="janemessagetimestamp">6:00 pm</span>
                            </div>
                        </div>
                    <div class="openmessagesender">
                        <span  class="currentmessagename">John Doe</span>
                        </div>
                    <div class="currentmessage_inboxdivider"></div>
                    <div class="incomingmessagesdivider"></div>
                    <div class="contact_currentmessagedivider"></div>
                    <div class="johndoepicture"></div>
                    <div class="incomingmessage">
                        <div class="e205_996"></div>
                        <span class="e205_997">I noticed you have my listing in your wishlist, did you have any questions about the item?</span>
                        </div>
                    <div class="outgoingmessage">
                        <div class="e205_999"></div>
                        <span class="e205_1000">Are you willing to negotiate on the price?</span>
                        </div>
                    <div class="typemessagediv">
                        <div class="e205_1002"></div>
                        <span class="typemessagerect">
                            <input type="text" id="typemessage" placeholder="Compose a message..."></input>
                            </span>
                        </div>
                    </div>
            </body>
      </html>
    );
  };
  
  export default Inbox;