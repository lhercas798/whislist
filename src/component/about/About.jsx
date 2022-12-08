import React from "react";
import img from "./Martin.png";
import { Countdown } from "./Count";
const About = () => {
   return (
    <div>
      <span>
        Soy Reservista de la Armada Española, desde que cuento con algo mas de
        tiempo. He realizado varios cursos, y éste de programación y desarrollo web,
        me ha encantado.
      </span>
      <h3>
        Agradesco en especial al Instructor del OpenBootcamp, por su Curso React
        Intermedio
      </h3>

      <img
        style={{
          margin: "50px",
          display: "block",
          width: "100px",
          height: "100px",
        }}
        src={img}
        alt="instructor"
      />
      <h3>Instructor Martín San José</h3>
   <div>
    <Countdown/>
    <h2>Para el Nuevo Año</h2>
   </div>
   
    </div>
   
  );
};

export default About;
