import React, { useEffect, useState, useRef } from "react"; //3 HOOKS de React
import { getRandomColor } from "../../helpers/getRandomColor";

const RandomColor = () => {
  const [color, setColor] = useState("#bbb");

  const rectangle = useRef();

  const handleClick = () => {
    const newColor = getRandomColor();
    console.log(newColor);
    setColor(newColor)
  };


//1er hook: sirve para ejecutar algo una UNICA vez, cuando se renderice por primera vez
//Tambien sirve para ejecutarse cuando CAMBIA algo, una var por ej (en el arreglo)
// tiene dos parametros: 1 una func anonima, 2 un arreglo
useEffect(()=>{
//  document.getElementById('colorRectangle').style.backgroundColor = color
// pero esta es una mala practica en REACT => se usa un 2do HOOK useRef (y se lo mete en el div):
rectangle.current.style.backgroundColor = color
// rectangle.current ES LO MISMO QUE document.getElementById('id')

},[color])


  return (
    <div ref={rectangle}>
      <h1>El color seleccionado es {color} </h1>
      <button onClick={handleClick}>Cambiar color</button>
    </div>
  );
};

export default RandomColor;
