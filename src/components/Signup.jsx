import React,{useState} from 'react'
import './../components/styles/Signup.css';

export default function Signup(props) {

    const [credentials, setCredentials] = useState({username: '',password:'', admin: undefined});

    function handleChange(event) {
        const { name, value } = event.target;
        
        setCredentials(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }


    const checkDetails = (details) => {
        if(details.username.length === 0){
            alert('please enter your name');
        }else if(details.password.length === 0){
            alert('please enter your password');
        }else if(details.admin === undefined){
            alert('please choose if you want to be admin');
        }else{
           details.admin = ad => ad === 'true' ? true : false
            props.addUser(details);
        }
    }

    return (
<div className="form-bg">
    <div className="container">
    <h1>Register as a new user</h1>
        <div className="row">
            <div className="col-md-offset-2 col-md-8">
                <div className="register-form">
                    <div className="form-content form-horizontal">
                        <div className="form-group">
                            <div className="col-md-6 col-sm-12">
                                <label className=" control-label">Name</label>
                                <input className="form-control" name='username' type="text" onChange={handleChange} />
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className=" control-label">Password</label>
                                <input className="form-control" name='password' type="password" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div clclassNameass="radio">
                                <div className="col-md-6 col-sm-12">
                                    <label>Want to be admin?</label>
                                    <div className="form-group">
                                        <input id="radio-1" name="admin" value="true" type="radio" onChange={handleChange}/>
                                        <label htmlFor="radio-1" className="radio-label">Yes</label>
                                        <input id="radio-2" name="admin" value="false" type="radio" />
                                        <label htmlFor="radio-2" className="radio-label">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-9 col-md-3">
                                <button type="submit" className="btn btn-default btnReg" onClick={()=>{checkDetails(credentials)}}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
