/* eslint-disable no-use-before-define */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inventario from "./component/inventario";
import NotFoundPage from "./component/404/NotFoundPage.jsx";
import WhishList from "./component/WhishList";
import About from "./component/about/About";
import Cesta from "./component/Cesta";
import Search from "./component/Search";

function App() {
  const initial = [
    {
      id: 1,
      name: "Adidas Running",
      description: "running shoes",
      items: 0,
      stock: false,
      imagen: "adidas2.jpeg",
      price: 34,
      whish: false,
    },
    {
      id: 2,
      name: "Nike model b",
      description: "running shoes",
      items: 0,
      stock: true,
      imagen: "nike2.jpeg",
      price: 46,
      whish: false,
    },
    {
      id: 3,
      name: "Adidas Speed",
      description: "running shoes",
      items: 0,
      stock: true,
      imagen: "adidas.jpeg",
      price: 48,
      whish: false,
    },
    {
      id: 4,
      name: "Nike ",
      description: "running shoes",
      items: 0,
      stock: false,
      imagen: "nike.jpeg",
      price: 44,
      whish: false,
    },
    {
      id: 5,
      name: "Reebook ",
      description: "running shoes",
      items: 0,
      stock: true,
      imagen: "reebock.webp",
      price: 44,
      whish: false,
    },
    {
      id: 6,
      name: "Reebook ",
      description: "tennis shoes",
      items: 0,
      stock: true,
      imagen: "-reebok-.jpg",
      price: 45,
      whish: false,
    },
    {
      id: 7,
      name: "Adidas Per. ",
      description: "tennis shoes",
      items: 0,
      stock: true,
      imagen: "adidasp.jpeg",
      price: 49,
      whish: false,
    },
    {
      id: 7,
      name: "Puma ",
      description: "tennis shoes",
      items: 0,
      stock: false,
      imagen: "puma.webp",
      price: 50,
      whish: false,
    },
    {
      id: 8,
      name: "Puma Piel ",
      description: "causal shoes",
      items: 0,
      stock: true,
      imagen: "pumapiel.jpg",
      price: 55,
      whish: false,
    },
    {
      id: 9,
      name: "Puma red ",
      description: "causal shoes",
      items: 0,
      stock: true,
      imagen: "pumaRojo.jpg",
      price: 52,
      whish: false,
    },
  ];

  const [state, setState] = useState([]);
  const [shoes, setShoes] = useState(initial);
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
  
  function Add(item) {
    let index=shoes.indexOf(item)
    shoes[index].whish = true;
    state.push(shoes[index]);
    setShoes([...shoes]);
  }
  /**
   *
   * Funciones para Carrito
   *
   */
  // const AddToBuy = (item, index) => {
  //   {
  //     cesta.includes(shoes[index]) ? AddItems(index,item) : AddCesta(index,item);
  //   }
  // };
  const AddToBuy = (item, index) => {
    {
      cesta.includes(item) ? AddItems(index,item) : AddCesta(index,item);
    }
  };
  
  function AddItems(index, item) {
    const index2 = cesta.indexOf(item);
    cesta[index2].items++;

    setCesta([...cesta]);
  }
  function AddItems2(item) {
    const index2 = cesta.indexOf(item);
    cesta[index2].items++;

    setCesta([...cesta]);
  }

  function RestItems(item, index) {
    const index2 = cesta.indexOf(item);
    if (cesta[index2].items > 0) {
      cesta[index2].items--;
    } else {
      EliminaCesta(item, index);
    }
    setCesta([...cesta]);
  }
  function AddCesta(index,item) {
    let index2=shoes.indexOf(item)
    shoes[index2].items++;
    
    cesta.push(shoes[index2]);

    setCesta([...cesta]);
  }
 
  const EliminaCesta = (item, index) => {
    const tempCesta = [...cesta];
    let index2 = shoes.indexOf(item);
    shoes[index2].items = 0;
    setCesta([tempCesta]);
    tempCesta.splice(index, 1);
    setCesta(tempCesta);
  };
  const [style, setStyle] = useState("ventana");

  const initialValue = 0;
  let num = cesta
    .map((cesta) => cesta.items)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  let Total = cesta
    .map((cesta) => cesta.items * cesta.price)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  const changeStyle = () => {
    setStyle("ventana2");
  };
  const changeStyleOut = () => {
    setStyle("ventana");
  };
const[tempshoes,setTempShoes]=useState(shoes);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = shoes.filter((shoes) => {
      return shoes.name.toLowerCase().search(value) !== -1;
    });
    setTempShoes(result);
    // if(result.length > 0 ) {setTempShoes(shoes); setShoes(result)} else {setShoes(tempshoes);}
  };

  return (
    <Router>
      <aside
        // onClick={() => {
        //   setShoes(tempshoes);
        // }}
        className="aside"
      >
        <span className="Feliz">🎁Feliz 2023✨</span>
        <Link to="/" className="Link">
          Home
        </Link>
        <Link to="WhishList" className="Link">
          &nbsp;WhishList
        </Link>
        <Link className="about" to="About">
          &nbsp; About
        </Link>
        <Link
          onMouseOut={() => {
            changeStyleOut();
          }}
          onMouseOver={
            Total > 0
              ? () => {
                  changeStyle();
                }
              : null
          }
          className="carrito"
          to="Compra"
        >
          &nbsp;🛒
          <span
            className="miniatura"
            onMouseOut={() => {
              changeStyleOut();
            }}
            onMouseOver={
              Total > 0
                ? () => {
                    changeStyle();
                  }
                : null
            }
          >
            {num < 10 ? "0" + num : num}
          </span>
          <div className={style}>
            {cesta.map((item, index) => {
              const num = item.price * item.items;

              return (
                <div key={index} className="contenedorCesta">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src={`/img/${item.imagen}`}
                    alt=""
                  />
                  <span className="totalMini">
                    {" "}
                    Unit price: {item.price} eu{" "}
                  </span>

                  <button className="cestaItems">{item.items}</button>

                  <span className="totalMini"> : {num} eu</span>
                </div>
              );
            })}
            <div className="total">
              {Total > 0
                ? `Total + (IVA): ${Math.trunc((Total * 21) / 100 + Total)} eu`
                : null}
            </div>
          </div>
        </Link>
        <Link to="/search">
          <label style={{marginLeft:'5px'}}>🔎:</label>
          <input placeholder="Search..." style={{borderRadius:'5px',width:'50px'}}type="text" onChange={(event) => handleSearch(event)} />
        </Link>
      </aside>
      <Routes>
        <Route
          path="/"
          element={
            <Inventario
              inicial={shoes}
              deseo={Deseos}
              elimina={Elimina2}
              addCest={AddToBuy}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              Inicial={tempshoes}
              Deseo={Deseos}
              Elimina={Elimina2}
              AddCest={AddToBuy}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/search" element={<NotFoundPage />} />
        <Route
          path="/Compra"
          element={
            <Cesta
              DatosCompra={cesta}
              rest={RestItems}
              Add={AddItems2}
              eliminacesta={EliminaCesta}
              total={Total}
            />
          }
        />
        <Route
          path="/WhishList"
          element={<WhishList Data={state} elimina={Elimina}  toCest={AddToBuy}/>}
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
