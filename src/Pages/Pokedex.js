// This Pokedex shows the pokemon the user searches for. Takes data from the input and uses it to get the Giphy from Giphy API and Poke info from Pokemon API

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { useState, useEffect } from 'react';
import { pokeData, giphyData } from '../data';  // for named exports.. exporting the name of the function

export default function Pokedex() {
    
    // array destructring allow you to read values from an array. 
    // the state variable pData will track the input value, the onChange handler gets called when ever the text of the input 
    let [pData, setPokeData] = useState({})
    console.log("PokeData!!!"+ pData) // returns a Promise also similar to async below
    //   let [gData, setGiphyData] = useState(giphyData)
    //    console.log("GiphyData!!!"+ gData)
    let [input, setInput] = useState('')
    let [ability, setAbility] = useState(null) 
    // used use state to grab the ability of the pokemon which was an array
    // lets you grab the val of input
    // console.log(setGiphyData)

      useEffect(()=>{
        Getpokemon();
      },[])
    // runs a function every render of the program

    function pokeInputChange(e) {
        //e.target = inputbox and the .val is the value of what ever is typed
        //this set input is the same as input = e.target.value - this is how you use the use state
        setInput(e.target.value)
    }

    async function Getpokemon() {
        
        let pokemon = await pokeData(input)
        setPokeData(pokemon)
        // fetching data again and saving it in pokemon
        console.log(pokemon)
        //using another useState function to save the ability of the pokemon to memory
        setAbility(pokemon.abilities[0].ability.name)
        
    }

    return (
    
        <>
            <Nav />
            <div className="container pokedex-container">
                <div className="pokescreen-container">
                    {/* the onChange handler gets called when ever the input changes */}
                    <div className="inputContainer">
                    <input type="text" value={input} onChange={pokeInputChange} placeholder="Enter Poke Name here..." />
                    <button onClick={Getpokemon} placeholder="S"> Search </button>
                    </div>

                    <div className="pokeImg">
                        <h3> img here </h3>
                    {/* <img src="" alt="" /> */}
                   </div>
                   <div className="pokeImg2">
                        <h3> img here </h3>
                    {/* <img src="" alt="" /> */}
                   </div>

                   <div className="dex">
                   <h1>Name : {pData.name} </h1>
                   {/* <h1>Pose 1 : <img src={pData.sprites.back_default} alt="Image of the current pokemon" /> </h1> */}
                   {/* {/* <h1>Pose 2 : <img src={pData.sprites.back_shiny} alt="Image of the current pokemon" /> </h1> */}
                   {/* <h1>Pose 3 : <img src={pData.sprites.front_default} alt="Image of the current pokemon" /> </h1>  */}
                   <p>Height : {pData.height} Feet</p> 
                    <p>Weight : {pData.weight} Pounds</p> 
                    {/* <h1>Ability : {ability} </h1>  // gives one ability */}
                    {pData?.abilities?.map( item => {
                        return(
                            <p>Ability : {item.ability.name}</p> 
                        );
                    })}
                   </div>
                   
                </div>
            </div>
            <Footer /> 
        </>
    );
} {/* calls another function to set the data */}