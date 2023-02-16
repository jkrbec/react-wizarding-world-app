// Importing required modules
import React from "react";
import "./OneCardSlider.css";
import { useState, useEffect } from "react";
import { getInfo, additional_data, intro_sound } from "../data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// Defining the OneCardSlider component
const OneCardSlider = ({ characters }) => {

    // Playing intro sound on mount
    useEffect(() => {
    const introAudio = new Audio(intro_sound.intro);
    introAudio.loop = true;
    introAudio.play();
    // Stop intro sound on unmount
    return () => introAudio.pause();        
    }, [intro_sound.intro]);
   
    // Setting state variables for current character index and current character object
    const [index, setIndex] = useState(0);
    const character = characters[index];

        // Show loading message if there are no characters
        if (!characters.length) {
        return <div>Loading...</div>;
        }

    // Helper function to check if the character index is within bounds
    const checkCharacterNumber = (characterIndex) => {
        if (characterIndex < 0) {
        // If the index is less than 0, set it to the last character
        return characters.length - 1;
        } else if (characterIndex > characters.length - 1) {
        // If the index is greater than the number of characters, set it to the first character
        return 0;
        } else {
        // Otherwise, return the index as is
        return characterIndex;
        }
        };
  // function to go to the next character
  const nextCharacter = () =>{
      setIndex( (index) => {
          const newIndex = index + 1
          return checkCharacterNumber(newIndex)
      })
  }
  
  // function to go to the previous character
  const previousCharacter = () =>{
      setIndex( (index) => {
          const newIndex = index - 1
          return checkCharacterNumber(newIndex)
      })
  }
  
  return (
    <div className={`one-character ${character.house.toLowerCase()}`}>
      
        {/* Playing intro sound */}
         <audio id="introSound" src="http://soundfxcenter.com/movies/harry-potter/8d82b5_Harry_Potter_Intro_Sound_Effect.mp3" loop></audio>

        {/* Character image */}
        <img src={character.image || additional_data[character.name]} alt="" />
        {/* Character name */}
        <h2 className="character-name">{character.name}</h2>
        {/* Character alternate names */}
        <p>
        {character.alternate_names ? (
            <p>{character.alternate_names.join(" | ")}</p>
        ) : (
            <div></div>
        )}
        </p>
        {/* Character house */}
        <p>{character.house}</p>
        {/* Character ancestry */}
        <p>{character.ancestry}</p>
        {/* Character wand information */}
        <p>
        Wand: {character.wand.wood}, Length: {character.wand.length} in, Core: {character.wand.core}
        </p>
        {/* Button to go to previous character */}
        <button className="{`one-character ${character.house.toLowerCase()}`}" onClick={previousCharacter}>
        <FaArrowAltCircleLeft/>
        </button>
        {/* Button to go to next character */}
        <button onClick={nextCharacter}>
        <FaArrowAltCircleRight/>
        </button>
    </div>

  );
  
  };


export default OneCardSlider