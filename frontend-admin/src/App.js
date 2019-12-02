import React from 'react';


import { BrowserRouter as Router } from 'react-router-dom';
import RouterWeb from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Menu />
          <RouterWeb />
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
