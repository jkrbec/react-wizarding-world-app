import React, { useState, useEffect } from "react";
import OneCardSlider from "./components/OneCardSlider";
import { getInfo, intro_sound } from "./data";
import "./App.css"


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const characters = await getInfo();
      setCharacters(characters);
    }
    fetchData();
  }, []);

  return (
    <div >
      <h1 className="{`one-character ${character.house.toLowerCase()}`}">Wizarding World App</h1>
    <div className="slider">
      

      <OneCardSlider characters={characters} />
      
    </div>
    </div>
  );
};

export default App;
