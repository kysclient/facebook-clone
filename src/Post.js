import React from "react";
import "./css/post.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import Avatar from '@mui/material/Avatar';
import ThumbIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

function Post({photoURL, image, username, timestamp, message}){
    return (
        <div className="post">
            <div className="post_top">
                <div className="post_topLeft">
                <Avatar src={photoURL}/>
                    <div className="postInfo">
                        <h4>{username}</h4>
                        <p>{timestamp} <PublicIcon/> </p>
                    </div>

                </div>
                <MoreHorizIcon/>
            </div>

            <div className="post_middle">
                <p>
                    {message}
                </p>
                {/* <img src="/static/images/background1.png"/> */}
                { image && <img src={image} /> }

            </div>

            <div className="post_bottom">

                <div className="post_bottomOptions">
                    <ThumbIcon /> <p>좋아요</p>
                </div>

                <div className="post_bottomOptions">
                    <ChatBubbleOutlineIcon /> <p>댓글 달기</p>
                </div>

                <div className="post_bottomOptions">
                    <ShareIcon /> <p>공유하기</p>
                </div>

            </div>

        </div>

    );
}

export default Post