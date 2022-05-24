import react ,{useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Emaillist from './Emaillist';
import './index.css';
import Compose from './Compose';
import { useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice';
import Emaildetail from'./Emaildetail';
import Login from './Login';
import {selectuser} from './features/userSlice'
import {authent} from './Firebase';
import {useDispatch} from "react-redux";
import {signin,signout} from "./features/userSlice";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Switch, Route } from "react-router-dom";
function App() {
  const isMessageOpen=useSelector(selectSendMessageIsOpen)
  const dispatch=useDispatch()
  const user=useSelector(selectuser);

  useEffect(()=>{
    authent.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
          displayName:user.displayName,
          photoURL:user.photoURL,
          email:user.email
      }));
      }
      else{
        dispatch(signout())
      }
    })
  },[])
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
      <Header />
      <div className="app__body">
      <Sidebar/>
      <Switch>
          <Route exact path="/">
          <Emaillist></Emaillist>
          </Route>

          <Route path="/mail">
          <Emaildetail></Emaildetail>
          </Route>

        </Switch>
  
      
      </div>
      {
        isMessageOpen && <Compose/>
      }
      
    </div>
      )}
    </Router>
  );
}

export default App;
