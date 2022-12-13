import React from "react";
import img from "./Martin.png";
import link from "./linkedin.jpg";
import facebook from "./Facebook.png";
import { Countdown } from "./Count";

const About = () => {
  return (
    <div className="AboutFondo">
      <span>
        <h3 style={{width:'380px',margin:'0 auto',display:'block',textAlign:'justify' }}>
          Soy Reservista de la Armada Española, desde que cuento con algo
          mas de tiempo. He realizado varios cursos, y éste de programación
          y desarrollo web, me ha encantado.
        </h3>
        <div style={{ display: "block" }}>
          <a
            href="https://www.linkedin.com/in/leonardo-hermida-831409250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                display: "inline",
                marginLeft: "10px",
                width: "50px",
                height: "50px",
              }}
              src={link}
              alt="Linkdn"
            />
          </a>
          <a
            href="https://www.facebook.com/lhercas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                display: "inline",
                marginLeft: "10px",
                width: "50px",
                height: "50px",
              }}
              src={facebook}
              alt="Linkdn"
            />
          </a>
        </div>
      </span>
      <h3 style={{width:'380px',margin:'0 auto',display:'block',textAlign:'justify' }}>
        Agradesco en especial al Instructor del OpenBootcamp, por su Curso React
        Intermedio
      </h3>

      <img
        style={{
          margin: "0 auto",
          display: "block",
          width: "100px",
          height: "100px",
        }}
        src={img}
        alt="instructor"
      />
      <h3>Instructor Martín San José</h3>
      <div><h2>Faltan :</h2>
        <Countdown />
        <h2 style={{width:'600px',margin:'0 auto',display:'block' }}>🎊Para el Nuevo Año🎉</h2>
      </div>
    </div>
  );
};

export default About;
