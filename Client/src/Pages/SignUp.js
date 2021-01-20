import React, { useState,useEffect } from "react";
import {useDispatch, useSelector,} from 'react-redux';
import {registerUser,loadUser} from '../Actions/authActions';


function SignUp({history}) {
  const [info, setInfo] = useState({
    Name: "",
    UserName: "",
    Country: "",
    Email: "",
    Password: "",
  });

const dispatch = useDispatch()
const auth = useSelector((state) => state.auth);

useEffect(()=> {
if (auth.isAuth){
history.push("/");
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [auth.isAuth]);

const handleChange = e => {
  setInfo({...info, [e.target.name] : e.target.value})
}
const registerNow = e => {
  e.preventDefault()
  dispatch(registerUser(info));
  
}



  return (
    <form onSubmit={registerNow} className="signUp">
      <div>
        <label>Name</label>
        <input  type="text" name="Name" onChange={handleChange}/>
      </div>

      <div>
        <label>UserName</label>
        <input type="text" name="UserName" onChange={handleChange}/>
      </div>

      <div>
        <label>Country</label>
        <input type="text" name="Country" onChange={handleChange}/>
      </div>

      <div>
        <label>Email</label>
        <input type="text" name="Email" onChange={handleChange}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="Password" onChange={handleChange}/>
      </div>
      <button type="submit" class="btn btn-secondary">Register</button>
    </form>
  );
}

export default SignUp;
