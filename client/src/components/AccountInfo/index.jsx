import React from "react";
import "./style.css";

const AccountInfo = () => {
  return (
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap" rel="stylesheet" />
            <link href="./style.css" rel="stylesheet" />
        </head>

        <body>
            <div class="e141_867">
                <div class="e8_2978">
                    <span  class="helloyourname">Hello Jane</span>
                    <div class="e8_2980"></div>
                </div>
                <span  class="welcomemessage">Welcome to your Account</span>
                <div class="wishlisttab">
                    <span class="wishlistbutton">Wishlist</span>
                </div>
                <div class="inboxshortcut">
                    <span class="inboxbutton">Inbox</span>
                </div>
                <div class="signoutshortcut">
                    <span class="signoutbutton">Sign Out</span>
                </div>
                <div class="myinfotabdiv">
                    <div class="e8_3007">
                        <div class="e8_3008"></div>
                        <div class="e8_3009"></div>
                    </div>
                    <div class="e8_3010">
                        <span  class="myinfotab">My Info</span>
                        <div class="e8_3012">
                            <div class="ei8_3012_211_518"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="theinfo">
                <span  class="e8_2981">My Info</span>
                <span  class="e8_2982">Contact Details</span>
                <div class="e8_2988">
                    <span  class="e8_2989">Your Name</span>
                    <span  class="e8_2990">Jane Doe</span>
                    <span  class="changename">Change</span>
                </div>
                <div class="e59_1895">
                    <span  class="e59_1896">Pronouns</span>
                    <span  class="e59_1897">she/her/hers</span>
                    <span  class="changepronouns">Change</span>
                </div>
                <div class="e59_1891">
                    <span  class="e59_1892">College</span>
                    <span  class="e59_1893">Thurgood Marshall</span>
                    <span  class="changecollege">Change</span>
                </div>
                <div class="e8_2992">
                    <span  class="e8_2993">Email Address</span>
                    <span  class="e8_2994">jdoe@ucsd.edu</span>
                    <span  class="changeemail">Change</span>
                </div>
                <div class="e8_2996">
                    <span  class="e8_2997">Phone Number</span>
                    <span  class="e8_2998">1234567890</span>
                    <span  class="changephonenumber">Change</span>
                </div>
                <div class="e8_3017">
                    <span  class="e8_3018">Password</span>
                    <span  class="changepassword">Change</span>
                    <div class="e8_3020">
                        {/*
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
                        <div class="hiddenpassword"></div>
  */}
                        <div class="hiddenpassword1"></div>
                        <div class="hiddenpassword2"></div>
                        <div class="hiddenpassword3"></div>
                        <div class="hiddenpassword4"></div>
                        <div class="hiddenpassword5"></div>
                        <div class="hiddenpassword6"></div>

                    </div>
                </div>
            </div>
        </body>
    </html>
  );
};

export default AccountInfo;