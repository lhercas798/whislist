import React from "react";

const Cesta = ({ DatosCompra, rest, Add, eliminacesta, total }) => {
  return (
    <div className="FondoCesta">
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
              <span className="total"> Unit price: {item.price} eu </span>
              <button onClick={() => rest(item)}>
                <div>-</div>
              </button>
              <button className="cestaItems">{item.items}</button>
              <button onClick={() => Add(item)}>
                <div> + </div>
              </button>
              <span className="total"> : {num} eu</span>
              <button onClick={() => eliminacesta(item, index)}>
                <div> 🗑️ </div>
              </button>
            </div>
          );
        })}
        <div className="recibo">
          <div className="total">
            {total > 0 ? `Total  : ${total} eu` : "🎁Choose Your Gifth🎁"}
          </div>
          <div className="total">
            {total > 0
              ? `Iva(21%): ${Math.trunc((total * 21) / 100)} eu`
              : null}
          </div>
          <div className="total">
            {total > 0
              ? `Total to Pay: ${Math.trunc((total * 21) / 100 + total)} eu`
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cesta;
