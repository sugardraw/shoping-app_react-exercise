import React, { Component } from "react";



import { Link } from 'react-router-dom';


class Navigation extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark p-2">
                    <a href="#" className="text-white  ml-3">
                        <span className="text-white">products</span>
                        <span className="badge badge-pill badge-light ml-3 p-2">
                        
                        </span>
                    </a>
                    <div className="d-flex">
                        <Link className="p-3 text-light" to="/">Home</Link>
                        <Link className="p-3 text-light" to="/go-to-pay">go to pay</Link>
                    </div>

                </nav>
            </div>

        )
    }

}

export default Navigation;
