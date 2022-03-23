import React from "react";
import Sidebaroptions from "./Sidebaroptions";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import "./css/sidebar.css"


function Sidebar(){
    return (
        <div className="sidebar">
            <Sidebaroptions title="홍은영" src="/static/images/pretty.png"/>
            <Sidebaroptions title="코로나 19 센터" src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png"/>
            <Sidebaroptions  title="친구" src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"/>
            <Sidebaroptions  title="그룹" src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"/>
            <Sidebaroptions  title="Watch" src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"/>
            <Sidebaroptions  title="페이지" src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" />
            <Sidebaroptions  title="더 보기" Icon = {ExpandMoreIcon}/>

        </div>

    );
}
export default Sidebar