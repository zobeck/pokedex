import React from 'react';
import  '../../style/styles.css';
import { useState, } from 'react';
import Axios  from 'axios';


function AccesForm (){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

   

        const handleLogin = async () => {
             try {
              const response = await Axios.get(
                  "https://dummyjson.com/users/search?q=John",{
                    name :name,
                    password :password
                  }
                 ); 
                 console.log(response.data);
    
               } catch (error) {
                console.log(error);
               }
             };
            
             handleLogin();
         

    return (
        
         <div className='container'>
    <form className='ficha'>
       <div className='pokebola'>
       </div>

        <label>
            <p>Nombre</p>
            <input type={'text'}
            
             onChange={(e) => {
                setName(e.target.value)}}
             placeholder='Nombre de usuario'>
            </input>
        </label>

        <label>
            <p>Contraseña</p>
            <input type={'password'}
           
             onChange={(e) => {
                setPassword(e.target.value)}}
            placeholder="Ingresa tu contraseña">
            </input>
        </label>

        <button type='button'
        onClick={handleLogin}>
             Ingresa ahora
        </button>
        <p>¿No estás registrado?</p>
     
        
    </form>
    </div>
   
    )
};
export default AccesForm;