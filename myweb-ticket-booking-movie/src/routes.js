import React from 'react';	
import './App.css';	
import Login from "./components/Login/Login";	
import Register from "./components/Register/Register";	
import {Route,Switch} from 'react-router-dom';	
import ContentWeb from './components/contentweb/contentweb';
import BookTicket from './components/bookticket/bookticket';
import Datve from './components/BookSeat/BookSeat';	
class RouterWeb extends React.Component {	

    render() {	
        return (	
            <Switch>	
                <Route exact path='/' component={ContentWeb} />	
                <Route exact path='/login' component={Login} />	
                <Route exact path="/reset" component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path="/resetRegister" component={Register} />	
                <Route exact path="/bookticket" component={BookTicket} />	
                <Route exact path="/bookseat" component={Datve}/>
            </Switch>	

        );	
    }	
}	
export default RouterWeb;