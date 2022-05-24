import React from 'react'
import './Emaillist.css';
import { IconButton ,Avatar} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectedMail} from './features/mailSlice';
function Emaildetail() {
    const history=useHistory()
    const mail=useSelector(selectedMail);
    return (
        <div className="emaildetails">
            
        <div className="emaillist__setting">
        <div className="emaillist__settingleft">
            <IconButton>
                <ArrowBackIcon onClick={()=>history.push('/')}/>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

        <div className="emaillist__settingright">
            <p>1-50 of 10,222</p>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>
    </div>
    <div className="emaildetails_message">
        
    <div className="emaildetails__header">
        <div className="emaildetails__headerleft">
            <h4>{mail.subject}</h4>
            <IconButton>
                <LabelImportantIcon></LabelImportantIcon>
            </IconButton>
        </div>

        <div className="emaildetails__headerright">
        <IconButton>
                <PrintIcon />
            </IconButton>
            <IconButton>
                <LaunchIcon />
            </IconButton>
        </div>

    </div>

    <div className="emaildetails__middleheader">
        <div className="emaildetails__middleheaderleft">
            
            <IconButton>
                <Avatar/>
            </IconButton>
            <h4>{mail.name}</h4>
            <p>{mail.email}</p>
        </div>

        <div className="emaildetails__middleheaderright">
            <p>{mail.time}</p>
        <IconButton>
                <StarIcon />
            </IconButton>
            <IconButton>
                <ReplyIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

    </div>

    <div className="emaildetails_body">
        <p>{mail.message}</p>
    </div>
    </div>
    </div>
    )
}

export default Emaildetail
