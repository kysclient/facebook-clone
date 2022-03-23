import React, { useState } from "react";
import VideoCallIcon from '@mui/icons-material/VideoCall'
import Avatar from '@mui/material/Avatar'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmotionIcon from '@mui/icons-material/InsertEmoticon'
import "./css/messagesender.css"
import { IconButton, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'

function MessageSender(){

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
        <Modal open = {open} onClose = {handleClose}>
            <div className="modal_pop">
                <form>
                    <div className="modalHeading">
                        <h3>게시물 만들기</h3>
                        <IconButton onClick ={handleClose}>
                            <CloseIcon />
                            </IconButton>
                    </div>

                    <div className="modalHeader_top">
                    <Avatar src="/static/images/pretty.png"/>
                        <h5>홍은영</h5>
                    </div>

                    <div className="modalBody">
                        <textarea rows="5" placeholder="홍은영님, 무슨 생각을 하고 계신가요?"/>
                    </div>


                    <div className="modalFooter">
                        <div className="modalFooterLeft">
                            <h4>게시물에 추가</h4>
                            </div>

                        <div className="modalFooterRight">
                            <IconButton>
                                <PhotoLibraryIcon fontSize="large" style={{color:'lightgreen'}}/>
                            </IconButton>

                            <IconButton>
                                <VideoCallIcon fontSize="large" style={{color:'red'}} />
                            </IconButton>

                            <IconButton>
                                <InsertEmotionIcon fontSize="large" style={{color:'#ffb100'}}/>
                            </IconButton>
                            </div>
                    </div>

                    <input type="submit" className="post_submit" value="게시" />

                </form>
            </div>
            
        </Modal>
        <div className="messagesender">
            <div className="messagesender_top">
            <Avatar src="/static/images/pretty.png"/>
                <form>
                    <input type="text" placeholder="홍은영님, 무슨 생각을 하고 계신가요?" onClick={handleOpen} readOnly />
                </form>
            </div>

            <div className="messagesender_bottom">

                <div className="messangerOptions">
                    <VideoCallIcon style={{color:'red'}} fontSize = "large"/>
                    <p>라이브 방송</p>
                </div>

                <div className="messangerOptions">
                    <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize = "large" />
                    <p>사진/동영상</p>
                </div>

                <div className="messangerOptions">
                    <InsertEmotionIcon style={{color:'#ffb100'}} fontSize = "large" />
                    <p>기분/활동</p>
                </div>
        </div>

        </div>

        </>

    );
}

export default MessageSender