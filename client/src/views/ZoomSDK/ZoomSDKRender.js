import React from 'react';
import '../../app.css';
import '../VideoChat/VideoChat.css';

function ZoomSDKRender(){
    return(
        <iframe src = {"../../../public/ZoomSDK.html"} sandbox="allow-forms allow-scripts" allow="microphone; camera">
            <p>Your browser does not support iframes.</p>
        </iframe>
    );
}

export default ZoomSDKRender;

//const API_KEY = 'osh9e1ZkTueTBPGJK91gAg';
//const API_SECRET = 'SRi0FjpefpiSJVxntHjhii6oiGQB7lOpSZKM';