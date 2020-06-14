import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/home/G.png';
import B from './images/home/B.png';

class Home extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-right sticky-top" id="nav">
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
        <div className="container-fluid home-image" id="bg">
          <div className="container" id="textcontainer"><h3 id="welcome">WELCOME TO</h3>
          <h1 id="grill">GRILLZ</h1><h1 id="blendz"> N' BLENDZ</h1></div>
          <div className="container pt-3"><Link to={'/FoodMenu'}><button className="btn btn-primary mb-2" id="menubtn">VIEW MENU</button></Link>
          </div>
        </div>

        <div className="container mt-5 text-center">
          <h1 id="maintag">THREE FLEXIBLE WAYS TO ORDER</h1>
          <div className="row mt-4">
            <div className="col-sm-4">
              <i>through phone</i>
              <p id="call">Simply call</p>
              <p id="no">0806 699 9996</p>
              <p id="content">Our customer service will attend <br/>to you promptly</p>
              <button className="btn btn-primary mb-2" id="menubtn">CALL NOW</button>
            </div>
            <div className="col-sm-4">
              <i>order online</i>
              <p id="content">Choose your favourite combo. Provide <br/>
                 address. Pay online or cash on Delivery. Relax<br/>
                 and your delicious combo is at your doorestep</p>
                 <Link to={'/Billing'}><button className="btn btn-primary mb-2" id="menubtn">ORDER NOW</button></Link>
            </div>
            <div className="col-sm-4">
              <i>through whatsapp</i>
              <p id="call">Send whatsapp dm</p>
              <p id="no">0806 699 9996</p>
              <p id="content">Our customer service will attend <br/>to you promptly</p>
              <Link to={'/Chat'}><button className="btn btn-primary mb-2" id="menubtn">CHAT NOW</button></Link>
            </div>
            
          
          </div>
        </div>
      </div>
    );
  }
}

export default Home;