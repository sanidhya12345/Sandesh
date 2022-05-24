import React from 'react'
import './login.css';
import {authent,provider} from './Firebase'
import {useDispatch} from "react-redux";
import {signin} from './features/userSlice';

function Login() {

    const dispatch=useDispatch()
    const login=()=>{
        authent.signInWithPopup(provider).then(({user})=>{
            dispatch(signin({
                displayName:user.displayName,
                photoURL:user.photoURL,
                email:user.email
            }));
        }).catch(error=>{
            alert(error);
        })
    }
    return (
        <div className="loginwrapper" >
            <div className="login">
                <img src="https://raw.githubusercontent.com/ravivarshney2000/practical11-fs/master/Sandesh-logos_transparent.png"></img>
                
                <button className="gmail_login" onClick={login}>Login with Sandesh</button>
                </div>
        </div>
    )
}

export default Login 
