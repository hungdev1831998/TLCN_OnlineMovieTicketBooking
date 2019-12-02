import React from 'react';		
import {Route,Switch} from 'react-router-dom';	
import Menu from './components/Menu/Menu';
import AddUser from './components/ManageUser/AddUser/AddUser';
import Header from './components/Header/Header';
import UpdateUser from './components/ManageUser/UpdateUser/UpdateUser';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import ReadMail from './components/MailBox/ReadMail/ReadMail';
import ComposeMail from './components/MailBox/Compose/Compose';
import InboxMail from './components/MailBox/MailBox/Inbox';
import StatisticalRevenue from './components/StatisticalRevenue/StatisticalRevenue';
import AllUsers from './components/ManageUser/AllUsers/AllUsers';
import DetailUser from './components/ManageUser/DetailUser/DetailUser';
import AllFilms from './components/ManageFilm/AllFilms/AllFilms';
import AddFilm from './components/ManageFilm/AddFilm/AddFilm';
import UpdateFilm from './components/ManageFilm/UpdateFilm/UpdateFilm';

class RouterWeb extends React.Component {	

    render() {	
        return (	
            <Switch>	
                <Route exact path='/' component={Menu}/>
                <Route exact path='/adduser' component={AddUser}/>
                <Route exact path='/updateuser' component={UpdateUser}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/composemail' component={ComposeMail}/>
                <Route exact path='/readmail' component={ReadMail}/>
                <Route exact path='/inboxmail' component={InboxMail}/>
                <Route exact path='/statisticalRevenue' component={StatisticalRevenue}/>
                <Route exact path='/allusers' component={AllUsers}/>
                {/* <Route exact path='/detailuser' component={DetailUser}/> */}
                <Route exact path='/allfilms' component={AllFilms}/>
                <Route exact path='/addfilm' component={AddFilm}/>
                <Route exact path='/updatefilm' component={UpdateFilm}/>
            </Switch>	

        );	
    }	
}	
export default RouterWeb;