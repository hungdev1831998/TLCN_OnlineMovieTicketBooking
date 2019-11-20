import React from 'react';	
import './App.css';	
import Login from "./components/Login/Login";	
import Register from "./components/Register/Register";	
import {Route,Switch} from 'react-router-dom';	
import ContentWeb from './components/contentweb/contentweb';
import BookSeat from './components/BookSeat/BookSeat';
import InfoUser from './components/InfoUser/InfoUser';
import Ticket from './components/Ticket/Ticket';
class RouterWeb extends React.Component {	

    render() {	
        return (	
            <Switch>	
                <Route exact path='/' component={ContentWeb} />	
                <Route exact path='/login' component={Login} />	
                <Route exact path="/reset" component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path="/resetRegister" component={Register} />	
                <Route path="/bookseat" component={BookSeat}/>
                <Route path="/infoUser" component={InfoUser}/>
                <Route path="/ticket" component={Ticket}/>
            </Switch>	

        );	
    }	
}	
export default RouterWeb;