import React from 'react';
import '../../app.css';
import './VideoChat.css';

var meetingCreateInput = 6601397478; {/* Will get input from admin on separate page for creating the meeting id */}
let meetingID = meetingCreateInput;

function VideoChatJoin() {
    return (
        <iframe src = {`https://zoom.us/s/${meetingID}`} sandbox="allow-forms allow-scripts" allow="microphone; camera">
            <p>Your browser does not support iframes.</p>
        </iframe>
    );
}

export default VideoChatJoin;
