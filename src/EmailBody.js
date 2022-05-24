import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import './Emaillist.css'
import EmailListSetting from './EmailListSetting';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {openMessage} from './features/mailSlice';
function EmailBody({name,subject,message,email,time}) {
    const history=useHistory()
    const dispatch = useDispatch();
    const setMail=()=>{
        dispatch(openMessage({
            name,
            subject,
            message,
            email,
            time
        }))
        history.push('/mail')
    }
    return (
        <div className="emailbody" onClick={setMail}>
            <div className="emailbody__left">
                <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
                <StarBorderIcon></StarBorderIcon>
                <LabelOutlinedIcon />

                <h4>{name}</h4>
            </div>

            <div className="emailbody__middle">
                <div className="emailbody__middle__msg">
                    <p><b>{subject}</b> {message}
                    </p>
                </div>
            </div>

            <div className="emailbody__right">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailBody
