import React from 'react';
import  '../../style/styles.css';


function AccesForm (){
    return (
        
         <div className='container'>
    <form className='ficha'>
       <div className='pokebola'>
       </div>

        <label>
            <p>Nombre</p>
            <input type={'text'}
            
            placeholder='Nombre de usuario'>
            </input>
        </label>

        <label>
            <p>Contraseña</p>
            <input type={'password'}
            placeholder="Ingresa tu contraseña">
            </input>
        </label>

        <button type='send'>
             Ingresa ahora
        </button>
        <p>¿No estás registrado? </p>
     
        
    </form>
    </div>
   
    )
};
export default AccesForm;