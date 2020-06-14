import React, { Component } from 'react';
import { Plus } from 'react-bootstrap-icons';
import './styles.css';
import { Link } from 'react-router-dom';
import G from './images/menu/G.png';
import B from './images/menu/B.png';
import drink1 from './images/menu/drink1.png';
import drink2 from './images/menu/drink2.png';
import drink3 from './images/menu/drink3.png';
import food1 from './images/menu/food1.png';
import food2 from './images/menu/food2.png';
import food3 from './images/menu/food3.png';
import chat from './images/menu/chat.png';


class FoodMenu extends Component {
  render() {
    return (
      <div>

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

          <div className="container-sm">
            <div className="row">
              <div className="col-sm"><img src={food1}alt=""/>
                <h1 className="description">Cat Fish Barbecue</h1>
              </div>
              <Plus className="plus"></Plus>
              <div className="col-sm"><img src={drink1} alt=""/>
                <h1 className="description">Mix fruit juice</h1>
              </div>
            </div>
            <hr/>
            <div className="container mb-4 mt-4 text-center">
              <h2 id="price">N4,000.00</h2>
              <p id="description">Fully spiced  cat fish with mouth-watering and appealing delicacies</p>
            </div>

            <div className="row">
              <div className="col-sm"><img src={food2} alt=""/>
                <h1 className="description">Tilapia Fish Barbecue</h1>
              </div>
              <Plus className="plus"></Plus>
              <div className="col-sm"><img src={drink2} alt=""/>
                <h1 className="description">Mix fruit juice</h1>
              </div>
            </div>
            <hr/>
            <div className="container mb-4 mt-4 text-center">
              <h2 id="price">N5,000.00</h2>
              <p id="description">Fully spiced  cat fish with mouth-watering and appealing delicacies</p>
            </div>

            <div className="row">
              <div className="col-sm"><img src={food3} alt=""/>
                <h1 className="description">Croaker Fish Barbecue</h1>
              </div>
              <Plus className="plus"></Plus>
              <div className="col-sm"><img src={drink3} alt=""/>
                <h1 className="description">Mix fruit juice</h1>
              </div>
            </div>
            <hr/>
            <div className="container mb-4 mt-4 text-center">
              <h2 id="price">N6,500.00</h2>
              <p id="description">Fully spiced  cat fish with mouth-watering and appealing delicacies</p>
            </div>
            <Link to={'/Chat'}>><img src={chat}alt=""/></Link>
          </div>
      </div>
    );
  }
}

export default FoodMenu;