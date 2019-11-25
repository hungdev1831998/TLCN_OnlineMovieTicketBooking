import React from 'react';
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return (
                <div>
                    
                    
                        <footer className="text-center">
                        <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
                            <span className="glyphicon glyphicon-chevron-up" />
                        </a><br /><br />
                        <p>Movie Tickets Online Booking </p>
                    </footer>
                </div>
        );
    }
}
export default Footer;
