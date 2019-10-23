import React from 'react';
import './App.css';
import SignIn from "./Demo/Authentication/SignIn/SignIn";
import Header from "./components/header/header";
import {BrowserRouter} from 'react-router-dom';
import SignUp from './Demo/Authentication/SignUp/SignUp';
// import CartContent from './components/cartcontent/cartcontent';
import Login from "./components/Login/Login";
// import './../../../assets/scss/style.scss';
// import "bootstrap/dist/css/bootstrap";
class App extends React.Component {

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //   </a>
      //   </header>
      
      <BrowserRouter>
            {/* <SignUp />  */}
         {/*  <SignIn/> */}
           <Header/> 
           {/* <CartContent/> */}
           {/* <Login/> */}
      </BrowserRouter>

      //  </div>
    );
  }
}
export default App;
