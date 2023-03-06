## TITLE
Pokemon Giphy app

## CONCEPT
when a user inputs a pokemon it produces a pokemon giphy with the pokemon's strengths and weaknesses. When the the user inputs pokemon name, the input value should be updated in the Giphy API search query to search for a Giphy that matches the current input.

## APIs

Giphy API Docs - https://developers.giphy.com/docs/api/endpoint#trending 
Poke API Docs - https://pokeapi.co 

## STEPS

1. Create the VS Code folder 
2. delete unwanted files and folders
3. download react router
4. research project + gather clearity of concept
5. Fetch both APIs.. Make sure APIs work
6. Wireframe with Figma
7. components - input search, button, giphy graphic container, header+footer,sidebar
8. pages - Contact, Home,Dex and index

TESTING IN THE APP.JS

## Utilized a method to test the fetch request of the APIs in Data.js

export default function App(){
 await function for testing the buttons that fetch data.. you can use useEffect 
   async function test(){
     let pokeResult = await pokeData()
     console.log(pokeResult)
   } 
   async function test2(){
       let giphyResult = await giphyData()
       console.log(giphyResult)
   }

  RETURN(
    <>
     used with async functions above 
   <input type="text" placeholder='Search Your Pokemon! =)'/>
    <button onClick={test}>Search</button>
    <button onClick={test2}>Giphy Search</button> 
    </>
  );
  }

  ## Bugs and/or difficulties
  - css containers for pokeinfo and poke giphy

  ## Things I hope to improve 
  - Cleaner code
  - Wireframe in Figma
  - Use of Giphy API to get giphs for pokemon
  - Completing the Pokeindex (index of all pokemon owned by the current trainer)
  - General styling (responsive design and OOP)
  - Trouble shooting to check if a pokemon has multiple abilities 
  - adding more to this README

  ** Having the search bar search through both APIs and fetching then having the button produce the Poke info andPoke giphy **