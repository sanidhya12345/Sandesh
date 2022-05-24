import React,{useState,useEffect} from 'react'
import EmailBody from './EmailBody';
import './Emaillist.css';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';
import {db} from './Firebase';
function Emaillist() {

    const [emails,setEmails]=useState([]);

    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setEmails(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()

            })));
        })
    },[])
    return (
        <div className="emaillist">
            <EmailListSetting />
            <EmailType></EmailType>
            {emails.map(({id,data})=>{
                return <EmailBody key={id} name={data.fromName} email={data.from} subject={data.subject} message= {data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}></EmailBody>
            })}
            
            </div>
            )
}

export default Emaillist
