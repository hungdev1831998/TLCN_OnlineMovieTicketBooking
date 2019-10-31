import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouterWeb from './routes';


class App extends React.Component {
 
  render() {
    return (
      <Router>
         <Header/>
         <RouterWeb/>
         <Footer/>
      </Router>
    );
  }
}
export default App;
