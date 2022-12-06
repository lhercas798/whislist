import React from "react";

const WhishList = ({ Data, elimina }) => {
  return (
    <div>
      <h1>⭐WhisList⭐</h1>
      <div style={{minHeight:'300px'}}className="contenedor">
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
                  {/* <h2>Description: {item.description}</h2> */}

                  <h3>Price: {item.price} eu</h3>
                  <button onClick={() => elimina(item, index)}>
                    {"🗑️Remove"}
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
