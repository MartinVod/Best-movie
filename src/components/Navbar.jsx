import React from 'react';
import './../components/styles/Navbar.css';
import Login from './Log';
import Welcome from './Welcome';

export default function Navbar(props) {


    
    return (
            <nav className="navbar navbar-light bg-light">
                {props.user === undefined ? <Login login={props.login} goMain={props.goMain}/> :<Welcome user={props.user} logout={props.logout} goMain={props.goMain}/>}
            </nav>
    )
}
