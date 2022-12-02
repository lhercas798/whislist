import React, { useState } from "react";

const WhishList = ({ Data }) => {
  const [state, setState] = useState(Data);
  const elimina = (index) => {
    const tempProduct = [...state];
    tempProduct.splice(index, 1);
    setState(tempProduct);
  };

  return (
    <div>
      <h1>⭐WhisList⭐</h1>
      <div className="contenedor">
        {state.map((item, index) => {
          return (
            <>
              <div className="card">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`/img/${item.imagen}`}
                  alt=""
                />

                <div className="container">
                  <h1>{item.name}</h1>
                  <h2>Description: {item.description}</h2>
                  <h3>Stock: {item.stock ? "yes" : "No"}</h3>
                  <h3>Price: {item.price} eu</h3>
                  <button onClick={() => elimina(index)}>
                    {"Remove to WhishList"}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default WhishList;
