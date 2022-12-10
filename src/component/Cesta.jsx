import React from "react";

const Cesta = ({ DatosCompra }) => {
 
 


  
 
  function myFunc(item,index) {
    return (<div>{item.price*item.items}</div>);}
  return (
    <div>
    
  
      <div className="contenedorCesta">
        {DatosCompra.map((item, index) => {
          const num = item.price * item.items;
          
          return (
            <div key={index} className="contenedorCesta">
              <img
                style={{ width: "50px", height: "50px" }}
                src={`/img/${item.imagen}`}
                alt=""
              />
              <span> Units: {item.items}</span>
              <span> Unit price: {item.price} eu </span>
              <span> to Pay : {num} eu</span>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cesta;
