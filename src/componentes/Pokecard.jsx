import React from "react";
import "../style/styles.css";
import axios from "axios";
import { useEffect , useState} from "react";
//antes de comenzar no olvides instalar e importar axios
// npx i axios o npm i axios


//-Paso #1: Declaramos el componente funcional
function Pokecard() {
    const [data,setData] = useState([])
  // Paso #2: Con useEffect estamos haciendo la conexion con la API
  //Recuerda utilizar use effect justo después de abrir las llaves
  //de tu componente funcional, queda ubicado justo entre las llaves de apertura
  //y el return de la funcion.
     useEffect(()=>{

        const getPokemon = async () => {
             try {
              const respuesta = await axios.get(
                  "https://pokeapi.co/api/v2/pokemon/ditto"
                 ); 
                 console.log(respuesta);
    
               } catch (error) {
                console.log(error);
               }
             };
           getPokemon();

            
     },[])
//Este es el return de nuestro componente funcional
     return(
    <div className="container">
      <h1>¿Quién es ese pokemon?</h1>
  <p value={data.name}></p>
    </div>
     );
}

export default Pokecard;
