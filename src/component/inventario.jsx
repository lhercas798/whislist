import React from "react";

const Inventario = ({ inicial, deseo, elimina,addCest }) => {
  return (
    <div className="contenedor">
      {inicial.map((item, index) => {
        return (
          <div key={index} className="card">
            <img src={`/img/${item.imagen}`} alt="" />
            <span className='icono'onClick={
                  item.whish ? () => elimina(item, index) : () => deseo(index)
                }>{item.whish ? "💝" : "🖤"}</span>
            <div className="container">
              <h1>🎁Felices Fiestas🎁</h1>
              <h1>{item.name}</h1>
              <h2>Description: {item.description}</h2>
              <h3>Stock: {item.stock ? "yes" : "No"}</h3>
              <h3>Price: {item.price} eu</h3>

              <button
                onClick={()=>addCest(item,index)}
              >
                 Add to Cart🛒
              </button>
              {/* <button
                onClick={
                  item.whish ? () => elimina(item, index) : () => deseo(index)
                }
              >
                {item.whish ? "🖤" : "💝"}
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Inventario;