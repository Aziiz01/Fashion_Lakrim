import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../pages/Style.css"
const Add = () => {
    const [user, setUser]= useState({
        nom:"",
        prenom:"",
        email:"",
        pwd:"",
        num_tel:null,
        date:"",
    });
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setUser(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8000/users", user);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
    console.log(user);



  return (
    <div className='form'>
        <h1>Ajouter un utilisateur</h1>
        <input type="text" placeholder='nom' onChange={handleChange} name='nom'/> 
        <input type="text" placeholder='prenom'onChange={handleChange} name='prenom'/> 
        <input type="email" placeholder='email'onChange={handleChange} name='email'/> 
        <input type="password" placeholder='pwd'onChange={handleChange} name='pwd'/> 
        <input type="tel" placeholder='num_tel'onChange={handleChange} name='num_tel'/>
        <input type="date" placeholder='date' onChange={handleChange} name='date'/> 

        <button onClick={handleClick}>Ajouter</button>
    </div>
  )
}

export default Add