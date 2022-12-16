import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
const WhishList = ({ Data, elimina,toCest }) => {
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
                  <Button variant="contained" size='small'onClick={() => elimina(item, index)}>
                    {"🗑️Remove"}
                  </Button>
                  {item.stock ? (<Button variant="contained" onClick={() => toCest(item, index)}>
                Add to Cart🛒
                <span style={{ fontSize: "11px" }}>
                  {item.items > 0 ? item.items : null} 
                </span>
              </Button>):<Button variant="contained" disabled>'No stock'</Button> }
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
