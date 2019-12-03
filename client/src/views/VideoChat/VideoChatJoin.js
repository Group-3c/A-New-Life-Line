import React from 'react';
import '../../app.css';
import './VideoChat.css';

var meetingInput = 6601397478; {/* Will get input from user on separate page for the meeting id */}
let meetingID = meetingInput;

var nameInput = "Derek"; {/* Will eventually pull name from user profile */}
let base64EncodedName = nameInput;

var passwordInput = 1234;
let roomPassword = passwordInput;

function VideoChatJoin() {
    return (
        <iframe src = {`https://zoom.us/wc/${meetingID}/join?prefer=1&un=${base64EncodedName}`} sandbox="allow-forms allow-scripts" allow="microphone; camera">
            <p>Your browser does not support iframes.</p>
        </iframe>
    );
}

export default VideoChatJoin;
