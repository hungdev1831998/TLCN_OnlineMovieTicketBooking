import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router } from 'react-router-dom';
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
