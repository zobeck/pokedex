import React from "react";
import "../../style/styles.css";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from "axios";

function AccesForm() {
   
    const {setAuth} = useContext(AuthContext);
   
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect =
    (() => {
      setErrormsg("");
    },
    [name, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Promesa
    try {
       const response = await axios.post("Endpoint", 
       JSON.stringify({name, password}),
    {
         headers:{"Content-Type": "aplication/json"},
         withCredentials: false
    }
       )
      console.log(JSON.stringify(response?.data));
      //Set access token y roles va en esta parte, para cuando  autentifiquemos
      setName("");
      setPassword("");
      setSuccess(true);
      
    } catch (error) {
      if (!error?.response){
        setErrormsg("hay un error");
      } else if (error.response?.status=== 400){
        setErrormsg("Nombre o contraseña no encontrados")
      }else if (error.response?.status=== 404){
        setErrormsg("Imposible conectar con servidor")
      }
      
    }
   
    
  };

  return (
    <>
      {success? (
        <section className="container">
           <div className="exitomsg"> <h1>Ingresaste con exito</h1></div>
        </section>
      ):(
    <div className="container">
      <form className="ficha" onSubmit={handleSubmit}>
        <div className="pokebola"></div>

        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />

        <button type="submit">Ingresa ahora</button>
      </form>
    </div>
      )}
    </>
  );
}
export default AccesForm;
