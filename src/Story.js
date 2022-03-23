import { Avatar } from "@mui/material";
import React from "react";
import "./css/story.css"
function Story(){
    return (
        <div className="story">
            <div className="storyBox" style ={{backgroundImage : `url('/static/images/background1.png')`}}>
            <Avatar src="/static/images/pretty.png"/>
                <h4>홍은영</h4>
            </div>

            <div className="storyBox" style ={{backgroundImage : `url('/static/images/background2.png')`}}>
            <Avatar src="/static/images/pretty.png"/>
                <h4>홍은영</h4>
            </div>

            <div className="storyBox" style ={{backgroundImage : `url('/static/images/background3.png')`}}>
            <Avatar src="/static/images/pretty.png"/>
                <h4>홍은영</h4>
            </div>

            <div className="storyBox" style ={{backgroundImage : `url('/static/images/background4.png')`}}>
            <Avatar src="/static/images/pretty.png"/>
                <h4>홍은영</h4>
            </div>

            <div className="storyBox" style ={{backgroundImage : `url('/static/images/background5.png')`}}>
            <Avatar src="/static/images/pretty.png"/>
                <h4>홍은영</h4>
            </div>



        </div>

    );
}
export default Story