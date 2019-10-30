import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
     
      
      <Router>
           <Route exact path='/' component={Header}/> 
           <Route exact path='/' component={Footer}/>
           <Route exact path='/login' component={Login} />
           <Route exact path='/Register' component={Register} />
      </Router>
    );
  }
}
export default App;
