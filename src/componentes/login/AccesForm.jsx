import React from "react";
import "../../style/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

function AccesForm() {
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
    console.log(name, password);
    setName("");
    setPassword("");
    setSuccess(true);
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
