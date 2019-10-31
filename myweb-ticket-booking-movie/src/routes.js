import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Route,Switch} from 'react-router-dom';
import ContentWeb from './components/contentweb/contentweb';
class RouterWeb extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={ContentWeb} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/Register' component={Register} />
            </Switch>

        );
    }
}
export default RouterWeb;

