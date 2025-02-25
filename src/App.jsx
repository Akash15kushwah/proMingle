import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './component/Register'
import Home from './component/homepage/Home'
import { useNavigate } from "react-router-dom";
import { userLogin } from "../src/component/services/Api";
import Akash from './component/Akash'
import Login from './component/Login'
import { jwtDecode } from 'jwt-decode'
// import PrLogin from './component/PrLogin'
function App() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        const res = await userLogin(username, password)
        console.log(res.accessToken)
              if (res.accessToken) {
                localStorage.setItem("token", res.accessToken );

                const decodeToken = jwtDecode(res.accessToken)
                console.log(": ",decodeToken);
                console.log("username: ",decodeToken.unique_name)
                setName(decodeToken.unique_name)
                // console.log("email: ", decodeToken.email);
                navigate('/home')
              }else {
                alert("please check the username and password")
      
               }
    } catch (error) {
        alert("Error during login. Please try again.");
    }
};

  return (
    <>
    <Routes>
      <Route path='/register' element={<Register setOpen={setOpen} />}/>
      <Route path='/login' element={<Login  handleSubmit={handleSubmit}  setUsername={setUsername} setPassword={setPassword}/>}/>
      <Route path='/home' element={<Home name={name} />}/>
      {/* <Route path='/prlogin' element={<PrLogin  />}/> */}
      <Route path='/akash' element={<Akash />}/>
    </Routes>
    </>
  )
}

export default App
