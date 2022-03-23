import React from "react";  
import "./css/feed.css"
import MessageSender from "./MessageSender";
import Post from "./Post";
import Story from "./Story"
function Feed(){
    return (
        <div className="feed">
            {/* Story */}
            <Story />
            {/* MessageSender */}
            <MessageSender />
            {/* Posts */}
            <Post photoURL ="/static/images/pretty.png" image="/static/images/background1.png" username="홍은영" timestamp="12:40 PM" message="저는 바보입니다" />
       
            <Post photoURL ="/static/images/pretty.png" image="/static/images/background2.png" username="홍은영" timestamp="12:40 PM" message="This is test Message" />


        </div>

    );
}
export default Feed