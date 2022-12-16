import React from "react";
import Button from "@mui/material/Button";

const Search = ({ Inicial, Deseo, Elimina, AddCest }) => {
  return (
    <div className="contenedor">
      {Inicial.map((item, index) => {
        return (
          <div key={index} className="card">
            <img src={`/img/${item.imagen}`} alt="" />
            <span
              className="icono"
              onClick={
                item.whish ? () => Elimina(item, index) : () => Deseo(item,index)
              }
            >
              {item.whish ? "💝" : "🖤"}
            </span>
            <div className="container">
              <h1>🎁Felices Fiestas🎁</h1>
              <h1>{item.name}</h1>
              <h2>Description: {item.description}</h2>
              <h3>Stock: {item.stock ? "Yes" : <span style={{color:'red', fontSize:'15px'}}>No</span>}</h3>
              <h3>Price: {item.price} eu</h3>

             {item.stock ? (<Button variant="contained" onClick={() => AddCest(item, index)}>
                Add to Cart🛒
                <span style={{ fontSize: "11px" }}>
                  {item.items > 0 ? item.items : null} 
                </span>
              </Button>):<Button variant="contained" disabled>'No stock'</Button> }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
