import React, { useEffect } from "react";
import loadUser from '../Actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {

  const dispatch = useDispatch()
const auth = useSelector((state) => state.auth.isAuth);

  // useEffect(() => {
  //   if(auth){
  //   return dispatch(loadUser())
  //   }
   
  // }, [dispatch, auth]);



    return(
        <div className="text">
        <h2>Welcome Niepcers</h2>
        <p>
        Inspired by the inventor of photography "<b>Nicéphore Niépce</b>", this platform is an open space for sharing photos and breathtaking shots.
  
        </p>
        <h1> The World Through Your Eyes </h1>
      </div>
    )
}


export default Home;