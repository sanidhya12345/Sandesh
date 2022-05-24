import React ,{useState}from 'react'
import './Compose.css';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch} from 'react-redux';
import { closeSendMessage} from './features/mailSlice';
import {db} from './Firebase';
import firebase from 'firebase/compat/app'
import {useSelector} from "react-redux";
import {selectuser} from "./features/userSlice";
function Compose() {
    const dispatch=useDispatch();
    const [to,setTo]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");
    const user=useSelector(selectuser);
    const formSubmit=(e)=>{
        e.preventDefault();
        if(to===""){
            alert("Email is required");
        }
        if(subject===""){
            alert("Sucject is required");
        }
        if(message===""){
            alert("Message is required");
        }

        db.collection("emails").add({
            to,
            from:user.email,
            fromName:user.displayName,
            subject,
           message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });
        setTo("");
        setSubject("");
        setMessage("");
        alert("Email Sent Successfully");
        dispatch(closeSendMessage());
    }
    return (
        <div className="compose">
            <div className="compose__header">
                <div className="compose__header__left">
                    <span>New Message</span>
                </div>
                <div className="compose__header__right">
                    <RemoveIcon/>
                    <HeightIcon/>
                    <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
                </div>
            </div>
            <form onSubmit={formSubmit}>
            <div className="compose__body">
                <div className="compose__bodyform">
                    <input type="email" placeholder="Recepients" value={to} onChange={(e)=>setTo(e.target.value)}></input>
                    <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
                    <textarea rows="20" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

                </div>
            </div>

            <div className="compose__footer">
            <div className="compose__footerleft">
                <button type="submit">
                    Send <ArrowDropDownIcon />
                </button>
            </div>
            <div className="compose__footerright">
                <FormatColorTextIcon/>
                <AttachFileIcon/>
                <LinkIcon/>
                <InsertEmoticonIcon/>
                <NoteAddIcon/>
                <PhotoIcon></PhotoIcon>
                <PhonelinkLockIcon/>
                <CreateIcon/>
                <MoreVertIcon/>
                <DeleteIcon></DeleteIcon>
            </div>
            </div>
            </form>
        </div>
    )
}

export default Compose
