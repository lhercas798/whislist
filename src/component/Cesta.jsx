import React from "react";

const Cesta = ({ DatosCompra }) => {
 
 
let num=50;

  
 
  function myFunc(item,index,num) {
    return (<div>{item.price*item.items}</div>);}
  return (
    <div>
    <span>{'mm,'+ num}</span>
  
      <div className="contenedor">
        {DatosCompra.map((item, index) => {
          const num = item.price * item.items;
          
          return (
            <div key={index} className="card">
              <img
                style={{ width: "50px", height: "50px" }}
                src={`/img/${item.imagen}`}
                alt=""
              />
              <span> Cantidad: {item.items}</span>
              <span> Precio Unidad: {item.price} eu </span>
              <span> A Pagar : {num} eu</span>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cesta;
