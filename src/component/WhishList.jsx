import React from "react";
import { Link } from "react-router-dom";
const WhishList = ({ Data, elimina }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>⭐WhisList⭐</h1>
      {Data.length>0 ?
      <div style={{ minHeight: "300px" }} className="contenedor">
       
        {Data.map((item, index) => {
          return (
            <>
              <div className="card-w">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`/img/${item.imagen}`}
                  alt=""
                />

                <div className="container">
                  <h2>{item.name}</h2>

                  <h3>Price: {item.price} eu</h3>
                  <button onClick={() => elimina(item, index)}>
                    {"🗑️Remove"}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>:<Link to="/" className="Link">
          <div style={{ textAlign: "center",fontSize:'50px' }}>💝Add Your Gift💝</div>
          </Link>}
    </div>
      
  );
};

export default WhishList;
