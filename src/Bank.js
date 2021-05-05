import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import DemonDays from "./DemonDays";
import PlasticBeach from "./PlasticBeach";
import Humanz from "./Humanz";

class Bank extends Component {
    render() {
        return(
            <HashRouter>
                <div className="container">
                    <h1>Typing with Gorillaz</h1>
                    <h3>Type out excerpts of Gorillaz Albums Wikipedia pages.</h3>
                    <h5>Why so challenging? Laziness!</h5>
                    <h6>There's no way this project even gets finished, really.</h6>
                    <ul className="header">
                        <li><NavLink to="/demonDays">Demon Days</NavLink></li>
                        <li><NavLink to="/plasticBeach">Plastic Beach</NavLink></li>
                        <li><NavLink to="/humanz">Humanz</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/demonDays" component={DemonDays}/>
                        <Route path="/plasticBeach" component={PlasticBeach}/>
                        <Route path="/humanz" component={Humanz}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
};

export default Bank;