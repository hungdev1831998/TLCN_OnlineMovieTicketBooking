import React from 'react';
import './App.css';
import SignIn from "./Demo/Authentication/SignIn/SignIn";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
     
      
      <Router>
           <Route exact path='/' component={Header}/> 
           <Route exact path='/' component={Footer}/>
           <Route exact path='/signin' component={SignIn} />
      </Router>
    );
  }
}
export default App;
