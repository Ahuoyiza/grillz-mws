import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import FoodMenu from './components/FoodMenu.js';
import Billing from './components/Billing.js';
import SignUp from './components/Contact.js';
import Login from './components/Login.js';
import Chat from './components/Chat.js';


class App extends Component {

  render(){

    return(
      <Router>
      <div>
      
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Contact' component={Contact} />
            <Route path='/FoodMenu' component={FoodMenu} />
            <Route path='/Billing' component={Billing} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/Login' component={Login} />
            <Route path='/About' component={About} />
            <Route path='/Chat' component={Chat} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
