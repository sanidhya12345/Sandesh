import react from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton ,Avatar} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.css';
import {useSelector} from "react-redux";
import {selectuser} from "./features/userSlice"
import firebase from 'firebase/compat/app'
const Header = () => {
    const user=useSelector(selectuser);
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img
                    src="https://raw.githubusercontent.com/ravivarshney2000/practical11-fs/master/Sandesh-logos_transparent.png"
                    alt="gmail logo"
                />
            </div>
            <div className="header__middle">
                <div className="search_mail">
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input typr="text" placeholder="Search Mail"></input>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
                </div>
            </div>
            <div className="header__right">
            <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>
                <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>
            </div>
        </div>
    )
}

export default Header;