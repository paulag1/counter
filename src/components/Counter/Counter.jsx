import React, { useEffect, useState } from "react";

const Counter = () => {
  //let valorContador = 0;
  //para que se vaya cambiando el valor que muestra en pantalla se ultiliza HOOK (es una desestructuracion)
  //todos los HOOKS empiezan con use(valor inicial)
  //el primer parametro es el nombre que yo le ponga a mi variable
  //el 2do parametro es la funcion para cambiar valor:  setNombreVariable
  const [valorContador, setValorContador] = useState(0);

  const handleClick = (accion) => {
    switch (accion) {
      case "sumar":
        setValorContador(valorContador + 1);
        break;
      case "restar":
        setValorContador(valorContador - 1);
        break;
      case "reset":
        setValorContador(0);
        break;
      default:
        break;
    }

//es lo mismo que usar un if:
    /*if (accion === "sumar") {
      setValorContador(valorContador + 1); //esto le indica a mi pagina que debe recargarse
    } else if (accion === "restar") {
      setValorContador(valorContador - 1); //esto le indica a mi pagina que debe recargarse
    } else if (accion === "reset") {
      setValorContador(0); //esto le indica a mi pagina que debe recargarse
    }*/

  };


  //con este useEffect van a coincidir los dos valores
  useEffect(()=>{
    console.log(valorContador)
  },[valorContador])



  return (
    <>
      <h1>{valorContador}</h1>
      <button onClick={()=>handleClick('sumar')}>+</button> 
      <button onClick={()=>handleClick('restar')}>-</button>
      <button onClick={()=>handleClick('reset')}>Reset</button>
    </>
  );
};
//para que no sea un loop infinito le debo poner la funcion anonima ()=>  //es una funcion que llama a otra funcion
export default Counter;
