import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/home/G.png';
import B from './images/home/B.png';


class Billing extends Component {
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
          <div className="container-sm row"><div className="col-sm"><p>Returning Customer?<Link to={'/Login'} className="nav-link">Click here to login</Link></p></div></div>
          <div className="row container-sm">
            <div className="col-sm-6">
              
              <h4>Billing Details</h4>
              <hr/>
              <div className="row-form">
                <div className="col-sm">
                  <label>Firstname</label>
                  <input type="text" class="form-control" id="" placeholder="Anita" name="firstname"/>
                </div>
                <div className="col-sm">
                  <label>Lastname</label>
                  <input type="text" className="form-control" placeholder="Jones" name="lastname"/>
                </div>   
              </div>
                
              <div className="row-form">
                <div className="col-sm">
                  <label>Delivery address</label>
                  <input type="text" className="form-control" id="" placeholder="House number, street name, town/city" name="firstname"/>
                </div>
              </div>
              <div className="row-form">
                <div className="col-sm">
                  <label>Phone Number</label>
                  <input type="text" class="form-control" id="" placeholder="08134657877" name="number"/>
                </div>
                <div className="col-sm">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Jones" name="lastname"/>
                </div>   
              </div>

              <div class="form-group form-check">
                <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" required/>Create an Account
                </label>
              </div>
            </div>

            <div className="col-sm-6">
              
              <h4 >Payment method</h4>
              <div className="row-form-check" id="radio">
                <div className="col-sm" ><input type="radio" class="form-check-input" name="optradio"/><p>Direct bank transfer</p></div>
              </div>

              <p id="payp">Make your payments directly into our bank account.Please use your <br/>order ID as the reference.Your order will not be delivered until the fund<br/>is cleared in our account.</p>

              <div className="row-form-check" id="radio">
                <div className="col-sm" ><input type="radio" class="form-check-input" name="optradio"/><p>Direct bank transfer</p></div>
              </div>

              <div className="row-form-check" id="radio">
                <div className="col-sm" ><input type="radio" class="form-check-input" name="optradio"/><p>Direct bank transfer</p></div>
              </div>

              <div className="row"><div className="col-sm"><p>By placing this order you agree to <Link to={'/Login'} className="nav-link">the Terms and Conditions</Link></p></div></div>

              <div className="container pt-3"><Link to={'/FoodMenu'}><button className="btn btn-primary mb-2" id="menubtn">PLACE ORDER</button></Link></div>

            </div>
          </div>

        </div>
    );
  }
}

export default Billing;