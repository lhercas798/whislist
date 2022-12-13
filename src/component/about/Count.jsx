import React, { useState } from "react";

export function Countdown() {
  const [count, setCount] = useState([0, 0, 0, 0, 0, 0]);
  function conteo() {
    const newYears = "1 Jan 2023";
    const newYearsdate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsdate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    setCount([currentDate, totalSeconds, days, hours, mins, seconds]);
  }
  setInterval(() => {
    conteo();
  }, 1000);
  return (
    <div>
      <h2>
        {count[2] < 10 ? `0${count[2]}` : count[2]} Días: &nbsp;
        {count[3] < 10 ? `0${count[3]}` : count[3]} Horas: &nbsp;
        {count[4] < 10 ? `0${count[4]}` : count[4]} Minutos: &nbsp;
        {count[5] < 10 ? `0${count[5]}` : count[5]} Segundos.
      </h2>
    </div>
  );
}