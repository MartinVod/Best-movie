import React,{useState} from 'react'
import './../components/styles/Log.css';
import {Link} from 'react-router-dom';

export default function Log(props) {

    const [credentials, setCredentials] = useState({username: '',password: ''});

    function handleChange(event) {
        const { name, value } = event.target;
        
        setCredentials(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    return (
        <form className="form-inline">
        <span className="navbar-text"> Hello {} </span>
            <input className="form-control mr-sm-2" type="text" name='username' placeholder="User name" value={credentials.username} onChange={handleChange}/>
            <input className="form-control mr-sm-2" type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>{props.login(credentials.username, credentials.password)}}>Log in</button>
            <span className='navbar-text'>Or</span>
            
            <button className="btn btn-outline-primary my-2 my-sm-0 " type="submit" onClick={props.goMain}><Link to='/register' className='links links-hover' >Sign up</Link></button>
        </form>
    )
}
