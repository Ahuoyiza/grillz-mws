import React, { Component } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/home/G.png';
import B from './images/home/B.png';

class Login extends Component {
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

        <div className="container-fluid text-center mt-5">
          <p>New Customer?<Link to={'/Billing'} className="nav-link">Click here to Sign Up</Link></p>
        </div>

        <div className="container-sm mt-4 mb-4" id="logincontainer">
          <div className="text-center mt-4 mb-4">If you have shopped with us before, please enter your details below. If you are a new<br/>
              customer, please proceed to the Billing section.
          </div>

          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col">
                  <label>Username or email</label>
                  <input type="text" class="form-control" id="" placeholder="" name="username"/>
                </div>
              </div>

              <div className="row container mt-4">
                <div className="col-sm" id="check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input " value=""/>Remember Me
                </label>
                </div>
                <div className="col-sm container" id="button">
                <Link to={'/'}><button className="btn btn-primary mb-2" id="menubtn">PLACE ORDER</button></Link>
                </div>
              </div>
            </div>

            <div className="col-sm ">
              <div className="row">
                <div className="col">
                  <label>Password</label>
                  <input type="password" class="form-control" id="" placeholder="" name="password"/>
                </div>
              </div>
              <div className="container mt-4">Lost your password?</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Login;