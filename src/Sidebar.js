import React from 'react'
import './sidebar.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {

    const dispatch=useDispatch();
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon></AddIcon>} className="compose__btn" onClick={()=>dispatch(openSendMessage())}>Compose</Button>

            <Sidebaroptions Icon={InboxIcon} title="Inbox" number={24} isActive={true}></Sidebaroptions>
            <Sidebaroptions Icon={StarRateIcon} title="Important" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={SendIcon} title="Sent" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={DraftsIcon} title="Drafts" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={LabelIcon} title="Category" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={DeleteIcon} title="Delete" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={FindInPageIcon} title="Documents" number={24}></Sidebaroptions>
            <Sidebaroptions Icon={ExpandMoreIcon} title="More" number={24}></Sidebaroptions>
            <hr/>
            <h3 className="sidebar__heading">
                Meet
            </h3>
            <Sidebaroptions Icon={VideocamIcon} title="New Meeting"></Sidebaroptions>
            <Sidebaroptions Icon={KeyboardIcon} title="Join a Meeting"></Sidebaroptions>

        </div>
    )
}

export default Sidebar
