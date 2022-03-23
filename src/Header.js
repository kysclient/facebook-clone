import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import PeopleIcon from '@mui/icons-material/People'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import Avatar from '@mui/material/Avatar'

import AppsIcon from '@mui/icons-material/Apps'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { IconButton } from '@mui/material'


 
function Header(){
    return(
        <div className="header">

            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />

                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" placeholder="Facebook 검색" />

                </div>


                </div>

                <div className="header_middle">

                    <div className="header_option header_option--active">
                        <HomeIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <OndemandVideoIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <PeopleIcon fontSize="large" />
                    </div>

                    <div className="header_option">
                        <SportsEsportsIcon fontSize="large" />
                    </div>

                </div>

                <div className="header_right">
                    <div className="header_info">
                        <Avatar src="/static/images/pretty.png"/>
                        <h5>홍은영</h5>
                        <IconButton>
                            <AppsIcon/>
                        </IconButton>

                        <IconButton>
                            <ForumIcon/>
                        </IconButton>

                        <IconButton>
                            <NotificationsIcon/>
                        </IconButton>

                        <IconButton>
                            <ArrowDropDownIcon/>
                        </IconButton>

                 



                    </div>

                </div>
        </div>
        
    );
}

export default Header