import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/menu/G.png';
import B from './images/menu/B.png';
import address from './images/contact/address.png';
import clock from './images/contact/clock.png';
import phone from './images/contact/phone.png';
class Contact extends Component {
  render() {
    return (
        <div className="container-fluid-sm">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-right sticky-top" id="nav2">
          <Link to={'/'} className="navbar-brand"> 
          <img src={G} alt="G"></img>
          <img src={B} alt="B"></img>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto ">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/Contact'} className="nav-link">Contact </Link></li>
          <li><Link to={'/FoodMenu'} className="nav-link">FoodMenu </Link></li>
          <li><Link to={'/Login'} className="nav-link">Login</Link></li>
          </ul>
          </div>
        </nav>
          <div className="container-fluid-sm contact text-center">
              <div><h1 id="sail">Find Us...</h1></div>
              <div>
                <p>To get a faster response<br/>
                  usually withing 5mins,<br/>
                  please, kindly talk to our<br/>
                  friendly customer service <br/>
                  representatives through our<br/>
                  Live chat.
                </p>
              </div>
              <div className="row md-4 grid">
                <div className="col-sm-4">
                  <img src={address} alt=""/>
                  <h2 id="sail">Address</h2>
                  <p>25 Muhammadu Buhari street,
                    off freedom way,
                    Wuse 11,Abuja, Nigeria</p>
                </div>
                <div className="col-sm-4">
                  <img src={clock} alt=""/>
                  <h2 id="sail">Opening Hours</h2>
                  <p>Monday - Friday<br/> 8.30am - 10.30pm</p><p>Saturday - Sunday <br/>12am - 11.30pm</p>
                </div>
                <div className="col-sm-4">
                  <img src={phone} alt=""/>
                  <h2 id="sail">Phone Numbers</h2>
                  <p>0903 999 9933</p><p>0806 690 0900</p>
                </div>
              </div>
          </div>
        </div>
    );
  }
}

export default Contact;