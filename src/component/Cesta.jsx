import React from "react";

const Cesta = ({ DatosCompra,rest,Add,eliminacesta,total }) => {
 
 


  
 
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
              <span> Unit price: {item.price} eu </span>
               Units: <button onClick={()=>rest(item)}><div>-</div></button><button>{item.items}</button><button onClick={()=>Add(item)}><div > + </div></button>
              <span> to Pay : {num} eu</span>
              <button onClick={()=>eliminacesta(item,index)}><div > 🗑️ </div></button>
            </div>
          );
        })}
        <div>{total>0 ? `________________________________________________________Total to pay : ${total} eu`:'🎁Choose Your Gifth🎁'}</div>
      </div>
    </div>
  );
};
export default Cesta;
