import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./footer.scss";

class Header extends React.Component {
    render() {
        return (
                <div>
                    <footer className="text-center">
                        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
                            <span className="glyphicon glyphicon-chevron-up" />
                        </a><br /><br />
                        <p>Movie Tickets Online Booking <a href="" data-toggle="tooltip" title="">http://localhost:3000</a></p>
                    </footer>
                </div>
        );
    }
}
export default Header;
