/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inventario from "./component/inventario";
import NotFoundPage from "./component/404/NotFoundPage.jsx";
import WhishList from "./component/WhishList";

function App() {
  const initial = [
    {
      id: 1,
      name: "Adidas Running",
      description: "running shoes",
      stock: false,
      imagen: "adidas2.jpeg",
      price: 34,
      whish: false,
    },
    {
      id: 2,
      name: "Nike model b",
      description: "running shoes",
      stock: true,
      imagen: "nike2.jpeg",
      price: 44,
      whish: false,
    },
    {
      id: 3,
      name: "Adidas Speed",
      description: "running shoes",
      stock: true,
      imagen: "adidas.jpeg",
      price: 48,
      whish: false,
    },
    {
      id: 4,
      name: "Nike ",
      description: "running shoes",
      stock: true,
      imagen: "nike.jpeg",
      price: 44,
      whish: false,
    },
  ];

  const [state, setState] = useState([]);
  const [shoes, setShoes] = useState(initial);

  const Elimina = (item, index) => {
    let index2 = shoes.indexOf(item);
    shoes[index2].whish = false;
    setShoes([...shoes]);
    const tempProduct = [...state];
    tempProduct.splice(index, 1);
    setState(tempProduct);
  };
  const Deseos = (index) => {
    // eslint-disable-next-line no-lone-blocks
    {
      state.includes(shoes[index]) ? null : Add(index);
    }
  };
  function Add(index) {
    shoes[index].whish = true;
    state.push(shoes[index]);
    setShoes([...shoes]);
  }
  console.log(state);
  return (
    <Router>
      <aside>
        <Link to="/">|HOME|</Link>
        <Link to="WhishList">|WhishList|</Link>
      </aside>
      <Routes>
        <Route
          path="/"
          element={
            <Inventario inicial={shoes} deseo={Deseos} elimina={Elimina} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/WhishList"
          element={<WhishList Data={state} elimina={Elimina} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
