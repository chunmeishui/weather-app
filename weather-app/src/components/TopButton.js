import React from "react";
import "../App.css";

function TopButton() {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Sydney" },
    { id: 3, title: "Tokyo" },
    { id: 4, title: "Torontor" },
    { id: 5, title: "Paris" }
  ];

  const city = cities.map((city,index)=><button key={index}>{city.title}</button>)
  return <div className="top-cities-container">{city}</div>;
}

export default TopButton;
