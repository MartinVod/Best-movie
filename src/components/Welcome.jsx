import React from 'react';
import {Link} from 'react-router-dom';
import './../components/styles/Welcome.css';

export default function Welcome(props) {
    return (
        <ul className='navbar-nav'>
            <li className="nav-items"> Welcome {props.user.username} </li> 
            <li className='nav-items'><Link className='links' to='/userPanel' onClick={props.goMain}> go to my account </Link></li> 
            <li className='nav-items'><button onClick={()=>{props.logout(props.user)}} className="btn btn-danger">Log out</button></li>
        </ul>
    )
}
