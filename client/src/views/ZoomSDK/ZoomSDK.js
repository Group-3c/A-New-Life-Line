import React, { useEffect } from 'react';
import ZoomMtg from 'zoomus-jssdk';
import jquery from 'jQuery';ç
import $ from 'jQuery';

ZoomMtg.setZoomJSLib('https://source.zoom.us/1.6.1/lib', '/av');

console.log('checkSystemRequirements');
console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

const ZoomContainer = function() {
    useEffect(() => {
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareJssdk();
        console.log('document now has two #zmmtg-root elements, SDK has attached itself to one created by React');
    }, []);

    return (
        <div id="zmmtg-root">

        </div>
    );
};

const API_KEY = 'osh9e1ZkTueTBPGJK91gAg';

/**
 * NEVER PUT YOUR ACTUAL API SECRET IN CLIENT SIDE CODE, THIS IS JUST FOR QUICK PROTOTYPING
 * The below generateSignature should be done server side as not to expose your api secret in public
 * You can find an eaxmple in here: https://marketplace.zoom.us/docs/sdk/native-sdks/Web-Client-SDK/tutorial/generate-signature
 */
const API_SECRET = 'SRi0FjpefpiSJVxntHjhii6oiGQB7lOpSZKM';

document.getElementById('join_meeting').addEventListener('click', (e) => {
    e.preventDefault();

    const meetConfig = {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        meetingNumber: parseInt(document.getElementById('meeting_number').value, 10),
        userName: document.getElementById('display_name').value,
        passWord: '',
        leaveUrl: 'https://zoom.us',
        role: 0
    };

    ZoomMtg.generateSignature({
        meetingNumber: meetConfig.meetingNumber,
        apiKey: meetConfig.apiKey,
        apiSecret: meetConfig.apiSecret,
        role: meetConfig.role,
        success(res) {
            console.log('signature', res.result);
            ZoomMtg.init({
                leaveUrl: 'http://www.zoom.us',
                success() {
                    ZoomMtg.join(
                        {
                            meetingNumber: meetConfig.meetingNumber,
                            userName: meetConfig.userName,
                            signature: res.result,
                            apiKey: meetConfig.apiKey,
                            userEmail: 'email@gmail.com',
                            passWord: meetConfig.passWord,
                            success() {
                                $('#nav-tool').hide();
                                console.log('join meeting success');
                            },
                            error(res) {
                                console.log(res);
                            }
                        }
                    );
                },
                error(res) {
                    console.log(res);
                }
            });
        }
    });
});

function ZoomSDK(){
    return(
      <iframe title={'Zoom_HTML'} src={"../ZoomSDK.html"}/>
    );
}

export default ZoomSDK;
