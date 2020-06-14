import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/home/Gcat.png';
import B from './images/home/Bcat.png';
import X from './images/cat/x.png';


class Chat extends Component {
  render() {
    return (
        <div >
        <div className="container-fluid chat-top mb-4">
             <Link to={'/'} className="navbar-brand img-center"> 
                <img src={G} alt="G"></img>
                <img src={B} alt="B"></img>
          </Link>
          <div className="row mb-3">
            <div className="col" id="online">Online</div>
            <div className="col text-right"><img src={X} alt="B"></img></div>
         </div>
          <div className="text-center mb-4" id="toptext"><p>Please fill out the form below to start chatting with<br/>
            the next available agent</p></div>
         </div>
            <div className="container-sm formwrap mt-5">
            <div className="form" action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="*Name" id=""/>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="*Phone" id=" "/>
                </div>
                <div className="form-group form-check">
                    <input type="email" className="form-control" placeholder="*Email" id="email"/>
                </div>
                <div className="form-group form-check">
                    <input type="text-area" className="form-control" rows="5" placeholder="*Enquiry" id=""/>
                </div>
                <button type="submit" className="btn btn-primary" id="menubtn">Start Chat</button>
            </div>
            </div>
        </div>
    );
  }
}

export default Chat;