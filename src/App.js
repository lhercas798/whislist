/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inventario from "./component/inventario";
import NotFoundPage from "./component/404/NotFoundPage.jsx";
import WhishList from "./component/WhishList";
import About from "./component/about/About";
import  Cesta  from "./component/Cesta";

function App() {
  const initial = [
    {
      id: 1,
      name: "Adidas Running",
      description: "running shoes",
      items:0,
      stock: false,
      imagen: "adidas2.jpeg",
      price: 34,
      whish: false,
    },
    {
      id: 2,
      name: "Nike model b",
      description: "running shoes",
      items :0,
      stock: true,
      imagen: "nike2.jpeg",
      price: 44,
      whish: false,
    },
    {
      id: 3,
      name: "Adidas Speed",
      description: "running shoes",
      items:0,
      stock: true,
      imagen: "adidas.jpeg",
      price: 48,
      whish: false,
    },
    {
      id: 4,
      name: "Nike ",
      description: "running shoes",
      items:0,
      stock: true,
      imagen: "nike.jpeg",
      price: 44,
      whish: false,
    },
  ];

  const [state, setState] = useState([]);
  const [shoes, setShoes] = useState(initial);
  // const [tempCesta,setTempCesta]=useState(initial)
  const [cesta, setCesta] = useState([]);
  const Elimina = (item, index) => {
    const tempProduct = [...state];
    tempProduct.splice(index, 1);
    setState(tempProduct);
    let index2 = shoes.indexOf(item);
    shoes[index2].whish = false;
    setShoes([...shoes]);
  };
  const Elimina2 = (item) => {
    const tempProduct = [...state];
    let index = state.indexOf(item);
    tempProduct.splice(index, 1);
    setState(tempProduct);
    let index2 = shoes.indexOf(item);
    shoes[index2].whish = false;
    setShoes([...shoes]);
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
  /**
   * 
   * Funciones para Carrito 
   *  
   */
  const AddToBuy = (item,index) => {
   
    {
      cesta.includes(shoes[index]) ? AddItems(item) : AddCesta(index);
     
    
    }
  };
  function AddItems(item,index){
    const index2= cesta.indexOf(item)
    cesta[index2].items++; 

setCesta([...cesta]);
  }
  function RestItems(item,index){
    const index2= cesta.indexOf(item)
   if(cesta[index2].items>0) {cesta[index2].items -- ;} else
    {EliminaCesta(item,index) ;} 

setCesta([...cesta]);
  }
  function AddCesta(index) {
    
    cesta.push(shoes[index]);
    cesta[index].items++
    setCesta([...cesta]);
  }
  const EliminaCesta = (item, index) => {
    const tempCesta = [...cesta];
    let index2 = cesta.indexOf(item);
    cesta[index2].items = 0;
    setCesta([tempCesta]);
    tempCesta.splice(index, 1);
    setCesta(tempCesta);
    
  };
  let num=15;
  return (
    <Router>
      <aside className="aside">
        <span className="Feliz" >
          🎁Feliz 2023✨
        </span>
        <Link to="/" className='Link'>
          ||HOME|
        </Link>
        <Link
          to="WhishList" className="Link"
          
        >
          |WhishList|
        </Link>
        <Link className="about" to="About" >
          |About||
        </Link>
        <Link className="carrito" to="Compra">Cart🛒<span className="miniatura">{num}</span></Link>
      </aside>
      <Routes>
        <Route
          path="/"
          element={
            <Inventario inicial={shoes} deseo={Deseos} elimina={Elimina2} addCest={AddToBuy}  />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/Compra"
          element={<Cesta DatosCompra={cesta} rest={RestItems} Add={AddItems} eliminacesta={EliminaCesta}/>}
        />
        <Route
          path="/WhishList"
          element={<WhishList Data={state} elimina={Elimina} />}
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
