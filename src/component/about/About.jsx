import React from "react";
import img from "./Martin.png";
const About = () => {
  return (
    <div>
      <span>
        Soy Reservista de la Armada Española, desde que cuento con algo mas de
        tiempo. Estudie varios cursos, y este de programación y desarrolo web,
        me ha encantado. Agradesco en especial al Instructor Martín de
        OpenBootcamp, por su Curso React Intermedio{" "}
      </span>
      <img
        style={{display:'block', width: "100px", height: "100px" }}
        src={img}
        alt="instructor"
      />
    </div>
  );
};

export default About;
